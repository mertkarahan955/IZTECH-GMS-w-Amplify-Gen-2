import { User } from "../../../auth/domain/entity/User";
import { UserRepository } from "../../domain/repository/UserRepository";
import { UserDatasource } from "../datasource/UserDatasource";

export class UserRepoImpl implements UserRepository {
  datasource  : UserDatasource;
  constructor(_datasource: UserDatasource) {
    this.datasource = _datasource;
  }
  async getUser(): Promise<User> {
   try {
    return await this.datasource.getUser();
   } catch (error) {
    throw new Error("UserRepoImpl/getUser error " + error);
   }
  }
}