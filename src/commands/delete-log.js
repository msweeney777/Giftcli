const {Command} = require('@oclif/command')
const {Gift} = require('../db')

class DeleteCommand extends Command {
  async run() {
    const del = await Gift.remove({removal_tag: 0}).write()
    console.log('The following has been deleted')
    this.log(del);
  }
}

DeleteCommand.description = `Deletes the entire list of gifts
...
Deletes every item in the db.json file
`

module.exports = DeleteCommand

