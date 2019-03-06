const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

// production
var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "bfc26ab395c356",
  password: "cae20b58",
  database: "heroku_1dbeb68ab9dfec3"
});

//dev
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "comp4711_lab6"
// });

let app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));

app.set("port", process.env.PORT || 5000);

app.get("/admin/read", (req, res) => {
  let query_create_DB = "CREATE DATABASE IF NOT EXISTS comp4711_lab6";
  connection.query(query_create_DB, (err, res) => {
    if (err) console.log(err);
  });

  //read questions & answers
  let query_read_questions = `SELECT *
                              FROM questions`;
  connection.query(query_read_questions, (error, results) => {
    if (error) res.send(error);
    else
      return res.json({
        data: results
      });
  });
});

app.get("/admin/truncate", (req, res) => {
  let query_truncate = `TRUNCATE TABLE questions`;
  connection.query(query_truncate, (error, results) => {
    if (error) throw error;
    else console.log(results);
  });
});

app.get("/admin/insert", (req, res) => {
  //insert a new question & answer
  const { question, answers, answer_key } = req.query;
  
  let query_insert_question = `REPLACE INTO questions
                                  SET question = '${question}',
                                      answers = '${answers}',
                                      answer_key = '${answer_key}'`;
  connection.query(query_insert_question, (error, results) => {
    if (error) throw error;
    else console.log(results);
  });
});

app.get("/admin/update", (req, res) => {
  //update a question & answer
  const { question, answers, answer_key } = req.query;
  let query_update_question = `UPDATE questions
                                SET question = '${question}',
                                    answers   = '${answers}',
                                    answer_key   = '${answer_key}'
                                WHERE question = '${question}'`;
  connection.query(query_update_question, (error, results) => {
    if (error) throw error;
    else console.log(results);
  });
});

app.get("/admin/delete", (req, res) => {
  //delete a question & answer
  const { question } = req.query;
  let query_delete_question = `DELETE FROM questions
                                WHERE question = '${question}'`;
  connection.query(query_delete_question, (error, results) => {
    if (error) throw error;
    else console.log(results);
  });
});

app.listen(app.get("port"), function() {
  console.log(`listening in port: ${app.get("port")}`);
});
