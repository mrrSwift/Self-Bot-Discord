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
 module.exports = {
     name:"typing",
     description:"Say Date",

     async run (client,message, args){
        /*   Made by Mr Swift  */
      
        const idowner = `${config.botstat.ownerID}`
       if(message.author.id === idowner) {

            var t1 = setInterval(startTyping, 8000);
            

            function startTyping() {


                try {
                message.channel.startTyping();

                 sleep();
                message.channel.send(`${args[0]}`);

                }
                catch(err) {
                    console.log(`error`)
                }


            }

            function sleep() {
                setTimeout(() => { console.log("Next!"); }, 4000);
            
        
            }
            
            }
            
       
     }
 }