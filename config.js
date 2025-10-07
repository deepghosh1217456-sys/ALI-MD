
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA5VUy46jRhT9lVFtbY3N+yG1NBiDwU8Mpg0dZVENxcPGgIsCG4+8zTJZRvmFrLOI8jcT5UMi3N3TvUgmHTbUS+eee8+59zPIi7RCM9QC+TMocdpAgrolaUsEZDCqowhh0AchJBDIoLfgelw4Z/kHPfIp1tSSs7c+e1FTT/n5pLngRtD1gtluNf8OXPugrB+zNPgGYK27xdbzLLwTeHcVQfZB3ZnBmVfpy6KxpsWmZGlJcqa7YXEHrh0iTHGax1qZoAPCMJuh1oIpfh/99ZIeVNUYetHcHeb0dmnOLMZa22XBPlJ5oF9gbxzOd2KwFd9H/xKM6tXEPPJ15pbcvn4sFiG1Ym2NyUdRUQu0q/QeV14Pxv4T/SqNcxSaIcpJStp3171SmjYL1lhQt+1hbLnCOvPO9JYf7O81bjzK6GpwiGl1J+rs+4gfk8GyWBgxG1JIK7xQsM/KbueeKkNc8X7N6kyhzXJ2f2rZt8Qt/OKV/f+p+8y0opVu8SqdnpC3hAZ1Sub5I+2ow+FjzkX0wceUWsUm88667x2ke6vz/uydhlgXL5mF7IdyGh/E/cyVlkd/7z9WUImSePFKH5Iaf4ulu2CleUtXZBAZgevRY7bnJOODuszihT8UFZHPdE7qraUAKTba+HaYKve5Ic3H4c7X3NHIMwbns3H0Lvd2UtZY27BnRbm7ZbRHrRkCmbr2AUZxWhEMSVrktzO+D2DYOCjAiNyqC2ZBaCRme1htF6J0OTmIXvaMnosbM7js1WyY4cWZLKrZ4OTegT4ocRGgqkKhkVakwO0CVRWMUQXk777vgxydyZNuXTSG6oMoxRVx87rMChi+iPpyCYOgqHPitHmgdguEgTx8PUaEpHlcdWWsc4iDJG2QmkBSATmCWYW+JogwCoFMcI2+Nq1ahF3dx6JhjTjLAH1wuOmRhkAGEiVKPCUIHCNIMvup+njqUGFZfswRAX2Q3V5RLM/TPMfSIjekhrzMfurO+yCHHRT464+f//z9lw9ffvrtw5cff33z/+HD01WnxXMqXeQQEZhmFZCBujqe8tofa9PeIFsEk4mixYoaK+A19RcLPWlklkd9vutp0FwJu4sXTmIyIWahlgJTh4PazmbJQXEbcUBpd/8AAmRAemaDJvkgJb7tGJbo7TgGzY+rBWHL+wmXXMyCUTOFJ+bJoFhxdT/fKZth20SbuTBzfB1eCO21VZjYvjpgdmJqIG10uuuihahJA/Q2mDLfzKzBupWKZCMZonjZHHcipwTL43K8dR5sPTHWQ0Hy9XuBORrTjFXt+20YNsThlN4qt5jRdONdgtBmw2XebMK2tNhR/GTuW3Nlz0MtvfmuE7XbRim6zYhnff5L5CfenRWH1/4biOeh8y+NO3JmMHHYQTJJxzUrUoxdzG3szJQjkoQ8EvYPTvEQ6/OBJdngev2+D8oMkqjAByADmIe4uHkIF3XnbTOPim8EUxXX1J4Tz2BFlNd+2aQHVBF4KIFMCZwksjwz5J9eWbgoDVglHQAbTZed91ulLB0CyUv3AaX7ZiYG178BOlbW05gHAAA="
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "falsee",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "91629064×××", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𓂃ᷱ᪳𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄^᪲᪲᪲ 輪", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
