import { User } from "../../Model/User";

export interface UserRepository {
  getUser(): Promise<User>; 
}