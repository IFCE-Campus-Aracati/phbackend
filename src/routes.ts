import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { GetAllUserController } from "./controllers/user/GetAllUserController";
import { ResetUserPasswordController } from "./controllers/user/ResetUserPasswordController";
import { UpdateUserPhotoController } from "./controllers/user/UpdateUserPhotoController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { isAdmin } from "./middlewares/isAdmin";
import { ChangeUserRoleController } from "./controllers/user/ChangeUserRoleController";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post("/signUp", new CreateUserController().handle);
router.post("/signIn", new AuthUserController().handle);
router.get("/detailsUser", isAuthenticated, new DetailsUserController().handle);
router.put("/resetPassword", isAuthenticated, new ResetUserPasswordController().handle);
router.put("/updateUserPhoto", isAuthenticated, upload.single("file"), new UpdateUserPhotoController().handle);
router.put("/changeRole", [isAuthenticated, isAdmin], new ChangeUserRoleController().handle);
router.get("/users", [isAuthenticated, isAdmin], new GetAllUserController().handle);
router.post("/deleteUser", [isAuthenticated, isAdmin], new DeleteUserController().handle);

export { router };
