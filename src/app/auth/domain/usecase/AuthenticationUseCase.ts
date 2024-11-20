import { SignInOutput } from "aws-amplify/auth";
import { LoginRepository } from "../repository/AuthRepository";

export class Login {
  repository: LoginRepository;

  constructor (_repository: LoginRepository) {
    this.repository = _repository;
  }

  async login( username: string, password: string, role: string): Promise<SignInOutput> {
    try {
      return this.repository.login( username, password, role);
    } catch (error) {
      throw new Error("Login/login error " + error);
      
    }
  }
}

export class Logout {
  repository: LoginRepository;

  constructor (_repository: LoginRepository) {
    this.repository = _repository;
  }

  async logout(): Promise<void> {
    try {
      await this.repository.logout();
    } catch (error) {
      throw new Error("Logout/logout error " + error);
    }
  }
}