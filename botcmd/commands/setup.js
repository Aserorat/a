const { MessageButton, MessageActionRow } = require('discord-buttons');
const ee = require("../../botconfig/embed.json");
const Discord = require('discord.js');

module.exports = {
    name: "setup",
    cooldown: 5,
    aliases: ["create"],

    run: async function(client, message, args) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "コマンドを使用できる権限が足りません"
      );
    }
        try {
            var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`);
            if (prefix == null) prefix = require('../../config/bot').prefix;
            var ticketChannel = message.mentions.channels.first() || client.channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name == args[0]) || message.channel;
            var adminRole = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1]) || message.guild.roles.cache.find(r => r.name == args[1]);
            var title = message.content.split(' ').slice(3).join(' ') || '**Multi-Ticket**\n\n__**Here You Can Open A Support, Other And Even A Claim Ticket!**__\n`Click The Button Category Below Based On Your Needs`';
            if (!adminRole) {
                message.channel.send({
                    embed: {
                        title: `❌ | Wrong use`,
                        description: `⚠ | correct use: ${prefix}setup <Ticket Channel> <Admins Role>`,
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
                .setStyle("gray")
                .setLabel("チケット発行")
                .setEmoji('🎫')
                .setID("createTicket")
            let row = new MessageActionRow()
                .addComponent(btn)
                

                
                const panel = new Discord.MessageEmbed()
                .setTitle(`お問い合わせ`)
               .setDescription(`チケットを作成するには 🎫 を押してください。チケットが発行された後、作成されたチャンネルでお問い合わせ内容を記載してください。`)
//                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setColor(`RANDOM`)
                .setFooter(ee.footertext, ee.footericon)
            ticketChannel.send(panel, row)
            .then(async function() {
                require('quick.db').set(`TicketAdminRole_${message.guild.id}`, adminRole.id);
            })
        } catch (err) {
            return;
        }
    }
}

/**********************************************************
 * @INFO
 * Bot Coded by R Piyushᵈᵉᵛ#6397  | https://discord.gg/GrGaDg24Vs
 * @INFO
 * Work for  Development | https://discord.gg/GrGaDg24Vs
 * @INFO
 * Please Mention Us  Development, When Using This Code!
 * @INFO
 *********************************************************/