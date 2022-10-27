var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://0.0.0.0/node-mongodb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("node-mongodb");

    var myobj = [
        { name: 'Nayna Patel', email: 'Nayna123@gmail.com', password: 'pwd123' },
        { name: 'neha Patel', email: 'neha234@gmail.com', password: 'pwd234' },
        { name: 'Naina Bhuva', email: 'naina345@gmail.com', password: 'pwd123' },
        { name: 'Nirav vilaa', email: 'nirav456@gmail.com', password: 'pwd456' },
        { name: 'zeel shekh', email: 'zeel567@gmail.com', password: 'pwd567' },
    ];
    var data = dbo.collection("user").find({}).toArray();
    if (!data) {
        dbo.collection("user").insertMany(myobj, function (err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
        });
    }
});
