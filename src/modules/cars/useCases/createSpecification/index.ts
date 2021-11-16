import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

const specifications = new SpecificationsRepository();
const createSpecificationsUseCase = new CreateSpecificationsUseCase(
  specifications
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationsUseCase
);

export { createSpecificationController };
