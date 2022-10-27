var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://0.0.0.0/node-mongodb";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("node-mongodb");

  var myobj = [
    { contactName: 'Forefront', email: 'www.Forefront.com', contactNumber: '+1 789-256-123' },
    { contactName: 'Sunshine', email: 'sunshine.com', contactNumber: '+1 558-789-1111' },
    { contactName: 'creative', email: 'creative.com', contactNumber: '+1 125-852-0002' },
    { contactName: 'amazonstar', email: 'www.amazonstar.com', contactNumber: '+1 220-123-8978' },
    { contactName: 'Flipcart', email: 'www.flipcart.ca', contactNumber: '+1 647-225-3697' },
  ];
  var data = dbo.collection("contact").find({}).toArray();
  if (!data) {
    dbo.collection("contact").insertMany(myobj, function (err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
    });
  }
});
