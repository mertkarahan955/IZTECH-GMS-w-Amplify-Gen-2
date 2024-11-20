import { User } from "../../../../domain/Model/User";
import { UserRepository } from "../../Repository/User/UserRepository";

export class GetUser {
  repository: UserRepository;

  constructor(_repository: UserRepository) {

    this.repository = _repository;
}

  async getUser(): Promise<User> {
    try {
      return this.repository.getUser();
    } catch (error) {
      throw new Error("GetUser/getUser error " + error);
      
    }
  }
}