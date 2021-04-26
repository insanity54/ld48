const { Router } = require('express');
const Card = require('../../sequelize/models/card.model');

const router = Router();

// Verify the :cardId parameter is for a valid Card.
router.param('cardId', (_req, _res, next, cardId) => {
    const card = Card.findById(cardId);

    if (card) {
        next();
    } else {
        next(new Error('card not found.'));
    }
});

// POST /cards
// 
// Creates a new card and then appends the new card content to the #cards div
router.post('/', (req, res) => {
    const { content } = req.fields || {};

    const card = Card.create(content || '');

    res.turboStream.append('cards', {
        partial: 'cards/show', // Use the cards/show.ejs template to append the #cards div
        locals: {
            card,
        }
    })
});

// GET /cards/:cardId/edit
//
// Renders edit view for a particular card using turbo streams
router.get('/:cardId/edit', (req, res) => {
    const card = Card.findById(req.params.cardId); 

    res.render('cards/edit', {
        card,
    })
});

// POST /cards/:cardId
//
// Updates existing card content
router.post('/:cardId', (req, res) => {
    const { content } = req.fields || {};
    const card = Card.updateById(req.params.cardId, content);

    res.render('cards/show', {
        card,
    });
});

// DELETE /cards/:cardId
//
// Deletes a card and removes the element with the id of "card_{id}".
router.delete('/:cardId', (req, res) => {
    const { cardId } = req.params;

    Card.removeById(cardId);

    res.turboStream.remove(`card_${cardId}`);
});

module.exports = router;