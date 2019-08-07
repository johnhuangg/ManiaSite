const router = require("express").Router();
let User = require("../models/user-model");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const score = Number(req.body.score);
  const newUser = new User({ username, score });

  newUser
    .save() //save user
    .then(() => res.json("User added!")) //return user added in json
    .catch(err => res.status(400).json("Error: " + err)); //return error
});

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});
router.route("update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;
      user.score = Number(req.body.score);
      user
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});
module.exports = router;
