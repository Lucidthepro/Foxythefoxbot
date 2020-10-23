module.exports.run = async(client, message, args) => {
  let msg = args.join(" ");
  if(!msg) return message.channel.createMessage({embed:{author:{icon_url:message.author.avatarURL, name:message.author.username}, description:"Couldnt run command, you didnt add a message to be said.", color:16753920}});
  message.delete();
  message.channel.createMessage(`${msg}`);
}
module.exports.config = {
  name:"say",
  aliases:["talk"],
  description: "Says a message as the bot",
  title:"<a:D_SkyfoxExcited:768434638829387787>Fun<a:D_SkyfoxExcited:768434638829387787>"
}
