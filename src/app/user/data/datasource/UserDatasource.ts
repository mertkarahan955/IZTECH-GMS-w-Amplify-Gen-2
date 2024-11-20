import { User } from "../../../domain/Model/User";

export interface UserDatasource {
  getUser() : Promise<User>;
}