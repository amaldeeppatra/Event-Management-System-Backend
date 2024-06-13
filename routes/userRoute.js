const {Router} = require("express");
const router = Router();
const { userSignup, userSignin } = require("../controllers/user");

router.post("/signup", userSignup);
router.post("/signin", userSignin);

module.exports = router;