const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame("In Trevor's Kitchen");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);

  if(cmd === `${prefix}channel`){
    return message.channel.send("**Like and Subscribe!** https://www.youtube.com/channel/UCghIheZtHdT2DVhOzltoRwA?view_as=subscriber");
  }

  if(cmd === `${prefix}botinfo`){

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("The best bot. | Still in development!")
  .setColor("#2100b7")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username)
  .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}implinks`){

  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#f08619")
  .setThumbnail(bicon)
  .addField("Application", "https://docs.google.com/forms/d/e/1FAIpQLScSytlqJXcycz0AK4yTG-X0Ixd8zspUVYwqjc7YklgUYBNQrA/viewform")
  .addField("SOP", "https://docs.google.com/document/d/1qB1va0B25_lRgkOknI2cEdktc7oSn-EjjCQp5_nmyIo/edit?usp=sharing")
  .addField("Uniform Structure", "https://docs.google.com/spreadsheets/d/1vEwjfyz3M7cfj5BbMoofXzbbQNOwiE4narPtl4An5lU/edit?usp=sharing")
  .addField("Vehicle Structure", "https://docs.google.com/spreadsheets/d/1ijD-zzU1-yVEh3MGwyyi3i9eRo4IRV9Q-OziymuLObQ/edit?usp=sharing")

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}sop`){
    return message.channel.send("Here you go, since your just to lazy to just look at it in the TeamSpeak: https://docs.google.com/document/d/1qB1va0B25_lRgkOknI2cEdktc7oSn-EjjCQp5_nmyIo/edit?usp=sharing");
  }

  if(cmd === `${prefix}uniform`){
    return message.channel.send("Our uniforms are insane! https://docs.google.com/spreadsheets/d/1vEwjfyz3M7cfj5BbMoofXzbbQNOwiE4narPtl4An5lU/edit?usp=sharing");
  }

  if(cmd === `${prefix}vehicle`){
    return message.channel.send("Don't even get me started on our smexy cars :wink:. https://docs.google.com/spreadsheets/d/1ijD-zzU1-yVEh3MGwyyi3i9eRo4IRV9Q-OziymuLObQ/edit?usp=sharing");
  }

  if(cmd === `${prefix}bcso`){
    return message.channel.send("Well, seems you have lost the BCSO discord? Here ya go: https://discord.gg/4GM5JnR ");
  }

// This command will require 2 NPM packages
// `npm i ytdl-core node-opus`
const ytdl = require('ytdl-core');

// You can use your own command handler if you'd Like
exports.run = async (client, message, args, ops) => {

    // First, we need to check if the author is connected to a voice channel
    if (!message.member.voiceChannel) return message.channel.send('Connect to the Music channel first.');
    // If not, return & send a message to chat

    // Check if bot is already connected to a voice channel
    if (message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot is already connected to the guild');

    // Check if author imput a url
    if (!args[0]) return message.channel.send('Sorry, please imput a url following the command.');

    // Validate Info
    let validate = await ytdl.validateURL(args[0]);

    // Check validation
    if (!validate) return message.channel.send('Sorry, please imput a **valid** url following the command.');
    // valdate will contain a boolean if the url is valid or not

    // Fetch video info
    let info = await ytdl.getInfo(args[0]);

    // Store authors guild channel
    let connection = await message.member.voiceChannel.join();

    // Play song
    let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly' }));
    // The dispatcher variable will be used in a later epsiode

    // Output now playing
    message.channel.send('Now playing: ${info.title}');
}

  if(cmd === `${prefix}reese`){
    return message.channel.send('Hi @Reese#3346!');
}















});

bot.login(botconfig.token)
