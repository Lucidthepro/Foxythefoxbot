module.exports = async(bot, message) => {
  if(message.author.bot) return;
  if(message.webhookID) return;
  const prefix = "+";
if(message.content[0] !== prefix) return;
let args = message.content.slice(prefix.length).split(" ");
let command = args.shift();
const commands = bot.commands.get(command.toLowerCase())||bot.commands.find(cm=>cm.aliases&&cm.aliases.includes(command.toLowerCase));
if(!commands) return message.channel.createMessage(`i couldnt find the command ` + command);
commands.run(bot, message, args, prefix);
}
