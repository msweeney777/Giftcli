const {Command, flags} = require('@oclif/command')
const {Gift} = require('../db');

class AddCommand extends Command {
  async run() {
    const {
      flags: {gift},
    } = this.parse(AddCommand)
    const input = await Gift.push({
      gift,
      id: Gift.value().length,
      added_date: Date(),
      removal_tag: 0
    }).write()
    this.log(input)
  }
}

AddCommand.description = `Generates a depository of gift ideas
...
Adds a new gift idea to the db.json file.
`

AddCommand.flags = {
  gift: flags.string({char: 'n', description: 'gift'}),
}

module.exports = AddCommand
