import { GraduationRequest } from "../../../../core/data/GraduationRequest/GraduationRequest";
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

  async createGraduationRequest( newGraduationRequest: GraduationRequest ): Promise<GraduationRequest | null> {
    try {
      return await this.datasource.createGraduationRequest( newGraduationRequest );
    } catch (error) {
      throw new Error("UserRepoImpl/createGraduationRequest error " + error);
    }
  }
}