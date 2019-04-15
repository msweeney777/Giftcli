const {Command} = require('@oclif/command')
const chalk = require('chalk')
const {Gift} = require('../db')

class ListCommand extends Command {
  async run() {
    const output = await Gift.sortBy('id').value();
    output.forEach(({id, gift}) => {
      this.log(`${chalk.magenta(id)} ${gift}`) 
    })
  }
}

ListCommand.description = `Shows existing gifts 
...
Shows all the listed gifts sorted by their ids
`

module.exports = ListCommand
