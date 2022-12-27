const express = require("express");
const routes = express.Router();
const HotelController = require("../controller/hotel_controller");
const FoodStoreController = require("../controller/FoodStoreController");
const PostController = require("../controller/post_controller");
const EventController = require("../controller/event_controller");
const TouristAttraction = require("../controller/tourist_attraction_controller");
const UserController = require("../controller/user_controller");
const user_controller = require("../controller/user_controller");
const FavouriteController = require("../controller/favourite_controller");

//foodstore
routes.post("/foodstore/create", FoodStoreController.Add); //tạo mới cửa hàng ăn uống
routes.get("/foodstore", FoodStoreController.All);
routes.post("/foodstore/delete/:id", FoodStoreController.Delete);
routes.put("/foodstore/update", FoodStoreController.Update);
routes.get("/foodstore/gettop", FoodStoreController.getTop);
routes.get("/foodstore/search/:category", FoodStoreController.search);

//post
routes.post("/post/create", PostController.Add);
routes.get("/posts", PostController.All);
routes.post("/post/delete/:id", FoodStoreController.Delete);
routes.put("/post/update", PostController.Update);

//hotel
routes.get("/hotel", HotelController.getAllHotels); // Get All Hotel
routes.get("/hotel/:id", HotelController.getHotel); // Get detail one Hotel
routes.post("/hotel/create", HotelController.insertHotel); // Add Hotel
routes.post("/hotel/delete/:id", HotelController.deleteHotel);
routes.get(
  "/hotel/filterhotel/:accommodationType/:limit",
  HotelController.filterHotel
); //filter Hotel by accommodationType

// Events
routes.post("/event/create", EventController.addEvent); // Add event
routes.get("/event", EventController.getAllEvent); // Get all Events
routes.get("/event/geteventthismonth", EventController.getEventThisMonth); // Get all event this month
routes.get("/event/geteventnextmonth", EventController.getEventNextMonth); // Get all event next month

// Tourist_Attraction
routes.get("/tourist", TouristAttraction.getAll); // Get all TouristAttraction
routes.post("/tourist/create", TouristAttraction.insert); // Add TouristAttraction
routes.get("/tourist/:id", TouristAttraction.filterTourist); // Get detail one Hotel
// routes.post("/tourist/search",)

//User
routes.post("/user/create", user_controller.addUser); // Add user
routes.post("/user/login", user_controller.login); // login
routes.post("/user/checkemail", user_controller.checkIsmail); // CheckMail is valid
routes.put("/user/update", user_controller.updateUser); //update User
routes.get("/user/:id", user_controller.getUser); //update User
routes.get("/user", user_controller.getAllUsers); //get All User

//Favourite
routes.post("/favourite/create", FavouriteController.addFavourite); // Add Favourite
routes.get("/favourite", FavouriteController.getAllFavourites); // Get all Favourite
routes.delete(
  "/favourite/delete/:category/:id",
  FavouriteController.deleteFavourite
); // Delete Favourite

module.exports = routes;
