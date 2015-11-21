//var Nerd = require('./models/nerd');
var Todo = require('./models/todo');

module.exports = function(router){
    /*router.get('/nerds', function(req, res){
        Nerd.find(function(err, nerds){
            if(err) res.send(err);

            res.json(nerds);
        });
    });*/

    /*router.get('*', function(req, res){
        //res.render('index');
        res.sendfile('./public/index.html');
    });*/

    router.get('/todos', function(req, res){
        //res.json({"message": 'this is message'});
        Todo.find(function(err, todos){
            if (err){
                res.send(err);
            }
            res.json(todos);
        });        
    });

    router.post('/todos', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text : req.body.text,
            status : false
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });

    router.delete('/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });
}
