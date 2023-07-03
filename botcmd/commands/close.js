const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    name: "close",
    cooldown: 5,
    aliases: ["end"],

    run: async function(client, message, args) {
        try {
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
            let btn = new MessageButton()
                .setStyle("green")
                .setEmoji("✅")
                .setID("closeTicketTrue");
            let btn2 = new MessageButton()
                .setStyle("grey")
                .setEmoji("⛔")
                .setID("closeTicketFalse");
            let row = new MessageActionRow()
                .addComponent(btn)
                .addComponent(btn2);
            message.channel.send({
                embed: {
                    title: `**⚠️ | Confirmation**`,
                    description: `本当にチケットを閉じてもよろしいですか？`,
                    color: 0xFFF200
                },
                component: row
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
                require('quick.db').set(`DeleteMessage_${message.channel.id}`, msg.id)
            })
        } catch (err) {
            return;
        }
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