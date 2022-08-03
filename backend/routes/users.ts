import express from "express";
const router = express.Router();
const User = require("../models/User");

router.get("/", async (_req, res) => {
	const user = await User.query();
	res.json(user);
});

module.exports = router;
