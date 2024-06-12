const {Router} = require("express");
const router = Router();
const { userSignup, userSignin } = require("../controllers/user");

router.get("/signup", userSignup);
router.get("/signin", userSignin);

module.exports = router;