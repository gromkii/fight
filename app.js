var methodOverride = require('method-override'),
    bodyParser     = require('body-parser'),
    express        = require('express'),
    index          = require('./routes/index'),
    app            = express();


app.use(express.static(__dirname + '/public'));
app.use('/styles', express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);

app.listen(app.get('port'), () => console.log('Server is Listening'));
