/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
const client = require('nekos.life');
const neko = new client();
const Discord = require('discord.js');
const config = require("../config.json")

 module.exports = {
     name:"kiss",
     description:"i see",

     async run (client,message, args){

        const idowner = `${config.botstat.ownerID}`
        if(message.author.id === idowner) {
         const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        
         if (!user) return message.reply('Who do you want to kiss??')

         
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
         if (user.id === `${config.botstat.botID}`) {
            message.react("💋")
             message.channel.send ('^-^')}
             else{ neko.sfw.kiss().then(neko => {
                
                message.channel.startTyping();
                message.channel.send(`${user} You got a kiss from${message.author.username}\n${neko.url}`)
                message.channel.stopTyping();
                
                console.log(`Kiss [1]`)
            })};


       
       
        }
        
           
     }
 }
 