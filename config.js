const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163910968";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_22_12_08_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDg3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDc0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTkzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNixcbiAgICAgICAgODMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0LFxuICAgICAgICA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4LFxuICAgICAgICAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCWjJ5QTB0WnRyeStvWTFIQXFyem9WbExkWC9lSnNZT1lPdmRKRWpLR1M0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4SHA4WGNoX1FvbVhQaUhqYjdQTkZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjVjZTI2ZjI3LWY1OGEtNGZkYy04YWViLWQ1YzEyMzVhYzcyZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAyMTEsXG4gICAgICAxNDcsXG4gICAgICA0OSxcbiAgICAgIDIwMixcbiAgICAgIDE5MixcbiAgICAgIDE1LFxuICAgICAgMTY0LFxuICAgICAgNDEsXG4gICAgICA2MSxcbiAgICAgIDExMixcbiAgICAgIDEzMyxcbiAgICAgIDE0NCxcbiAgICAgIDIzMCxcbiAgICAgIDE5NCxcbiAgICAgIDEzOSxcbiAgICAgIDQxLFxuICAgICAgOTEsXG4gICAgICAyMzksXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDIyNixcbiAgICAgIDQsXG4gICAgICAyNTQsXG4gICAgICAxOTksXG4gICAgICAxMjEsXG4gICAgICAyMzcsXG4gICAgICAyMTUsXG4gICAgICAxMzUsXG4gICAgICAxMjMsXG4gICAgICAyMjEsXG4gICAgICAxOSxcbiAgICAgIDE4MixcbiAgICAgIDc4LFxuICAgICAgMTY3LFxuICAgICAgNTEsXG4gICAgICA5OSxcbiAgICAgIDE0MyxcbiAgICAgIDQsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSEVXTTRMVFBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjM5MTA5Njg6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzg4NDcyNzgwNjc5NjE6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKaWw5ZW9GRUw2SHliWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFzaWdXRXVuNURMK2RXcnRDdG9ITTZlUGtmQ25wYWI1NE1VMk9hdkcrU2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMWVRM015TTR2MWZSSVdocFR1cUo2ck5QZkNuTDY5VlYrWllwRWQyZFo2cnEzN2I2c1FFdHMrWXZnd2EwZElNc0gyelFiWE5EdURsRlVuMDd0aUZHRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiREpzZTI0TEpkMW4rQ1p5MWMzVWNIdit4dWlsdGdlRExsWTNpTG5JMWluMXBkZmdWaC9PSGRGTHpqUWF0NjhjOFN5eXVJbnUySHdjekhmdHhXTHZRaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MzkxMDk2ODo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjUwNTU5Mzhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
