const express = require('express')
const userController = require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const favouritesController=require('../Controllers/favoritesController')

const router = new express.Router()

//registeruser
router.post('/register',userController.registerController)

//login User
router.post('/login',userController.loginController)

// add favourites

router.post('/favorites',jwtMiddleware,favouritesController.addTofavouritesController)

// get favourites
router.get('/all-favourites',jwtMiddleware,favouritesController.getFavoritesController)

//remove favourites
router.delete('/remove/:id',jwtMiddleware,favouritesController.removeFavouriteController)


module.exports=router