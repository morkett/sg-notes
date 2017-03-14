var express = require('express');
var app = express();
var port = 3000;
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

function findUserById(userId) {
  return users.find(function (user) {
    return user.id === userId;
  });
}


// Action: index
app.get('/users', function(req, res) {
  var html = '<h1>List of users</h1>';

  html += '<ul>';
  for (var i = 0; i < users.length; i++) {
    html += '<li><a href="/users/' + users[i].id + '">' + users[i].firstName + ' ' + users[i].lastName + ' (' + users[i].email + ')' + '</a></li>';
  }
  html += '</ul>';
  res.status(200).send(html);
});
// Action: new
app.get('/users/new', function(req, res) {
  res.status(200).send('<h1>Action: new</h1>');
});
// Action: create
app.post('/users', function(req, res) {
  res.status(200).send('<h1>Action: create</h1>');
});
// Action: edit
app.get('/users/:id/edit', function(req, res) {
  res.status(200).send('<h1>Action: edit</h1>');
});
// Action: update
app.put('/users/:id', function(req, res) {
  res.status(200).send('<h1>Action: update</h1>');
});
// Action: show
app.get('/users/:id', function(req, res) {
  var userId = req.params.id;
  var user;
  var html = '<h1>Show user ' + userId + '</h1>';

  user = findUserById(userId);

  if (user) {
    html += '<p>First name: ' + user.firstName + '</p>';
    html += '<p>Last name: ' + user.lastName + '</p>';
    html += '<p>Email: ' + user.email + '</p>';
  } else {
    html += '<em>User not found with id ' + userId + '</em>';
  }

  res.status(200).send(html);
});
// Action: destroy
app.delete('/users/:id', function(req, res) {
  var userId = req.params.id;

  var user;
  user = findUserById(userId);

  var findArrayPos = users.indexOf(user);
  
  var doesNotExist = '<em>User with id ' + userId + ' does not exist' + '</em>';
  var deletedUser = req.params.id + ' has been deleted';



  if(user) {
    users.splice(findArrayPos, 1);
    res.status(200).send(deletedUser);
  }    else {
    res.status(404).send(doesNotExist);
  }

});

app.listen(port, function() {
  console.log('App is running on port', port);
});
