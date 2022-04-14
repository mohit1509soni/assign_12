const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


router.post("/createBook", BookController.createBook)
router.get("/bookList", BookController.getBookList)
router.post("/getBooksInYear", BookController.getBooksInYear)
router.post("/getParticularBooks", BookController.getParticularBooks)
router.get("/getXINRBooks", BookController.getXINRBooks)
router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;


// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)