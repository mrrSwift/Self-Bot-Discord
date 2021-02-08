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
      
       

            var t1 = setInterval(startTyping, 8000);
            

            function startTyping() {


                message.channel.startTyping();

                 sleep();
                message.channel.send(`${args[0]}`);


            }

            function sleep() {
                setTimeout(() => { console.log("gg!"); }, 4000);
            
        

            
            }
            
       
     }
 }