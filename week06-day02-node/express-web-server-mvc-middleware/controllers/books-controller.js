var Book = require('../models/book-model');

require('../models/user-model');

// Action: new
function newBook(req, res) {
  res.render('users/newBook', {
    title: 'New Book'
  });
}

// Action: create
function createBook(req, res) {
  var newBook = new Book();

  newBook.title = req.body.title;
  newBook.author = req.body.author;

  newBook.save(function (err) {
    var errorJson = [];

    if (err) {
      for (var path in err.errors) {
        errorJson.push({
          path: path,
          message: err.errors[path].message
        });
        console.log('Could not create new book: error:', err.errors[path].message);
      }
      res.status(400).json(errorJson);
      return;
    }
    res.redirect('/users');
  });
}

// Action: edit
function editBook(req, res) {
  var bookId = req.params.id;

  Book.findOne({ _id: bookId }, function (err, user) {
    if (err) {
      console.log('Could not get book:', err);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not get book');
      return;
    }
    res.render('users/editBook', {
      title: 'Edit Book',
      user: user
    });
  });
}

// Action: update
function updateBook(req, res) {
  var userId = req.params.id;
  var updatedUser = {
    title: req.body.title,
    author: req.body.author

  };

  Book.findOneAndUpdate({ _id: userId }, updatedUser, function (err) {
    if (err) {
      console.log('Could not get existing user to update:', err.message);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not get existing user to update');
      return;
    }
    res.redirect('/users');
  });
}


// Action: destroy
function destroyBook(req, res) {
  var userId = req.params.id;

  Book.deleteOne({ _id: userId }, function (err) {
    if (err) {
      console.log('Could not get book to delete:', err.message);
      // ditto comment above re. keeping complexity to a minimum:
      res.status(404).send('Could not get book to delete');
      return;
    }
    res.redirect('/users');
  });
}

module.exports = {
  new: newBook,
  create: createBook,
  edit: editBook,
  update: updateBook,
  destroy: destroyBook
};


//
