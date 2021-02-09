/***************************************************************************/
/*                                                                         */
/*                           Made by Mr Swift                              */
/*                      Best Source FOR Discord Bot                        */
/*               Server Support :https://discord.gg/6Zgu6TN                */
/*                        My instagram : Mr_.swift                         */
/*                              Copyright: 2020                            */
/*                                                                         */
/***************************************************************************/
module.exports = {
    name:"joinv",
    description:"i see",

    async run (client,message, args){

        const config = require("../config.json")
        const idowner = `${config.botstat.ownerID}`
        if(message.author.id === idowner) {



        const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply(' Please join a voice channel first!');
		}
/*   Made by Mr Swift  */
		const connection = await voiceChannel.join();
	    const dispatcher=connection.play('https://unliimiitedworld.000webhostapp.com/fbi.mp3');

    }
		

      
    }
}
