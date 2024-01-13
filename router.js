import express from "express";
import validateBody from "./middlewares/validateBody.js";
import { createFile, getFileInfo, getFiles } from "./controllers.js";

const router = express.Router();

router.get("/", getFiles);

router.get("/:fileName", getFileInfo);

router.post("/", validateBody, createFile);

export default router;
