const path = require('path');
const fs = require('fs');

function createNewNote (body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray}, null , 2)
    );

    return note;
}

function validateNote (note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    } 
    return true;
}

function deleteNote (noteId, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        if (notesArray[i].id === noteId) {
         notesArray.splice(i, 1);
         break
    }
}
    console.log(notesArray);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray}, null , 2)
    );
    
    return noteId;
}


module.exports = {
createNewNote,
validateNote,
deleteNote,
};