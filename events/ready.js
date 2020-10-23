module.exports = async(bot) => {
  console.log(`${bot.user.username} Has now started..`);
  let status = `fnaf2 with ${bot.users.size} foxes | +help`;
    await bot.editStatus("dnd", {type:0, name:`${status}`});
}
