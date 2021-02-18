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
const fs = require('fs');
const ytdl = require('ytdl-core');
 module.exports = {
     name:"download",
     description:"Say Date",

     async run (client,message, args){
        /*   Made by Mr Swift  */
      
        const idowner = `${config.botstat.ownerID}`
       if(message.author.id === idowner) {

           

                try {
               


                    ytdl(args[0])
                  .pipe(fs.createWriteStream('video.mp4'));



                }

                catch(err) {

                    console.log(`error`)
                }


            

        
            
            }
            
       
     }
 }