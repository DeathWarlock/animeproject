const express = require('express');
const router = express.Router();

const animesController = require('../controllers/animes');

router.get('/', animesController.getAll);

router.get('/:id', animesController.getSingle);

router.post('/', animesController.createAnime);

router.put('/:id', animesController.updateAnime);

router.delete('/:id', animesController.deleteAnime);

module.exports = router;
