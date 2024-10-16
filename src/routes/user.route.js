    const express = require("express");
    const user_controller = require("../controllers/user.controller");
    const router = express.Router();
    const { authUser, authorizeAdmin, } = require("../middleware/auth");



    router.post("/register", user_controller.register);
    router.post("/login", user_controller.login);
    router.put("/updateUser", authUser, authorizeAdmin, user_controller.updateUser);
    router.delete("/deleteUser", authUser, authorizeAdmin, user_controller.deleteUser);
    router.delete("/alluser", authUser, authorizeAdmin, user_controller.alluser);
    router.get('/oneuser', authUser, authorizeAdmin, user_controller.getUserData);



    module.exports = router;
