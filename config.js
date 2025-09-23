
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA5VVS66jRhTdSqumtvqB+SM9KRj/MDb+AP4Q9aAMBS6bn6nCBrcsJatoZQsZZ9QLiJTsIlIvJMLu192DpPPChKIonXvuPefeeg/SDBNkohqo70Fe4DOkqFnSOkdABd0yDFEB2iCAFAIVLAYcZ+iuia1YgJrvtMw8UJRrv5orsixxVnmcSR7ZbFlu+gxubZCXuxj73wGMn/ozTI45F+ihca6y83JarcQDZ3FypwoZma0CJT/pQ8bhn8GtQYS4wGnUz/coQQWMTVTPIS5eR58M024Zj83jwTU2di0JZrS6dkZd3zX0IyMt+2S3kvdGiN3sdfRLKOa9Ecp5rFuRBBdV3bWVbBr7g545PLuBsLUO+tN8KNvugz7BUYoCI0ApxbR+dd0zfS/p45kiIp84IrTyarrGSStIYLdjr4RuPIhHQtpVjNh4HfHl+NrrFbqNsDMehOuY99i6qoLz1p6F9JKWGx5l3lrqD3v8t8TnxYtXjv+n7pl+ytjJviovlA2veORozij2Ok/xOq+rff+gT3gaOWPZ2SxeR99zqp5SE36dSYeDkAxZZbySI8a8DPRQKo2CK1AyHXhWtMi+0oe0LL7HklGcQLn0rZYfToPkktrLvpDFMsHrjiuz22A8fXLMKExkb6sfjVPUgtMlbHXrwhGzwbJLysGO6RXs6tIJK1nOoTGLWaw93zM6otoIgMre2qBAESa0gBRnabPXYZQ2gMHZRn6B6L28QD6yrg4ZLxCCCVtNFo7ABkic7PKOZxmuG0IkHqCcnCbUfQZtkBeZjwhBwQgTmhX1FBECI0SA+uO7NkhRRR/CNeE4tg1CXBDqpmUeZzB4UfXlJ/T9rEypXae+3ixQAVTm6zaiFKcRaepYprDw9/iM9D2kBKghjAn6kiEqUABUWpToS9fqWdAUfjKSRVscyKANkrsgOAAqUFixozAiz0gio7LMD+TtpYGFef42RRS0QQqb0+DTxw+///zmr99+evPnL/fXH79++vgBtEF8h5EYvqPwIqMICs/zDVCzf/uSQBMvQBTimAAV6OZMiPpk8eQfzCrabjVb00xNa4r6kvCLcx7K2Mqiw4yXB5Ry0WloBrRMFiTbEWOEzK2lZ0s/jhcrkwRd959AgApybf6Et3MXGS0xttblJlKyJ2K2mJlu4jGs42p72mUTw1MmwdDeSc5EEXTuyjB2lWAt0eR65G690M5dj+I+m+sre9K7PDfRAnTGPvo22KofdThGvFyvwdkeHO1wtxgOtaSGg+N2vOPl1vp6niYHayBUDjxnbu3rXHwSIulsdgirL636sNlfr54yrPJUsOluwHOHy8PT956KP88yfHdbI2XzGWJ0Hw2fJftPaR/EGwcyt/Y3GJ+Hzb80bNc9uxbV3S2XK7y5x+lulx8n5lDSuxxOeotTfzP23IFdjBYrcLu9a4M8hjTMiqS5C5IdBG1QZGXjZyMNs+9E0rXI6EePtGNIqPa1RxycIEJhkgOVlQRZ5ASWEx+n5kWWjyDZAxXw3nIu2o3hay3PbQrpS8sBrXkMnQO3vwHBF0VjjgcAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "falsee",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923197521693", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𓂃ᷱ᪳𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄^᪲᪲᪲ 輪", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
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
