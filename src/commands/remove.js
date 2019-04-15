const {Command, flags} = require('@oclif/command')
const {Gift} = require('../db')

class RemoveCommand extends Command {
  async run() {
    const {
      flags: {id},
    } = this.parse(RemoveCommand)
    const del =  await Gift.remove({id: parseInt(id, 10)}).write();
    this.log(del)
  }
}

RemoveCommand.description = `Removes a gift idea by id
...
Uses the input for the id flag to selectively remove the corresponding gift object
`

RemoveCommand.flags = {
  id: flags.string({char: 'n', description: 'task id'}),
}

module.exports = RemoveCommand
