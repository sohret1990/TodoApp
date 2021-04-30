var express = require('express');
const helper = require('./connection.js');

var router = express.Router();

router.get('/post', (req, res) => {
    return res.send('data received');
});

router.get('/categories', (req, res) => {

    res.render('Home/Index.ejs' );

    // console.log(req.query);
    // var page = Number(req.query?.page);
    // var count = Number(req.query?.count);
    // var data = helper.select('CmsCategories', page, count).then((data) => {

    //     var html = '<table border="1" cell-padding="2" cell-spacing="2"><tdbody>';

    //     for (var i = 0; i < data.length; i++) {
    //         html += '<tr><td>' + i + '</td><td>' + data[i].Name + '</td><td>' + data[i]._id + '</td></tr>';
    //     }

    //     html += '</tbody></table>';

    //     res.send('Views/Home/index' )
    // });

});

router.post('/categories/insert', (req, res, next)=>{
    if (req.method == 'POST') {
        var body = '';
        req.on('data', function (data) {
            body += data;
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6) { 
                // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
                req.connection.destroy();
            }
        });
        req.on('end', function () {

            var POST = qs.parse(body);
            // use POST

        });
    }
    next();
    res.redirect('/categories')
})

module.exports = router;