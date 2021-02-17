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
const config = require("../config.json")
const ytdl = require("discord-ytdl-core");
const {sender} = require("../functions")
module.exports = {
    name:"download",
    description:"send weather in channel",

    async run (client,message, args){
        const idowner = `${config.botstat.ownerID}`
        if(message.author.id === idowner) {
/*   Made by Mr Swift  */
        

     
    ytdl(`${args[0]}`, {
       fmt: "mp3",
       encoderArgs: ['bass=g=5']
     }).pipe(fs.createWritestream("../music/music.mp3"));
 



     sender()
     







    }
    }
}