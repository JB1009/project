const movieCtrl =  require("../controllers/movieCtrl")
const router = require("express").Router();

router.route('/')
  .get(movieCtrl.getMovies)
  // .post(movieCtrl.insertMoives)
module.exports = router;