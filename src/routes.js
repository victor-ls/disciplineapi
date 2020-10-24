import { Router } from "express";

import DisciplineController from "./app/controllers/DisciplineController";

const routes = new Router();

routes.get("/discipline", DisciplineController.index);
routes.post("/discipline", DisciplineController.store);

routes.put("/discipline/:id", DisciplineController.update);
routes.delete("/discipline/:id", DisciplineController.delete);

export default routes;
