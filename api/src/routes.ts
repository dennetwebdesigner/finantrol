import express from "express";
import AuthController from "./app/controller/AuthController";
import MarketplaceController from "./app/controller/MarketplaceController";
import ProductController from "./app/controller/ProductController";
import UserController from "./app/controller/UserController";
import Auth from "./app/middlewares/Auth";

const router = express.Router();
const app = express();

// USERS ROUTES
router.post("/users", UserController.create);
// AUTH ROUTE
router.post("/auth", AuthController.create);

router.use(Auth);

// USERS ROUTES

router.get("/auth", AuthController.index);

router.get("/users", UserController.findAll);
router.get("/users/:userID", UserController.findOne);
router.put("/users/:userID", UserController.update);
router.delete("/users/:userID", UserController.destroy);

router.get("/marketplaces", MarketplaceController.show);
router.post("/marketplaces", MarketplaceController.create);
router.delete("/marketplaces/:marketplace_id", MarketplaceController.destroy);

router.post("/products", ProductController.create);
router.get("/products/:marketplace_id", ProductController.show);

export { router };
