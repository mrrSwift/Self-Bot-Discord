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
     name:"typing",
     description:"Say Date",

     async run (client,message, args){
        /*   Made by Mr Swift  */
      
        if (args[0] === on){

            var t1 = setInterval(startTyping, 5000);
            var t1 = setInterval(stopTyping, 10000);

            function startTyping() {


                message.channel.startTyping();

                
            }
            function stopTyping() {

                message.channel.stopTyping();

                }


        }

        if (args[0] === off){

            


                message.channel.stopTyping();

            
            


        }
            
           
            console.log(`start typing ${args[0]}` )
       
     }
 }