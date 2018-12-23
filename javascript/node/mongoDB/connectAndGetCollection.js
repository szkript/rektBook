var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.getFoods = (req, reply) => {
    try {
        MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("amiburger");
        dbo.collection("foods").find().toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
        return "aasdasda"
    } catch (err) {
        console.log(err);
    }
};
