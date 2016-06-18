var methodOverride = require('method-override'),
    bodyParser     = require('body-parser'),
    express        = require('express'),
    index          = require('./views/index'),
    app            = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.JSON());
app.use(bodyParser.urlencoded({ encoded: false }));

app.use('/', index);

app.listen(app.get('port'), () => console.log('Server is Listening'));
