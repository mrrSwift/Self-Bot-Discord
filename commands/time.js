/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
const Discord = require('discord.js');
 module.exports = {
     name:"time",
     description:"say time iran",

     async run (client,message, args){
        var all = new Date();
        var h = all.getHours();
        var m = all.getMinutes();
        var s = all.getSeconds();
        
        message.channel.startTyping();
        const timme = await message.reply(`𝐓𝐢𝐦𝐞(server): **${h}:${m}:${s}**`);
        message.channel.stopTyping();




        
        
        
            
            var t1 = setInterval(startTime, 1000);
        function startTime() {
            
            var all = new Date();
        var h = all.getHours();
        var m = all.getMinutes();
        var s = all.getSeconds();
        
        message.channel.startTyping();
        timme.edit(`𝐓𝐢𝐦𝐞(server): **${h}:${m}:${s}**`);
        message.channel.stopTyping();
/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
        
           }
           var t2 = setTimeout(startTime01,5500);
           function startTime01() {
            clearInterval(t1)
        }
     }
 }