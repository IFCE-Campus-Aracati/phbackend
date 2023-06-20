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
import { CreatePrinterController } from "./controllers/printer/CreatePrinterController";
import { GetAllPrinterController } from "./controllers/printer/GetAllPrinterController";
import { DetailsPrinterController } from "./controllers/printer/DetailsPrinterController";
import { DeletePrinterController } from "./controllers/printer/DeletePrinterController";
import { UpdatePrinterController } from "./controllers/printer/UpdatePrinterController";
import { CreaterPrintController } from "./controllers/print/CreatePrintController";
import { UpdatePrintOwnerController } from "./controllers/print/UpdatePrintOwnerController";
import { UpdatePrintController } from "./controllers/print/UpdatePrintController";
import { DeletePrintController } from "./controllers/print/DeletePrintController";
import { GetAllPrintController } from "./controllers/print/GetAllPrintController";
import { GetUserPrintController } from "./controllers/print/GetUserPrintController";
import { SearchByIdPrintControler } from "./controllers/print/SearchByIdPrintController";
import { ViewUserController } from "./controllers/user/ViewUserController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post("/signUp", new CreateUserController().handle);
router.post("/signIn", new AuthUserController().handle);
router.get("/detailsUser", isAuthenticated, new DetailsUserController().handle);
router.put("/resetPassword", isAuthenticated, new ResetUserPasswordController().handle);
router.put("/updateUserPhoto", isAuthenticated, upload.single("file"), new UpdateUserPhotoController().handle);
router.put("/changeRole", [isAuthenticated, isAdmin], new ChangeUserRoleController().handle);
router.get("/users", [isAuthenticated, isAdmin], new GetAllUserController().handle);
router.delete("/deleteUser", [isAuthenticated, isAdmin], new DeleteUserController().handle);
router.get("/viewUser", [isAuthenticated, isAdmin], new ViewUserController().handle);

router.post("/createPrinter", [isAuthenticated, isAdmin], new CreatePrinterController().handle);
router.get("/printers", [isAuthenticated, isAdmin], new GetAllPrinterController().handle);
router.get("/detailsPrinter", [isAuthenticated, isAdmin], new DetailsPrinterController().handle);
router.delete("/deletePrinter", [isAuthenticated, isAdmin], new DeletePrinterController().handle);
router.put("/updatePrinter", [isAuthenticated, isAdmin], new UpdatePrinterController().handle);

router.post("/createPrint", isAuthenticated, upload.single("file"), new CreaterPrintController().handle);
router.put("/updatePrintOwner", isAuthenticated, upload.single("file"), new UpdatePrintOwnerController().handle);
router.put("/updatePrint", [isAuthenticated, isAdmin], new UpdatePrintController().handle);
router.delete("/deletePrint", isAuthenticated, new DeletePrintController().handle);
router.get("/getAllPrints", [isAuthenticated, isAdmin], new GetAllPrintController().handle);
router.get("/getUserPrint", isAuthenticated, new GetUserPrintController().handle);
router.get("/searchByIdPrint", new SearchByIdPrintControler().handle);

export { router };
