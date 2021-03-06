/**
 * Created by Vadym Yatsyuk on 19/02/16
 */

"use strict";

import roomsCtrl from './controllers/rooms'
import answersCtrl from './controllers/answers'
import questionsCtrl from './controllers/questions'

module.exports = function (app) {

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
  });

  app.use('/rooms', roomsCtrl)
  app.use('/answers', answersCtrl)
  app.use('/questions', questionsCtrl)

  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get((req, res) => {
      res.json('Forbidden', 403);
    });

  app.route('/*')
    .get((req, res) => {
      res.json('Forbidden', 403);
    });
}