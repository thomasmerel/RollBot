require('dotenv').config({path: `.env`});

const Discord = require('discord.js');

const bot = new Discord.Client();

const Roll = require('./commands/roll');
const Sroll = require('./commands/sroll');
const Help = require('./commands/help');

let prefix = process.env.PREFIX;

bot.on('ready', function () {
    bot.user.setActivity(prefix + 'help').catch();
});

bot.on('message', function (message) {
    if (message.author.bot) {
        return false;
    }

    if (message.channel.type === 'dm' || message.channel.type === 'group') {
        return false;
    }

    if (message.content.lastIndexOf(prefix, 0) === 0) {
        let commandUsed =
            Roll.parse(message);
            Sroll.parse(message);
            Help.parse(message);
    }
});

bot.on('error', console.error);

bot.login(process.env.TOKEN);