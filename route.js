var express = require('express');
const helper = require('./connection.js');

var router = express.Router();

router.get('/post', (req, res) => {
    return res.send('data received');
});

router.get('/', (req, res) => {
    console.log(req.query);
    var page = Number(req.query.page);
    var count = Number(req.query.count);
    var data = helper.select('CmsCategories', page, count).then((data) => {

        var html = '<table border="1" cell-padding="2" cell-spacing="2"><tdbody>';

        for (var i = 0; i < data.length; i++) {
            html += '<tr><td>' + i + '</td><td>' + data[i].Name + '</td><td>' + data[i]._id + '</td></tr>';
        }

        html += '</tbody></table>';

        res.send(html);
    });

});

module.exports = router;