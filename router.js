import { Router } from "express";
import {
  postAllPosts,
  getAllPosts,
  getPostById,
  updateAllPosts,
  deletePostById,
} from "./PostController.js";

const router = new Router();

// МАРШРУТИ-ROUTES
router.post("/posts", postAllPosts);
router.get("/posts", getAllPosts);
router.get("/posts/:id", getPostById);
router.put("/posts", updateAllPosts);
router.delete("/posts/:id", deletePostById);

export default router;
