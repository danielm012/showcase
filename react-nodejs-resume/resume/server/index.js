const express = require("express");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors())
app.use(express.static(path.normalize(__dirname + "/../client/build/"))); 
app.use(express.static(path.normalize(__dirname + "/../client/images/")));
app.use(express.static(path.normalize(__dirname + "/../client/files/")));

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})

app.get("/", (req, res) => {
    res.sendFile(path.normalize(__dirname + "/../client/build/index.html"));
});

app.get("/Resume", (req, res) => {
    res.sendFile(path.normalize(__dirname + "/../client/build/index.html"));
});

app.get("/AboutMe", (req, res) => {
    res.sendFile(path.normalize(__dirname + "/../client/build/index.html"));
});

app.get("/images/:name", (req, res) => {
    pathData = path.normalize(__dirname + "/../client/images/");
    res.sendFile(pathData + req.params.name);
    console.log(req.params.name);
});

app.get("/Resume/resume.pdf", (req, res) => {
    console.log("PDF File");
    pathData = path.normalize(__dirname + "/../client/files/");
    res.sendFile(pathData + "ResumeModern.pdf");
});
