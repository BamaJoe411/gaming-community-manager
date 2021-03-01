module.exports = async (client, reaction, user) => {
    if (reaction.partial) {
        try {
            await reaction.fetch();
        } catch (error) {
            console.log('Something went wrong when fetching the message: ', error);
            return;
        }
    }
    // remove game role
    if (client.config.assignChannels.includes(reaction.message.channel.id)) {
        if (reaction._emoji.name == '☑️') {
            const role = reaction.message.guild.roles.cache.find(r => r.name === reaction.message.content);
            const member = reaction.message.guild.members.cache.get(user.id);
            member.roles.remove(role).catch(console.error);
        }
    // remove rules accepted role
    } else if (client.config.rulesChannels.includes(reaction.message.channel.id)) {
        if (reaction._emoji.name == '✅') {
            const role = reaction.message.guild.roles.cache.find(r => r.name === "Corner Dweller");
            const member = reaction.message.guild.members.cache.get(user.id);
            member.roles.remove(role).catch(console.error);
        }
    }

};
