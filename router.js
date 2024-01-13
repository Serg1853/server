import express from "express";
import validateBody from "./middlewares/validateBody";
const router = express.Router();

router.get("/");

router.get("/:fileName");

router.post("/", validateBody);

export default router;
