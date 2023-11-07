import { ObjectId } from "mongodb";

interface User {
  _id?: ObjectId;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
}

export { User };
