const express = require('express')
const router = express.Router()
const player = require('../models/player.model')
const m = require('../helpers/middlewares')

/* All players */
router.get('/', async (req, res) => {
    await player.getPlayers()
    .then(players => res.json(players))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})



/* A player by id */
router.get('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id

    await player.getPlayer(id)
    .then(player => res.json(player))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* Insert a new player */
router.post('/', m.checkFieldsPlayer, async (req, res) => {
    await player.insertPlayer(req.body)
    .then(player => res.status(201).json({
        message: `The player #${player.id} has been created`,
        content: player
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

/* Update a player */
router.put('/:id', m.mustBeInteger, m.checkFieldsPlayer, async (req, res) => {
    const id = req.params.id

    await player.updatePlayer(id, req.body)
    .then(player => res.json({
        message: `The player #${id} has been updated`,
        content: player
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

/* Delete a player */
router.delete('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id

    await player.deletePlayer(id)
    .then(player => res.json({
        message: `The player #${id} has been deleted`
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

module.exports = router