var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { modules } = require('./helpers')

const {
       express,
       cors,
       timeout,
       path
      } = modules


const app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', require('./Api/controllers'))

module.exports = app;
