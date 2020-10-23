const ms = require("ms");
module.exports.run = async(client, message, args) => {
  const role = message.channel.guild.roles.find(r=>r.name=="Muted");
  if(!role) return message.channel.createMessage("Couldnt find the servers Muted role, pls create one :>");
  const member = message.mentions[0];
  if(!member) return message.channel.createMessage({embed:{author:{icon_url:message.author.avatarURL, name:message.author.username}, description:`I couldnt load the mute command, you didnt mention a user to mute.`, color:16753920}});
  let time = args[1];
  if(!time) return message.channel.createMessage({embed:{author:{icon_url:message.author.avatarURL, name:message.author.username},description:"Pls add a set time to mute the person for, or infinity for it to never end.", color:16753920}});
  if(time=="infinity") time='forever';
  let reason = args[2];
  try{
    message.channel.guild.addMemberRole(member.id, role.id, reason);
    if(time != 'forever') {
    setInterval(() => {
    message.channel.guild.removeMemberRole(member.id, role.id, "Mute time done");
    }, ms(time));
}
  }catch(err){
    return message.channel.createMessage("I have encoutered a error while running the mute command: " + err);
  }
  time = ms(time);
  if(reason) {
  message.channel.createMessage(`${member.mention} Has been muted for ${ms(time, {long:true})}, for ${decodeURIComponent(reason)}.`);
}else{
    message.channel.createMessage(`${member.mention} Has been muted for ${ms(time, {long:true})}, for ${"No reason was specified"}.`);
}
}
module.exports.config = {
  name:"mute",
  aliases:["shut"],
  description:"Mute a member for a specified amount of time (Or forever)",
  title:"<a:D_SkyfoxInABox:768434380028641291>Moderation<a:D_SkyfoxInABox:768434380028641291>"
}
