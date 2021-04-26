const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');
const { Router } = require('express');
const { Card } = models;

const router = Router();

// // Verify the :cardId parameter is for a valid Card.
// router.param('cardId', async (_req, _res, next, cardId) => {
//     const card = await Card.findById(cardId);

//     if (card) {
//         next();
//     } else {
//         next(new Error('card not found.'));
//     }
// });

// // CREATE
// //
// // POST /cards
// // 
// // Creates a new card and then appends the new card content to the #cards div
// router.post('/', async (req, res) => {
//     const { content } = req.fields || {};

//     const card = await Card.create(content || '');

//     res.turboStream.append('cards', {
//         partial: 'cards/show', // Use the cards/show.ejs template to append the #cards div
//         locals: {
//             card,
//         }
//     })
// });

// READ
// GET /cards
router.get('/', async (req, res) => {
    const cards = await Card.findAll(); 

    res.render('index', {
        cards
    })
});

// READ (edit view)
//
// GET /cards/:cardId/edit
//
// Renders edit view for a particular card using turbo streams
router.get('/:cardId/edit', async (req, res) => {
    const card = await Card.findOne({ where: { id: req.params.cardId }}); 

    res.render('cards/edit', {
        card,
    })
});


// UPDATE
//
// POST /cards/:cardId
//
// Updates existing card content
router.post('/:cardId', async (req, res) => {
    const { content } = req.fields || {};
    const card = await Card.updateById(req.params.cardId, content);

    res.render('cards/show', {
        card,
    });
});


// DELETE
//
// DELETE /cards/:cardId
//
// Deletes a card and removes the element with the id of "card_{id}".
router.delete('/:cardId', async (req, res) => {
    const { cardId } = req.params;

    // await Card.removeById(cardId);

    res.turboStream.remove(`card_${cardId}`);
});

module.exports = router;

// async function getById(req, res) {
//     const id = getIdParam(req);
//     const card = await models.Card.findByPk(id);
//     if (card) {
//         res.status(200).json(card);
//     } else {
//         res.status(404).send('404 - Not found');
//     }
// };

// async function create(req, res) {
//     if (req.body.id) {
//         res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
//     } else {
//         await models.Card.create(req.body);
//         res.status(201).end();
//     }
// };

// async function update(req, res) {
//     const id = getIdParam(req);

//     // We only accept an UPDATE request if the `:id` param matches the body `id`
//     if (req.body.id === id) {
//         await models.Card.update(req.body, {
//             where: {
//                 id: id
//             }
//         });
//         res.status(200).end();
//     } else {
//         res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
//     }
// };

// async function remove(req, res) {
//     const id = getIdParam(req);
//     await models.Card.destroy({
//         where: {
//             id: id
//         }
//     });
//     res.status(200).end();
// };

// module.exports = {
//     getAll,
//     getById,
//     create,
//     update,
//     remove,
// };