var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users-controller');
var booksController = require('../controllers/books-controller');

///////////////////
// home page
///////////////////

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Home'
  });
});

//////////////////////////////////////////////////////
////                 USERS
/////////////////////////////////////////////////////

router.route('/')
  .get(usersController.index)
  .post(usersController.create);

router.get('/users/new', usersController.new);
router.get('/users/:id/edit', usersController.edit);

router.route('/users/:id')
  .put(usersController.update)
  .get(usersController.show)
  .delete(usersController.destroy);

//////////////////////////////////////////////////////
////                 BOOKS
/////////////////////////////////////////////////////

router.route('/books')
        .post(booksController.create);

router.route('/books/:id')
    .put(booksController.update)
    .delete(booksController.destroy);



router.get('/books/new', booksController.new);
router.get('/books/:id/edit', booksController.edit);

module.exports = router;
