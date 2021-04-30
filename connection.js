var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";



module.exports = {
    select: (name, page, count) => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    //useCreateIndex: true,
                    //useFindAndModify: false
                },
                function(err, db) {
                    if (err) throw err;
                    var dbo = db.db("CMS_DB");

                    dbo.collection(name).find().skip(page * count).limit(count).toArray((err, items) => {
                        if (err)
                            reject(err);
                        resolve(items);
                    })

                    // dbo.collection(name).findOne({ 'InsertUserId': 0 }, (err, item) => {
                    //     if (err)
                    //         reject(err);
                    //     //console.log(item);
                    //     resolve(item);
                    // });
                });
        });
    },

    insert: (name, document) => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    //useCreateIndex: true,
                    //useFindAndModify: false
                },
                function(err, db) {
                    if (err) throw err;
                    var dbo = db.db("CMS_DB");

                    dbo.collection(name).insertOne(document).then((err, items)=>{
                        if(err)
                        reject(err);
                        resolve(items);
                    })
                });
        });
    }
}