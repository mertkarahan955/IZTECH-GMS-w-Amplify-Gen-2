import { ClearanceRequest } from "../../../../core/data/ClearanceRequest/ClearanceRequest";
import { GraduationRequest } from "../../../../core/data/GraduationRequest/GraduationRequest";
import { User } from "../../../auth/domain/entity/User";


export interface UserRepository {
  getUser(): Promise<User>; 
  createClearanceRequest (newClearanceRequest: ClearanceRequest): Promise<ClearanceRequest | null>;
  createGraduationRequest( newGraduationRequest: GraduationRequest ): Promise<GraduationRequest | null>;

}