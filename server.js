const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
  // res.sendFile(path.join(__dirname, "/public/html/index.html"));
});

app.listen(PORT, () => {
  console.log(`Now listening on port: http://localhost:${PORT}`);
});
