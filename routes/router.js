const express = require("express");
const router = express.Router(); //Initializes a Router...

//Importing Service Layer in Router Layer...
const projectController = require("../controller/controller");

//Uploading our Project list contents on request...
router.get("/msg", (req, res) => {
  //res.send(projectList);
  msgController.getAllmsgs(res);
  res.sendStatus(200);
  res.json({ result: projectList });
});

//Exporting all the contents for our script...
module.exports = router;
