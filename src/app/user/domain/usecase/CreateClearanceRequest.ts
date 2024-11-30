
import { ClearanceRequest } from "../../../../core/data/ClearanceRequest/ClearanceRequest";
import { UserRepository } from "../repository/UserRepository";

export class CreateClearanceRequest {
  repository : UserRepository;

  constructor(_repository: UserRepository) {
    this.repository = _repository;
  }

 async createClearanceRequest(newClearanceRequest: ClearanceRequest) : Promise<ClearanceRequest | null> {
    try {
      return await this.repository.createClearanceRequest(newClearanceRequest);
    } catch (error) {
      throw new Error("CreateClearanceRequest/createClearanceRequest error " + error);
    }
 }
}