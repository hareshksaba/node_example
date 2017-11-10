exports.create = function(req, res){
    nano.db.create(req.body.dbname, function(){
        if(err){
            res.send("Error creating a database from createdb.js");
            return;
        }
        res.send("Database created successfully from createdb.js");
    });
};