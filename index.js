// http://localhost:3000/catto

const express = require('express');

const app = express();

const fs = require('fs');
const path = require('path');

// CATTOS!!!!!!!!!

const cats = path.join(__dirname, 'images');
const catImages = fs.readdirSync(cats).filter(file => file.endsWith('.png'));

function getCatto() {
    const randomCatImage = catImages[Math.floor(Math.random() * catImages.length)];
    const imagePath = path.join(cats, randomCatImage);
    return imagePath;
}

app.get('/catto', (req, res) => {
    imagePath = getCatto();
    res.sendFile(imagePath);
})

app.listen(3000, () => {
    console.log('catto api is running!')
})