const Discord = require('discord.js');
module.exports = {
    name: "geninv",
    cooldown: 5,
    aliases: ["invite_premium","++"],
 
run: async (bot, message, args) => { //async
    if(!message.author.id.includes(`903492864535838740`)) return  message.reply('**ONLY MY OWNER CAN USE THIS COMMAND! ❎**')
	message.channel.send(new Discord.MessageEmbed()
  .setTitle(`Invite Ticket Premium Tickets`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  .setDescription(`**Invite Me [here]()**\n\n**Note: _Only my owner can invite me!_**`)
  .setColor(`#0x2F3136`));
	}
};

/**********************************************************
 * @INFO
 * Bot Coded by Piyushᵈᵉᵛ#6397  | https://discord.gg/GrGaDg24Vs
 * @INFO
 * Work for Toxic Development | https://discord.gg/GrGaDg24Vs
 * @INFO
 * Please Mention Us Toxic Development, When Using This Code!
 * @INFO
 *********************************************************/