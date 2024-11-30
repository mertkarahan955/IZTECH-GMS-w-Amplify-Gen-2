import { GraduationRequest } from "../../../../core/data/GraduationRequest/GraduationRequest";
import { UserRepository } from "../repository/UserRepository";

export class CreateGraduationRequest {
  repository : UserRepository;

  constructor(_repository: UserRepository) {
    this.repository = _repository;
  }

  async createGraduationRequest( newGraduationRequest: GraduationRequest ): Promise<GraduationRequest | null> {
    try {
      return await this.repository.createGraduationRequest( newGraduationRequest );
    } catch (error) {
      throw new Error("CreateGraduationRequest/createGraduationRequest error " + error);
    }
  }
}