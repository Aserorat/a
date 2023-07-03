const sourcebin = require('sourcebin_js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'transcript',
	category: 'Ticket',
	description: 'Trascripts a specified ticket.',
	aliases: [],
	usage: 'transcript',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
		const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel;
		if (channel.name.includes('ticket-')) {
			if (message.member.hasPermission('ADMINISTRATOR') || channel.name === `ticket-${message.author.id}`) {
				channel.messages.fetch().then(async (messages) => {
					const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

					let response;
					try {
						response = await sourcebin.create([
							{
								name: ' ',
								content: output,
								languageId: 'text',
							},
						], {
							title: `Chat transcript for ${channel.name}`,
							description: ' ',
						});
					}
					catch(e) {
						return message.channel.send('An error occurred, please try again!');
					}
message.react('887650847327158343');
					const embed = new MessageEmbed()
						.setDescription(`[\`📄 View\`](${response.url})`)
						.setColor('GREEN');
					message.reply('トランスクリプトが完成しました。トランスクリプトを表示するには、下のリンクをクリックしてください', embed);
				});
			}
		}
		else {
			return message.reply(
				'このコマンドはここでは使用できません。このコマンドはチケットで使用してください。',
			);
		}
	},
};

/**********************************************************
 * @INFO
 * Bot Coded by R Piyushᵈᵉᵛ#6397  | https://discord.gg/GrGaDg24Vs
 * @INFO
 * Work for  | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Please Mention Us  Development, When Using This Code!
 * @INFO
 *********************************************************/