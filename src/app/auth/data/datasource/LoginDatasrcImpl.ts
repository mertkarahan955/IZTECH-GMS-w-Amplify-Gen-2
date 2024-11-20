import { signIn, signOut,  SignInOutput } from "aws-amplify/auth";
import { LoginDatasource } from "./LoginDatasource";

export class LoginDataSrcImpl implements LoginDatasource {
  async login(username: string, password: string): Promise<SignInOutput> {
    try {
      const signInOutput = await signIn({
        username: username,
        password: password,
      }); // Sign in with AWS Cognito
    
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