const express = require("express");

const router = express.Router();

// services d'auth
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const fighterControllers = require("./controllers/fighterControllers");

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
router.put("/api/users/:id", hashPassword, verifyToken, userControllers.edit);
router.delete("/api/users/:id", verifyToken, userControllers.destroy);

// gestion des fighters

router.get("/api/fighters", fighterControllers.browse);
router.get("/api/fighters/:id", fighterControllers.read);
router.post("/api/fighters/", verifyToken, fighterControllers.add);
router.put("/api/fighters/:id", verifyToken, fighterControllers.edit);
router.delete("/api/fighters/:id", verifyToken, fighterControllers.destroy);

module.exports = router;
