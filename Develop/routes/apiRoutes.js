const fs = require("fs");
const path = require("path");
const { uuid } = require("uuidv4");
var dbConnect = require("../db/db.json");

module.exports = function (app){
    app.get("/api/notes", (req,res) => {
        
        
        res.json(dbConnect)
    });

    app.post("/api/notes", (req,res) => {
        
        
        res.json(dbConnect)
    })

    app.delete("/api/notes/:id", (req,res) => {

        
    })


};
