const path = require("path")
const express = require("express")
const hotwire = require('express-hotwire').default
const formidable = require('express-formidable');
const methodOverride = require('method-override');

const cardsRouter = require('./routes/cards');
const cardSetsRouter = require('./routes/cardSets');


const app = express()
const publicPath = path.join(__dirname, "public")
const port = process.env.PORT || 9988


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(hotwire())
app.use(formidable()); // Collect data from form submissions
app.use(methodOverride('_method')); // Allow DELETE requests

app.use(express.static(publicPath))

// We create a wrapper to workaround async errors not being transmitted correctly.
function makeHandlerAwareOfAsyncErrors(handler) {
    return async function(req, res, next) {
        try {
            await handler(req, res);
        } catch (error) {
            next(error);
        }
    };
}



app.get('/', (req, res) => {
    res.redirect('/cards')
});


app.use('/cards', cardsRouter);
// app.use('/sets', cardSetsRouter);


// // We define the standard REST APIs for each route (if they exist).
// for (const [routeName, routeController] of Object.entries(routes)) {
//     if (routeController.getAll) {
//         app.get(
//             `/api/${routeName}`,
//             makeHandlerAwareOfAsyncErrors(routeController.getAll)
//         );
//     }
//     if (routeController.getById) {
//         app.get(
//             `/api/${routeName}/:id`,
//             makeHandlerAwareOfAsyncErrors(routeController.getById)
//         );
//     }
//     if (routeController.create) {
//         app.post(
//             `/api/${routeName}`,
//             makeHandlerAwareOfAsyncErrors(routeController.create)
//         );
//     }
//     if (routeController.update) {
//         app.put(
//             `/api/${routeName}/:id`,
//             makeHandlerAwareOfAsyncErrors(routeController.update)
//         );
//     }
//     if (routeController.remove) {
//         app.delete(
//             `/api/${routeName}/:id`,
//             makeHandlerAwareOfAsyncErrors(routeController.remove)
//         );
//     }
// }


module.exports = app;