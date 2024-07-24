const express = require("express");

const router = express.Router();

const hrController = require('../controllers/hrController.js')

router.post("/save", hrController.addhr);

router.post("/login", hrController.hrLogin );

module.exports = router;