
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA5VVS66jRhTdSqumtvqBjQFbelIwtgHjL9jYEPWATwFlvq4qbOOWpWQVrWwh44x6AZGSXUTqhUT4fboHSeeFCUVROvfce8699RHkBSJQhzUYfAQlRieXwmZJ6xKCARhWYQgxaIPApS4YgJa25e2H8VLeboZaaWW+KMJtYTqb3mIs1J7WGk3d60TtBB3tEdzaoKy8FPnfAeSSQlHNoyrZ+5L2+cBJOvmDlSwVJUKiPtRbh9biughJaEmP4NYgugijPBqXMcwgdlMd1isX4bfRt4eeZDO2PZ0O8fUcZTo2ncOmir004yMH8idWqzP9wM/287fRTx+SM5w567Fymaq8Ndxtg3BJDb1ItLT2l0s/uZZGPwv7afREn6Aoh4EWwJwiWr+57kTpzFCpapLhcVbP5Lg+wtaImbELZpcqZno0jhazGC3UXHwb8SJPDif3rFvz4FDo2SoKjleYzhJuN5+rgq4HIb+cVqI2V7Rvia/wi1eS/1P3ao4TJ42R1/PqPaW76LwQg3FvHPFpX9RpzB9Enszc5SiT3kZ/cTKpZpxZ4njHUdiVCqs8twrjMl2HWnC48nvpsBw65lXMi6/0XVrh77FccnKp78bY166jKDP9sjWUjfGxSo2HhwmziKsNFBMqCkzLlc34HKLVrHsdryfXPbvZLrUuzkNHnmQPZyyXu2mCJvjsH6THe0YJrLUADNhbG2AYIUKxS1GRN3sC0wZucDKhjyG9VxcotpQuKh6dyu06POJJzsBdrNlqoEZwHW+UXGFMh5ukTBU9gjYoceFDQmCgIkILXM8hIW4ECRj8+KENcnihT7o10bpsG4QIE7rNqzIt3OBF1Jefru8XVU7NOvflZgExGDBftyGlKI9IU8Yqd7EfoxOUY5cSMAjdlMDXBCGGARhQXMHXppWLoKm7OettTEccgzbI7nqgAAxAn+U7fYbnGIFnBmz3B/L+3MC6Zfk+hxS0Qe42p8GXz59+//ndX7/99O7PX+6vP3798vkTaIP0DiMwXKfP8Uy/1+c4rgFq9m+vCTTxAkhdlBIwALK+7EVjso5Lwb5Etj2UJUmXpKaoLwm/GOdJGbO/7jBT4wDzbnRU9IBW2ZoUHtFUqNsLuTD8NF1bOgmG238CAQOQq5ONNY3SOFtFw13tGAofVNlBUc/+qseIm5Zma6Pd7DS9OPPV5KL6Ijwcdd2yLkn3NMnYTeskcIgpepfsQWMEsr/07OH6sYkWwBPy4bfBnEVSQKHKVqqUsbYszODKsFs9mkkbQaTzmK1zwqmj8qDEDhGJZhyoYIzCqzft+Zt1lh0FYokxS9Zcoo4TfuMFVz5+tvS9pdLnUYbubmukbD5DBO+T4Vmy/5T2iXjjQObW/gbjedb8S78Ot6ftgspbu1v2OT1GueeVyUxXBHnYRdlofRzvp852YmJ1bYHb7UMblKlLwwJnzUTNPBe0AS6qxs9aHhbfiSRLkTaOntJOXUKlrz2yQRkk1M1KMGCFnij2+gwrPp1a4aJUXRI315xjrHizMXwtlaVJXfrSckBqHk3mwO1vxVAH9I0HAAA="
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
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
