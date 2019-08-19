const Command = require('./command');

module.exports = class Help extends Command {
    static match(message) {
        return message.content.startsWith(process.env.PREFIX + 'help');
    }

    static action(message) {
        message.channel.send('Voici les commandes qu vous pouvez utiliser :' + '\n' +
            '!help => Affiche ce message' + '\n' +
            '!roll `x`d`y` => Lancer les dés. Exemple : !roll 4d6' + '\n' +
            '!sroll `x`d`y` => Lancer les dés en secret. Exemple : !sroll 4d6'
        );
    }
};