const fs = require("fs");
const path = require("path");
const { uuid } = require("uuidv4");
var dbConnect = require("../db/db.json");

module.exports = function (app){
    app.get("/api/notes", (req,res) => {
        console.log("in here");
        res.json(dbConnect);
    });

    app.post("/api/notes", (req,res) => {
        console.log("in post");
        let newNote = req.body;
        newNote.id = Math.round(Math.random()*10);
        dbConnect.push(newNote);
        fs.writeFile("../db/db.json", JSON.stringify(dbConnect),
        function(err){
            console.log(err);
        })
        res.json(dbConnect);
    })

    app.delete("/api/notes/:id", (req,res) => {
        console.log("in delete");
        let noteNum = req.params.id;
        dbConnect = dbConnect.filter( note => note.id != noteNum);
        fs.writeFile("../db/db.json", JSON.stringify(dbConnect),
        function(err) {
            console.log("Delete Success");
        });
        res.json(dbConnect);
    });
};

