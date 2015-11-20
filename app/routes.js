var Nerd = require('./models/nerd');

module.exports = function(router){
    router.get('/nerds', function(req, res){
        Nerd.find(function(err, nerds){
            if(err) res.send(err);

            res.json(nerds);
        });
    });

    router.get('*', function(req, res){
        res.render('index');
        //res.sendfile('./public/views/index.html');
    });
}
