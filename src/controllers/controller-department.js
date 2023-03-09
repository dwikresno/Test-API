const config = require("../configs/database");
const mysql = require("mysql");
const pool = mysql.createPool(config);

pool.on("error", (error) => {
  console.error(error);
});

module.exports = {
  getAllDepartment(req, res) {
    pool.getConnection(function (error, connection) {
      if (error) {
        res.status(500).send({
          result: 0,
          message: error,
        });
      } else {
        connection.query(
          `SELECT * FROM departments`,
          function (error, results) {
            if (error) {
              res.status(500).send({
                result: 0,
                message: error,
              });
            } else {
              if (results.length > 0) {
                res.send({
                  result: 1,
                  message: "Success get data",
                  data: results,
                });
              } else {
                res.status(404).send({
                  result: 0,
                  message: "Data Not Found",
                  data: results,
                });
              }
            }
          }
        );
        connection.release();
      }
    });
  },
};
