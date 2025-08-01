//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: @DGXeon
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//telegram channel: https://t.me/+WEsVdEN2B9w4ZjA9

const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "7920806430:AAGk7exGzvOAyQjk1hT85HlqYYXOp3DUJWA" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "SAYAN BUG VIP" //your bot name
global.OWNER_NAME = "SAYAN XMD" //your name with sign @
global.OWNER = ["https://t.me/+EFc86BlQ4142NThl", "https://youtube.com/@DEVIL-KING-STORE"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["7526733585"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://i.ibb.co/XZx1swdC/20250731-034852.jpg'//your bot pp


//approval
global.GROUP_ID = -1002762694963; // Replace with your group ID
global.CHANNEL_ID = -1002770000453; // Replace with your channel ID
global.GROUP_LINK = "https://t.me/sayanbugv1"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "https://t.me/+zkQtqmy6EzYxYjg1"; // Replace with your private channel invite link
global.WHATSAPP_LINK = "https://whatsapp.com/channel/0029Vb5lsHA6LwHm4BSGqB2Z"; // Replace with your group link
global.YOUTUBE_LINK = "https://youtube.com/@its_sayan-j3p"; // Replace with your youtube link
global.INSTAGRAM_LINK = "https://www.instagram.com/alex_saya_n"; // Replace with your ig linkl

global.owner = global.owner = ['254740358165'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
