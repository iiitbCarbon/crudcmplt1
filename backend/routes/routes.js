import { Router } from "express";
import { Createuser , Getuser , UpdateUser , DeleteUser , getOne} from "../controller/UserController.js";
const routers = Router() ;

routers.post('/create', Createuser)
routers.get('/get' , Getuser)
routers.put('/update/:id' , UpdateUser)
routers.delete('/delete/:id' , DeleteUser)
routers.get('/getone/:id' , getOne)
export default routers