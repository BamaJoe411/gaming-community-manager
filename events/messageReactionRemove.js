module.exports = async (client, reaction) => {
    if (reaction.partial) {
        try {
            await reaction.fetch();
        } catch (error) {
            console.log('Something went wrong when fetching the message: ', error);
            return;
        }
    }

    if (client.config.assignChannels.includes(reaction.message.channel.id)) {
        if (reaction._emoji.name == '☑️') {
            const role = reaction.message.guild.roles.cache.find(r => r.name === reaction.message.content);
            const member = reaction.message.guild.members.cache.get(user.id);
            member.roles.remove(role).catch(console.error);
        }
    }

};
