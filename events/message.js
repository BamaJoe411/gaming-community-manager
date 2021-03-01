module.exports = (client, message) => {
    // Ignore all bots but the gamer situation webhook
    if (message.author.bot && message.author.id != '560277370637123586') return;

    // Evaluate messages not starting with the prefix to perform some special stuff
    if (client.config.assignChannels.includes(message.channel.id)){
        if (message.guild.roles.cache.find(r => r.name === message.content)){
            message.react('☑️');
        } else {
            message.delete({reason: 'No role'});
            message.reply('Invalid Role. Make sure it exists.')
            .then(msg => {
                msg.delete({timeout:5000})
            })
            .catch(console.error);
        }
    }

    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);

    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;

    // Run the command
    cmd.run(client, message, args);
};
