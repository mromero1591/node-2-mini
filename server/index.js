var express = require("express");
var bookController = require("../controllers/book_controllers");

app = express();

app.use(express.json());
app.use(express.static(__dirname + "./../build"));
//end points
app.get("/api/books", bookController.list);
app.post("/api/books", bookController.create);
app.put("/api/books/:id", bookController.update);
app.delete("/api/books/:id", bookController.delete);

app.listen(3000, () => {
  console.log("listening on 3000");
});
