import express from "express";

import { addUser } from "../Controllers/user_controller";

const router = express.Router();

// create a user
router.post("/add", addUser);

export default router;
