import { GraduationRequest } from "../../../../core/data/GraduationRequest/GraduationRequest";
import { User } from "../../../auth/domain/entity/User";


export interface UserRepository {
  getUser(): Promise<User>; 

  createGraduationRequest( newGraduationRequest: GraduationRequest ): Promise<GraduationRequest | null>;
}