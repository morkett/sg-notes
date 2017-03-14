var users = [
  {
    id: '994',
    firstName: 'Jimmy',
    lastName: 'Fallon',
    email: 'jim@example.com'
  },
  {
    id: 'e01',
    firstName: 'Bob',
    lastName: 'Geldof',
    email: 'bob@example.com'
  }
];

var currentUserId = 100;

function findUserIndexById(userId) {
  return users.findIndex(function (user) {
    return user.id === userId;
  });
}



function getNextUserId() {
  currentUserId++;

  return currentUserId.toString();
}

// Action Index
function indexUser(req, res) {
  var html = '<h1>List of users</h1>';

  html += '<ul>';
  for (var i = 0; i < users.length; i++) {
    html += '<li><a href="/users/' + users[i].id + '">' + users[i].firstName + ' ' + users[i].lastName + ' (' + users[i].email + ')' + '</a></li>';
  }
  html += '</ul>';
  res.status(200).send(html);
}

//Action New
function newUser(req, res) {
  res.status(200).send('<h1>Action: new</h1>');
}

//Action: Create
function userCreate(req, res) {
  var newUser = {
    id: getNextUserId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  };

  users.push(newUser);
  res.status(200).send('<h1>Action: create new user with id' + getNextUserId()+'</h1>' );
}

//Action: Edit
function userEdit(req, res) {
  res.status(200).send('<h1>Action: edit</h1>');
}

//Action: update
function userUpdate(req, res) {
  var userId = req.params.id;
  var userIndex = findUserIndexById(userId);
  var status;
  var html = '<h1>Updating user with id'+ userId +'</h1>';

  if(userIndex !== -1) {
    user = users[userIndex];
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    status = 200;
    html+= '<p>User Updated</p>';
  } else {
    html += '<em>Could not find user with id'+ userId + '</em>';
    status = 404;
  }
  res.status(status).send(html);
}

//Action: show

function userShow(req, res) {
  var userId = req.params.id;
  var userIndex;
  var user;
  var status;
  var html = '<h1>Show user ' + userId + '</h1>';

  userIndex = findUserIndexById(userId);

  if (userIndex !== -1) {
    user = users[userIndex];
    status = 200;
    html += '<p>First name: ' + user.firstName + '</p>';
    html += '<p>Last name: ' + user.lastName + '</p>';
    html += '<p>Email: ' + user.email + '</p>';
  } else {
    status = 404;
    html += '<em>User not found with id ' + userId + '</em>';
  }

  res.status(status).send(html);
}


//Action: delete

function userDelete(req, res) {
  var userId = req.params.id;
  var userIndex;
  var status;
  var html = '<h1>Delete user ' + userId + '</h1>';

  userIndex = findUserIndexById(userId);

  if (userIndex !== -1) {
    // user exists
    users.splice(userIndex, 1);
    status = 200;
    html += 'User with id ' + userId + ' deleted';
  } else {
    // trying to delete non-existent user
    status = 404;
    html += '<em>User with id ' + userId + ' does not exist; cannot delete</em>';
  }
  res.status(status).send(html);
}

module.exports = {
  index: indexUser,
  new: newUser,
  create: userCreate,
  edit: userEdit,
  update: userUpdate,
  show: userShow,
  destroy: userDelete
};
