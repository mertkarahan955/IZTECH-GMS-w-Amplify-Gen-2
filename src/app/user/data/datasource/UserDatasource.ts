import { ClearanceRequest } from "../../../../core/data/ClearanceRequest/ClearanceRequest";
import { GraduationRequest } from "../../../../core/data/GraduationRequest/GraduationRequest";
import { User } from "../../../auth/domain/entity/User";


export interface UserDatasource {
  getUser() : Promise<User>;
  createGraduationRequest( newGraduationRequest: GraduationRequest ) : Promise<GraduationRequest | null>;
  createClearanceRequest( newClearanceRequest: ClearanceRequest ) : Promise<ClearanceRequest | null>;
}