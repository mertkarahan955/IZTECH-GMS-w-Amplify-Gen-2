import { User } from "../../../auth/domain/entity/User";


export interface UserRepository {
  getUser(): Promise<User>; 
}