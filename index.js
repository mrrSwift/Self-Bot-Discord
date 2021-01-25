/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/

console.log(`\n\nW8 For 20s\n\n`)

const Discord = require('discord.js-self');

const client = new Discord.Client();

const config = require("./config.json")

const token  = `${config.botstat.tokenbot}`;

const{ readdirSync } = require('fs');

const { join } = require('path');

client.commands = new Discord.Collection();

const perfix = `${config.botstat.prefix}`;



const commandsFiles = readdirSync(join(__dirname,"commands")).filter(file => file.endsWith(".js"))
/*                           Made by Mr Swift                              */


for (const file of commandsFiles){
    const command = require(join(__dirname,"commands",`${file}`));
    client.commands.set(command.name, command);
}




/*                         Made by Mr Swift                            */
client.on('ready',()=> {
    console.log("\n\nSylvanas is Ready\n\n");
    client.user.setActivity("GG",{ type: 'WATCHING' })

});
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/

client.on("message",async message => {

   


/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
    

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;


    if (message.content.startsWith(perfix)){
        const args = message.content.slice(perfix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();
/*                           Made by Mr Swift                              */
        if(!client.commands.has(command)) return;

        try{
            client.commands.get(command).run(client,message,args);
        }catch(error){
            console.log(error);
        }
    }
})




client.login(token);

/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/

