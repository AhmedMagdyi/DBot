const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("&bc - $bot || Dbot ", {type: 'STREAMIN'});
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log(' Bot with GMZN Host')
  console.log(' Bot with GMZN Host')
  console.log(' Bot with GMZN Host')
  console.log(' Bot with GMZN Host')
  console.log(' Bot with GMZN Host')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

//بداية كود البرودكاست

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

//نهاية كود البرودكاست

client.on('message', message => {
    if (message.content === ('$bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**سرعة البوت 🚀 :**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**السيرفرات 📚 :**', [client.guilds.size], true)
            .addField('**الرومات 📝 :**' , `[ ${client.channels.size} ]` , true)
            .addField('**خادم :**' , `__**GMZN Host | V4:Pro**__` , true)
            .addField('**البرفكس :**' , `$` , true)
            .addField('**الأشخاص 🔮 :**' ,`[ ${client.users.size} ]` , true)
            .addField('**اسم البوت 🔰 :**' , `[ ${client.user.tag} ]` , true)
            .addField('** صاحب البوت 👑 :**' , `__**root**__ مخصص الي  - [<@545315760877076510>] ` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});

//بداية كود الخ


client.login(process.env.BOT_TOKEN);
