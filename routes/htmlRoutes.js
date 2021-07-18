const path = require('path');
const router = require('express').Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/html/index.html'));
})

router.get('/notes', (req, res ) => {
    res.sendFile(path.join(__dirname, '../public/assets/html/notes.html'));
})


module.exports = router;