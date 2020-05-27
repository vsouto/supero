'use strict';

const mongoose = require('mongoose'),
  Task = mongoose.model('Task');


exports.listAll = function(req, res) {
    Task.find({}, function(err, tasks) {

    })
  .then(function(task) {
      res.json(task);
  })
};

exports.create = function(req, res) {

    Task.create(req.body, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    })
};

exports.read = async function(req, res) {

    Task.findById(req.params.taskId, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.update = function(req, res) {

    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.delete = function(req, res) {

    Task.remove({
        _id: req.params.taskId
    }, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};
