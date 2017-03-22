/* global describe, it, beforeEach */

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
// var expect = chai.expect;
var request;
var TestUtils = require('./test-utils');

chai.should();
chai.use(chaiHttp);

describe('Books', function () {
  beforeEach(function () {
    request = chai.request(app);
  });

//  UPDATE
  describe('PUT', function () {
    it('should return error for non-existent book id', function (done) {
      request
       .put('/books/non-existent-book-id')
       .end(function (err, res) {
         res.should.have.status(404);
         done();
       });
    });
    it('should return correct result for existing book', function (done) {
      request
     .get('/users')
     .end(function (err, res) {
       var userId = TestUtils.getFirstUserIdFromUserListHTML(res.text);

       request
         .get('/users/' + userId)
         .end(function (err, res) {
           var bookId = TestUtils.getFirstBookIdFromUserPageHTML(res.text);

           request
           .put('/books/' + bookId)
           .set('Content-Type', 'application/x-www-form-urlencoded')
           .send({ userId: userId, title: 'testTitle', author: 'testAuthor' })
           .end(function (err, res) {
             res.should.have.status(200);
             res.text.should.match(/testTitle/);
             res.text.should.match(/testAuthor/);
             done();
           });
         });
     });
    });
  });

  describe('DELETE', function () {
    it('should return error for non-existent book id', function (done) {
      request
        .delete('/books/non-existent-book-id')
        .end(function (err, res) {
          res.should.have.status(404);
          done();
        });
    });
    it('should return correct result for existing book', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          var userId = TestUtils.getFirstUserIdFromUserListHTML(res.text);

          request
            .get('/users/' + userId)
            .end(function (err, res) {
              var bookId =  TestUtils.getFirstBookIdFromUserPageHTML(res.text);

              res.should.have.status(200);
              request
                .delete('/books/' + bookId)
                // sending hidden input field
                .send({userId: userId})
                .end(function (err, res) {
                  var bookIdRegExp = new RegExp(bookId);
                  res.should.have.status(200);
                  res.text.should.not.match(bookIdRegExp);
                  done();
                });

            });
        });
    });
  });
});
