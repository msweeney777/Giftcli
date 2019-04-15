const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json')
const db = low(adapter);
//Defaults for when the db.json file is totally empty
db.defaults({gift: []}).write();
const Gift = db.get('gift');
module.exports = {
  db,
  Gift
}
