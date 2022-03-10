let players = require('../data/players.json')
const filename = './data/players.json'
const helper = require('../helpers/helper.js')
//GET ALL PLAYERS
function getPlayers() {
    return new Promise((resolve, reject) => {
        if (players.length === 0) {
            reject({
                message: 'no player available',
                status: 202
            })
        }

        resolve(players)
    })
}
//GET PLAYER BY ID

function getPlayer(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(players, id)
        .then(player => resolve(player))
        .catch(err => reject(err))
    })
}

function insertPlayer(newPlayer) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(players) }
        const date = { 
            createdAt: helper.newDate(),
            updatedAt: helper.newDate()
        } 
        newPlayer = { ...id, ...date, ...newPlayer }
        players.push(newPlayer)
        helper.writeJSONFile(filename, players)
        resolve(newPlayer)
    })
}

function updatePlayer(id, newPlayer) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(players, id)
        .then(Player => {
            const index = players.findIndex(p => p.id == Player.id)
            id = { id: Player.id }
            const date = {
                createdAt: Player.createdAt,
                updatedAt: helper.newDate()
            } 
            players[index] = { ...id, ...date, ...newPlayer }
            helper.writeJSONFile(filename, players)
            resolve(players[index])
        })
        .catch(err => reject(err))
    })
}

function deletePlayer(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(players, id)
        .then(() => {
            players = players.filter(p => p.id !== id)
            helper.writeJSONFile(filename, players)
            resolve()
        })
        .catch(err => reject(err))
    })
}

module.exports = {
    insertPlayer,
    getPlayers,
    getPlayer, 
    updatePlayer,
    deletePlayer
}