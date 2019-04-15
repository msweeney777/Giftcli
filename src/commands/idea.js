const {Command} = require('@oclif/command')
const {Gift} = require('../db')
const i =  Math.round((Math.random() * (Gift.value().length - 1)));

class IdeaCommand extends Command {
  async run() {
    const output = await Gift.find({id: i}).value()
    this.log(output.gift)
  }
}

IdeaCommand.description = `Randomly returns an idea from the gift log
...
Generates a random id, then prints the correlating object from the log database.
`

module.exports = IdeaCommand
