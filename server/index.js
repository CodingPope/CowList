const express = require("express");
const path = require("path");
const db = require("../database");
const PORT = 3000;
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.post("/api/cows", (req, res) => {
  var params = [req.body.name, req.body.description];
  db.query(
    "INSERT INTO cowList (name, description) VALUES (?, ?)",
    params,
    (err, results) => {
      if (err) {
        console.log("Information not Sent");
        res.sendStatus(500);
        console.log(results);
      } else {
        res.send(results);
      }
    }
  );
});

app.get("/api/cows", (req, res) => {
  db.query("SELECT * FROM cowList", (err, results) => {
    if (err) {
      console.log("No Cows");
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
});

app.put("/api/cows/:id", (req, res) => {
  const { name, description, id } = req.body;

  db.query(
    "UPDATE cowList SET name = ?, descripton = ? WHERE id = ?",
    [name, description, id],
    (err, results) => {
      if (err) {
        console.log("Cant Change Cows");
        res.sendStatus(500);
      } else {
        res.send(results);
      }
    }
  );
});

app.delete("/api/cows/:id", (req, res) => {
  var params = [req.params.id];
  db.query("DELETE FROM cowList WHERE id = ?", params, (err, results) => {
    if (err) {
      console.log("Cant get rid of cows");
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`The cows are listening at localhost:${3000}!`);
});
