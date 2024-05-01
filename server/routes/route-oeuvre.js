const express = require('express')
const router = express.Router();


const {getAllOeuvre,AddOeuvre,updateOeuvre,deleteOeuvre,GetOeuvreById}=require('../contolllor/controllor-oeuvreArt');
const { isAuthenticated}=require('../middelware/isAuth');


router.get('/artworks',getAllOeuvre);
router.get('/artworks/:id',GetOeuvreById);
router.post('/artworks',AddOeuvre);
router.put('/artworks/:id',updateOeuvre);
router.delete('/artworks/:id',deleteOeuvre);



module.exports = router
