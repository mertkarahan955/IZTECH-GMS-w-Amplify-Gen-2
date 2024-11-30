import { signIn, signOut,  SignInOutput } from "aws-amplify/auth";
import { LoginDatasource } from "./LoginDatasource";

export class LoginDataSrcImpl implements LoginDatasource {
  async login(username: string, password: string, role: string): Promise<SignInOutput> {
    try {
      
      let signInOutput: SignInOutput; // Initialize the variable
      
      signInOutput = await signIn({ username, password});
      console.log("signInOutput:", signInOutput);
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