const {Client, Collection} = require("eris");
class bot {
  constructor(token) {
    this.bot = new Client(token);
  }
  launch() {
    const {readdir} = require("fs");
    readdir("./events/", (err, files) => {
      if(err) return console.log("Hi mister, a error occured sadly. Error: " + err);
      files.forEach(file => {
        let req = require(`./events/${file}`);
        let name = file.split(".")[0];
        console.log(`starting event ${file}`);
        this.bot.on(name, req.bind(null, this.bot));
      });
    });
      this.bot.commands = new Collection(); 
      readdir("./commands/", (err, files) => {
      if(err) return console.log("Hi mister, a error occured sadly. Error: " + err);
      files.forEach(file => {
        let req = require(`./commands/${file}`);
        let name = file.split(".")[0];
        console.log("loading command " + name);
        this.bot.commands.set(name, {run:req.run,...req.config});
  });
});
this.bot.on("error", err => {
  return console.log("found error: " + err + " but ignored it.");
});
this.bot.connect();
  }
}
module.exports = bot;
