const router = require("express").Router();
const { department } = require("../controllers");

// router.post("/admin/add-admin");
router.get("/department/list-department", department.getAllDepartment);

module.exports = router;
