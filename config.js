
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA5VUW66jRhDdyqh/bc0Fg81DulIwfoDxAz+wjaP5aKCBtnm5u7GNR5aSVYyyhXznaxYQKdlFpFlIhO9j5iOZ3PBDU7ROnapzqj6CLMcUWagC6kdQEHyCDNVHVhUIqKBbhiEioAkCyCBQgdwr5UK6pMUsU/jLxTDTdByFxso79p1GvrD5fEyRqHjiVn4EtyYoSi/B/ncAo3gHYejPLqJ4qc55V3J4Mxlyi1QLrlZmlkJuyy1HXw4H/iO41YgQE5xF/SJGKSIwsVBlQ0zeRt8fSBbhDlu2RQ/ug64vVjZt7ObTkaJdbIOcmMcW1xlttwznbfQl8cwnijeYjeHOcJUrvF4OheH5xGX8tLc/pEcCr+Zc0GLniT7FUYYCM0AZw6x6c983VhQnO2MSaWNxtUFc7MHhgDMn0lgspinVYS65kG+hYEjfRjzz4Sl0d7o7foBnztb8gyQIvGMwOR5sHry0m2zdVVsvh9rhW+I2efHK4f/0PbK9RjBdbLidb3fE1dhsN6T+IPZl+2oH+y1LvTCS9+1WODi/jX5btogswBmH80Bor1N6Ol+R1D1sbQ25yGvMM3KQ+PFa39Kv9CEryfdYTtN1YzyUR+V+V7T63V51xJeLhHW9rTSCld0L8u40FjvTq3kMAle6QJ7GFg1QiqvVcb0cwYHSkeWh2dBgsN2erq3Rzu+eH+8VHVBlBkDlb01AUIQpI5DhPKtjLa7TBDA4LZFPELu3F2BtPiFTZyXa2jUe4v2D8HCxvXOn7LbY0r/mXHvSj5gVyYH8CJqgILmPKEWBgSnLSTVBlMIIUaD++KEJMnRhT8LV6QS+CUJMKHOyskhyGLyo+vIT+n5eZmxZZb5eHxABKvc1jBjDWUTrPpYZJH6MT0iPIaNADWFC0WuFiKAAqIyU6HVq9TyoG29NZF6abGzQBOldEBwAFSh8p6VwHZGTOpzK8z/Q9+caFhbF+wwx0AQZrG+DL58//f7zu79+++ndn7/cX3/8+uXzJ9AEyR1G4sSWInY4pa2IolgD1fHbawF1vgAxiBMKVKBbs3bUp3M+3E8vketqWNMsTaub+lLwi3OelFkq8xY3WuxRJkTHoRWwMp3T3KOmgSx3qucLP0nma4sGXeefQIAKBt5iMzp6uzJj1dKZyLkRzyrkwn0nYpFgyM6J4qVLwjlf5JPedJJRpxpthwfL7fdifIqy6WDOWFVsmG7kWiiNcB/r2mOdLUAn7KNvkwWJKRrbCE2hI4842eqUfTQMrq1tGxciNm0uXaHdDjkTb+H6cyJYs1DWl2ZQbWG8IULOryaC213vopUrXs5H19TRpPfs6ftMJc+7DN/dVktZf4YY3VfDs2T/Ke0T8dqB3K35DcbzsvmXge06J2fKdMcVCkW0Ypx5XnEYW0NJ7wo47c2P/e1o5wyWxJivwe32oQmKBLIwJylQAU09CJqA5GXtZzML8+9k0rXI7EdPZSeQMu3rjKxwiiiDaQFUXmrLHYUTFP7plk3ywoA0BioQdwu7s6wNX2lFsWSQvYwc0OrH1AVw+xtKVmgdjgcAAA=="
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
