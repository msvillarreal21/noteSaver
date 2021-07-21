const router = require('express').Router();
const { notes } = require('../db/db.json');
const { createNewNote, validateNote } = require('./../db/store');


router.get('/notes', (req, res) => {
    let results = notes;
    if (results) {
        res.json(results); 
}
});


router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        res.status(400).send("The note is not properly formateed."); 
         } else {
         const note = createNewNote(req.body, notes);
         res.json(note);
    }
});

module.exports = router;