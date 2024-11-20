import { SignInOutput } from "aws-amplify/auth";
import { LoginRepository } from "../../domain/repository/AuthRepository";
import { LoginDatasource } from "../datasource/LoginDatasource";


export class LoginRepoImpl implements LoginRepository {

  datasource: LoginDatasource;

  constructor (_datasource: LoginDatasource) {
    this.datasource = _datasource;
  }

  async login(username: string, password: string): Promise<SignInOutput> {
    try {
      return await this.datasource.login(username, password);
    } catch (error) {
      throw new Error("LoginRepoImpl/login error " + error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.datasource.logout();
    } catch (error) {
      throw new Error("LoginRepoImpl/logout error " + error);
    }
  }
}