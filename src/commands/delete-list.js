const {Command} = require('@oclif/command')
const {Gift} = require('../db')
let i = 0;

//while (i < Gift.value().length) {
//  i++
//}

class DeleteCommand extends Command {
  async run() {
    const del = await Gift.remove({removal_tag: 0}).write()
    this.log(del);
  }
}

DeleteCommand.description = `Describe the command here
...
Extra documentation goes here
`

module.exports = DeleteCommand

