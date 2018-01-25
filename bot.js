const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
     console.log(`Bot is online! ${bot.user.username}`);

    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e) {
       console.log(e.stack);
    }
});

bot.login(botSettings.token);

bot.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      let messageArray = message.content.split(" ");
      let command = messageArray[0];
      let args = messageArray.slice(1);
      
      bot.login(process.env.BOT_TOKEN);
