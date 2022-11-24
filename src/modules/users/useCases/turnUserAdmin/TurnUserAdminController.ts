import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id }: any = request.params;

    try {
      this.turnUserAdminUseCase.execute(id);
    } catch (error) {
      return response.status(404).json({ error });
    }

    return response.status(201).send();
  }
}

export { TurnUserAdminController };
