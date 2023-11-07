import { Request, Response } from "express";
import { client } from "../connection";
import { User } from "../Model/user_model";

// create a user
const addUser = async (req: Request, res: Response) => {
  const newUser: User = req.body;
  const usersCollection = client.db("bee-lecture-cluster").collection("user");

  try {
    const result = await usersCollection.insertOne(newUser);

    return res.status(201).json({
      message: "Added user successfully",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};

export { addUser };
