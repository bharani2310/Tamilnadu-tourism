import express from "express";
import { updateUser , deleteUser , getSingleUser , getAllUser, createUser ,getUserCount} from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router=express.Router();

//create user
router.post("/",createUser);

//update user
router.put("/:id",verifyUser,updateUser);

// delete user
router.delete("/:id" ,verifyUser,deleteUser);
 
// get single user
router.get("/:id", getSingleUser);

//get user count
router.get("/", getUserCount);


// get all user
router.get("/" ,getAllUser);



export default router;