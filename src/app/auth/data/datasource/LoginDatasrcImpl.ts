import { signIn, signOut,  SignInOutput } from "aws-amplify/auth";
import { LoginDatasource } from "./LoginDatasource";

export class LoginDataSrcImpl implements LoginDatasource {
  async login(username: string, password: string, role: string): Promise<SignInOutput> {
    try {
      let signInOutput: SignInOutput; // Initialize the variable
      
      switch (role) {
        case "Student":
          signInOutput = await signIn({ username, password });
          break;
        case "Staff":
          signInOutput = await signIn({ username, password });
          break;
        default:
          throw new Error(`Invalid role: ${role}`);
      }

      return signInOutput;

    } catch (err: any) {
      throw new Error("LoginDataSrcImpl/login error " + err);
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut();
    } catch (error) {
      throw new Error("LoginDataSrcImpl/logout error " + error);
    }
  }
}