module.exports.run = async(client, message, args) => {
  const cmdToLook = args.join(" ")
  if(!cmdToLook) {
  const commandCategories = [];
  function removeDuplicateArray(array, value) {
   const unique = array.map(e => e[value]).map((e, i, final) => final.indexOf(e) === i && i).filter((e) => array[e]).map(e => array[e]);
   return unique;
}
  client.commands.forEach(command => {
    commandCategories.push({name:command.title, value:client.commands.filter(cmd=>command.title == cmd.title).map(cmd=>cmd.name).join(", ")});
  });
  message.channel.createMessage({embed:{author:{name:message.author.username,icon_url:message.author.avatarURL}, title:`🦊My Commands🦊`, fields:removeDuplicateArray(commandCategories, "name"), color:16753920}});  
}else{
let cmd = client.commands.get(cmdToLook.toLowerCase())||client.commands.find(cm=>cm.aliases&&cm.aliases.includes(cmdToLook.toLowerCase()));
if(!cmd) return message.channel.createMessage({embed:{author:{name:message.author.username,icon_url:message.author.avatarURL},description:`A Error occured while trying to find the command ${cmdToLook}, is it a real command? check in +help!`, color:16711680}});
message.channel.createMessage({embed:{author:{name:client.user.username,icon_url:client.user.avatarURL}, title:`🦊${cmd.name} Info🦊`, description:`Type: ${cmd.title}\nAliases: ${cmd.aliases.map(alias=>alias).join(", ")}\nDescription: ${cmd.description}`, color:16753920,footer:{icon_url:message.author.avatarURL,text:`Info requested by ${message.author.username}`}}});
}
}
module.exports.config = {
  name:"help",
  aliases:["commands", "cmd"],
  description:"Shows thats screen",
  title:"<a:D_SkyfoxFlop:768435075837984808>Utility<a:D_SkyfoxFlop:768435075837984808>"
}
