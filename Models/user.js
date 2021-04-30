const models = require('../connection.js');

models.db.collection("user", (data) => {
    console.log(data);
})