const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const models = require("../models");

const videoDirectory = process.env.AVATAR_DIRECTORY || "public/";
const imgVideoDirectory = process.env.AVATAR_DIRECTORY || "public/";

const renameImg = (req, res, next) => {
  // TODO : gérer les erreurs
  // On récupère le nom du fichier
  const { originalname } = req.files.img[0];

  // On récupère le nom du fichier
  const { filename } = req.files.img[0];

  // On utilise la fonction rename de fs pour renommer le fichier
  const uuid = uuidv4();
  fs.rename(
    `${imgVideoDirectory}${filename}`,
    `${imgVideoDirectory}${uuid}-${originalname}`,
    (err) => {
      if (err) throw err;
      req.img = `${uuid}-${originalname}`;
      next();
    }
  );
};

const uploadFighter = (req, res) => {
  const fighters = req.body;
  console.warn(fighters);
  const { img } = req;

  models.fighter
    .insert(fighters, img)
    .then(([result]) => {
      res.status(201).location(`/api/users/${result.insertId}`).send();
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};
const sendVideo = (req, res) => {
  const { fileName } = req.params;

  res.download(videoDirectory + fileName, fileName, (err) => {
    if (err) {
      console.error("error download: ", err);
    }
  });
};

const sendImgVideo = (req, res) => {
  const { fileName } = req.params;

  res.download(imgVideoDirectory + fileName, fileName, (err) => {
    if (err) {
      console.error("error download: ", err);
    }
  });
};

module.exports = {
  sendVideo,
  uploadFighter,
  renameImg,
  sendImgVideo,
};
