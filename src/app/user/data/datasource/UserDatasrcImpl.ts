
import { fetchUserAttributes} from "aws-amplify/auth";
import { UserDatasource } from "./UserDatasource";
import { User } from "../../../auth/domain/entity/User";
import { GraduationRequest} from "../../../../core/data/GraduationRequest/GraduationRequest";
import { mockGraduationRequests } from "../../../../core/data/mock/MockData";



// const client = generateClient<Schema>();
export default class UserDatasrscImpl implements UserDatasource {
  async getUser(): Promise<User> {
    try {
      const userAttributes = await fetchUserAttributes();
      
      const userData: User = {
        email: userAttributes.email || '',
        emailVerified: true,
        name: userAttributes.name || '',
        profile: userAttributes.profile || '',
        sub: userAttributes.sub || ''
     }
      return userData;
    } catch (error) {
       throw  new Error("UserDatasrscImpl/getUser error " + error); 
    }
  }

  async createGraduationRequest ( newGraduationRequest: GraduationRequest ): Promise<GraduationRequest> {
    try {
       const graduationRequest = new GraduationRequest(
        newGraduationRequest.id,
        newGraduationRequest.studentName,
        newGraduationRequest.title,
        newGraduationRequest.currentHandler,
        newGraduationRequest.letters,
        newGraduationRequest.status
      );
      mockGraduationRequests.push(graduationRequest);
      return  graduationRequest;
    } catch (error) {
      throw  new Error("UserDatasrscImpl/createGraduationRequest error " + error); 
    }

  }
}

//   async createGraduationRequest(
//     newGraduationRequest: GraduationRequest
//   ): Promise<GraduationRequest | null> {
//     // Create the promise
//     const promise = client.models.GraduationRequest.create({
//       studentName: newGraduationRequest.studentName,
//       title: newGraduationRequest.title,
//       currentRole: newGraduationRequest.currentHandler,
//       letters: newGraduationRequest.letters,
//       status: newGraduationRequest.status,
//     });
  
//     try {
//       const { errors, data: newGraduationRequestData } = await promise;
  
//       if (errors) {
//         throw new Error(
//           "UserDatasrscImpl/createGraduationRequest error: " + JSON.stringify(errors)
//         );
//       }
//       if (!newGraduationRequestData) {
//         throw new Error("UserDatasrscImpl/createGraduationRequest error: No data returned.");
//       }
      
//       const transformedLetters = transformLetters(newGraduationRequestData.letters);

//       // Map API response to GraduationRequest instance
//       const mappedGraduationRequest = new GraduationRequest(
//         newGraduationRequestData.id || "",
//         newGraduationRequestData.studentName || "",
//         newGraduationRequestData.title || "",
//         newGraduationRequestData.currentRole || "Advisor", // Map currentRole to currentHandler
//         transformedLetters,
//         newGraduationRequestData.status  as RequestStatus || RequestStatus.Pending
//       );
  
//       return mappedGraduationRequest;
//     } catch (error : any) {
//       if (client.isCancelError(error)) {
//         console.log("Request was cancelled:", error.message);
//         throw new Error("Request was cancelled: " + error.message);
//       }
  
//       throw new Error(
//         "UserDatasrscImpl/createGraduationRequest unexpected error: " + error
//       );
//     }
//   }
// } 


// function transformLetters(
//   letters: any
// ): Partial<Record<"advisor" | "secretary" | "dean" | "affairs", string>> {
//   if (
//     typeof letters === "object" &&
//     letters !== null &&
//     !Array.isArray(letters)
//   ) {
//     // Filter valid keys and ensure values are strings
//     const validKeys = ["advisor", "secretary", "dean", "affairs"];
//     return Object.keys(letters)
//       .filter((key) => validKeys.includes(key) && typeof letters[key] === "string")
//       .reduce((acc, key) => {
//         acc[key as "advisor" | "secretary" | "dean" | "affairs"] = letters[key];
//         return acc;
//       }, {} as Partial<Record<"advisor" | "secretary" | "dean" | "affairs", string>>);
//   }

//   // Return an empty object if invalid
//   return {};
// }
