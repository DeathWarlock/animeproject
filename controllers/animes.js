const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db('anime').collection('anime').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('anime').collection('anime').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createAnime = async (req, res) => {
  const anime = {
    title: req.body.title,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
    seasons: req.body.seasons,
    numberofEpisodes: req.body.numberofEpisodes
  };
  const response = await mongodb.getDb().db('anime').collection('anime').insertOne(anime);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the anime.');
  }
};

const updateAnime = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const anime = {
    title: req.body.title,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
    seasons: req.body.seasons,
    numberofEpisodes: req.body.numberofEpisodes
  };
  const response = await mongodb
    .getDb()
    .db('anime')
    .collection('anime')
    .replaceOne({ _id: userId }, anime);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the anime.');
  }
};

async function deleteAnime(req, res) {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('anime').collection('anime').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the anime.');
  }
}

module.exports = {
  getAll,
  getSingle,
  createAnime,
  updateAnime,
  deleteAnime
};