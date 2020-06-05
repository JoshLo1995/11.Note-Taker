const router = require('express').Router();
const fs = require('fs');


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "..public/notes.html"));
});

router.get("/api/notes", (req, res) => {
    let file = fs.readFileSync("db/db.json");
    let fileArray = JSON.parse(file);

    res.json(fileArray);
});

router.post("/api/notes", (req, res) => {
    // Read the file
    console.log("Hello I'm in the /api/notes post route")
    let file = fs.readFileSync("db/db.json"); // If this doesn't work, try taking out all the../
    console.log(file)
    // parse into an array
    let fileArray = JSON.parse(file); // This is now an array
    console.log(fileArray);
    // push to the 'db' array
    // let newNote = {}
    // Push newNote instead of req.body
    fileArray.push(req.body);
    console.log(fileArray);
    // Stringify
    let fileString = JSON.stringify(fileArray);
    console.log(fileString);
    // Write it 
    fs.writeFileSync("db/db.json", fileString);
    console.log("done");
    res.json(fileString);
});

router.delete("/api/notes/:id", (req, res) => {
    // Read database file
    let file = fs.readFileSync('db/db.json');
    // Parse into an array
    let fileArray = JSON.parse(file);
    // Loop through the array and delete the ID that matches the req.params.id
    for (let i = 0; i < fileArray.length; i++) {
        console.log(req.params.id);
    }
    // res.json at end of this
})

module.exports = router;