const express = require("express");

const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: process.env.AVATAR_DIRECTORY });

// services d'auth
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const fighterControllers = require("./controllers/fighterControllers");
const fightControllers = require("./controllers/fightControllers");
const fileControllers = require("./controllers/fileControllers");

// Auth
router.post("/api/register", hashPassword, userControllers.add);
router.post(
  "/api/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Users
// Gestion des users
router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.post("/api/users", hashPassword, verifyToken, userControllers.add);
router.put(
  "/api/users/:id",
  verifyToken,
  upload.fields([{ name: "img" }]),
  fileControllers.renameImg,
  userControllers.edit
);
router.delete("/api/users/:id", verifyToken, userControllers.destroy);

// gestion des fighters

router.get("/api/fighters", fighterControllers.browse);
router.get("/api/fighters/:id", fighterControllers.read);
// router.post("/api/fighters/", verifyToken, fighterControllers.add);
router.put("/api/fighters/:id", verifyToken, fighterControllers.edit);
router.delete("/api/fighters/:id", verifyToken, fighterControllers.destroy);
router.post(
  "/api/fighters",
  verifyToken,
  upload.fields([{ name: "img" }]),
  fileControllers.renameImg,
  fileControllers.uploadFighter
);

// gestion des fight

router.get("/api/fights", fightControllers.browse);
router.get("/api/fights/:id", fightControllers.read);
router.post("/api/fights/", verifyToken, fightControllers.add);

module.exports = router;
