import { SignInOutput } from "aws-amplify/auth";

export interface LoginDatasource {
  login(username: string, password: string): Promise<SignInOutput>;

  logout(): Promise<void>;
}
