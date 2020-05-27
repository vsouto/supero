'use strict';
module.exports = function(app) {
  const task = require('../controllers/taskController');

  app.route('/task')
    .get(task.listAll)
    .post(task.create);

  app.route('/task/:taskId')
    .get(task.read)
    .put(task.update)
    .delete(task.delete);

};
