/const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_15_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDkyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NyxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMixcbiAgICAgICAgMTkzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODksXG4gICAgICAgIDk4LFxuICAgICAgICAxMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDc4LFxuICAgICAgICA3MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NixcbiAgICAgICAgMTg2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDWWN5VTVta09ZUkpUSFpLQzdtTGY0ak1oYXJkTjArZldpaVRBMTZVVHVVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUMW13al9RTVJsdVNhRzhVX29mdXVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImM4OTliZjVmLWI1MTMtNGIwYi1iY2Q4LWM3OWIxMmQ1YjMxMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OSxcbiAgICAgIDExNCxcbiAgICAgIDE5MCxcbiAgICAgIDIyOSxcbiAgICAgIDI1MSxcbiAgICAgIDY5LFxuICAgICAgMTYsXG4gICAgICA5OCxcbiAgICAgIDIxLFxuICAgICAgNzcsXG4gICAgICAxMDksXG4gICAgICAxNzQsXG4gICAgICAxNzYsXG4gICAgICAyNTIsXG4gICAgICAxMDIsXG4gICAgICAxNTUsXG4gICAgICAxNyxcbiAgICAgIDEyMSxcbiAgICAgIDc4LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDk0LFxuICAgICAgMTk0LFxuICAgICAgMjksXG4gICAgICA3LFxuICAgICAgMTY1LFxuICAgICAgMTIxLFxuICAgICAgMjExLFxuICAgICAgMTc0LFxuICAgICAgOTgsXG4gICAgICA0NyxcbiAgICAgIDE5MixcbiAgICAgIDI1NSxcbiAgICAgIDIwNCxcbiAgICAgIDg2LFxuICAgICAgMTMyLFxuICAgICAgNzIsXG4gICAgICAyNDQsXG4gICAgICAxODYsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFBBRTNZNEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNzk5MjI5NTk4Ojc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2WmfCdlo3wnZaKIPCdlofwnZaR8J2WhvCdlojwnZaQIPCdlpDwnZaO8J2Wk/Cdlowg8J2WjvCdlpLwnZaV8J2WivCdlpfwnZaO8J2WhvCdlpEgREJQXCIsXG4gICAgXCJsaWRcIjogXCI0MzMxOTI3NTA4NjAzOTo3NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPU0ltNzRCRUlteDBMc0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVxNnl2QWU4WDQzTGRWaXpaUnppZVFTU1psc3F3MDBBQmc0bCtGUTFNUTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWUQzYjR0K2NIa2dWdGF1NVlmZHA4SXdwdFRITVFIc252akg0WkV4THk3R3N5bFRIenEzWnQ2R25ic3gwUkxIYVl0cUxyTElyYUQ0SkV0cVViNHV5REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRS91RVlkLys5dWJpNU92RUFUOEVldkk2eXd4eHFESkN3N1Y4NklGa1lQTllHL1g3RHdITWpnVHpZVFZuakZKWi8yVWpmS3BlalFQc1FmUWRxNCtGQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI3OTkyMjk1OTg6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU2NjE3MDhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
