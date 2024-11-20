import { SignInOutput } from "aws-amplify/auth";

export interface LoginRepository {
  login( username: string, password: string, role: string): Promise<SignInOutput>;

  logout(): Promise<void>;
}