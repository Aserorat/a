module.exports = {
    name: "add",
    cooldown: 6,
    aliases: ['get-in'],

    run: async function(client, message, args) {
        if (!message.channel.name.includes("ticket-")) {
            message.channel.send({
                embed: {
                    title: `**❌ | Error**`,
                    description: `これはチケットチャンネルではありません`,
                    color: 0xFF0000
                }
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
            })
            return
        }
        if (!message.member.hasPermission('MANAGE_CHANNELS')) {
            message.channel.send({
                embed: {
                    title: `**❌ | Error**`,
                    description: `このコマンドを使用するには権限が必要です`,
                    color: 0xFF0000
                }
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
            })
            return
        }
        var member = message.mentions.members.first() ||
            message.guild.members.cache.find(u => u.id == args[0]) ||
            message.guild.members.cache.find(u => u.user.username == args[0]) ||
            message.guild.members.cache.find(u => u.nickname == args[0]) ||
            message.guild.roles.cache.find(r => r.id == args[0]) ||
            message.guild.roles.cache.find(r => r.name == args[0]) ||
            message.mentions.roles.first();
        if (!args[0]) {
            message.channel.send({
                embed: {
                    title: `**❌ | Error**`,
                    description: `ロールを指定する必要があります`,
                    color: 0xFF0000
                }
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
            })
            return
        }
        var txt;
        var mem = member.name;
        if (!mem || mem == null || mem == undefined) {
            txt = '<@!' + member.id + '>'
        } else {
            txt = '<@&' + member.id + '> role'
        }
        message.channel.overwritePermissions([{
            id: require('quick.db').fetch(`TicketControl_${message.channel.id}`),
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
        }, {
            id: member.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY']
        }, {
            id: require('quick.db').fetch(`TicketAdminRole_${message.guild.id}`),
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
        }, {
            id: message.guild.roles.everyone,
            deny: ["VIEW_CHANNEL"]
        }]).then(() => {
            message.channel.send({
                embed: {
                    title: '✅ | Done',
                    description: `${txt} がチケットを作成しました`,
                    color: 0x00D700
                }
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
            })
        })
    }
}

/**********************************************************
 * @INFO
 * Bot Coded by Piyushᵈᵉᵛ#6397  | https://discord.gg/GrGaDg24Vs
 * @INFO
 * Work for toxic Development | https://discord.gg/GrGaDg24Vs
 * @INFO
 * Please Mention Us Toxic Development, When Using This Code!
 * @INFO
 *********************************************************/