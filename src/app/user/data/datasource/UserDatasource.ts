import { User } from "../../../auth/domain/entity/User";


export interface UserDatasource {
  getUser() : Promise<User>;
}