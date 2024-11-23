
import { fetchUserAttributes} from "aws-amplify/auth";
import { UserDatasource } from "./UserDatasource";
import { User } from "../../../auth/domain/entity/User";


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
} 