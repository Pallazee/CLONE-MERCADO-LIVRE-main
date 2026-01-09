import { Router } from "express";

import { authRoutes } from "./modules/auth/auth.routes";
import { userRoutes } from "./modules/users/users.routes";
import { productRoutes } from "./modules/products/products.routes";

const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/users", userRoutes);
routes.use("/products", productRoutes);

export { routes };
