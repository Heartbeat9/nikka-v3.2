//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349124252744";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlXYSt6Z2pUa3JMQmEvUkdtNmttajZZQ25aaGdiS05BWVlnR2ZuaDRYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVC94NUVPOWxMV1g5NFJ0cVJiTDVhZjRya2xLbmlxUVZSV2NmM2g3cjhnWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0UDQzVm5XUERLOXBZMThZeXpxWitNN0tHOUNQeDI3TzlRbGhBNWg2dVU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxT2tROG02KzRBUmdJQzlxNFdlWlRkWmRhWFladzlNdmJlMUZZdDVhcnlVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBQdUVtdmRmMXRmNUh0NmpnK240NVEzOFIxblptemlIeUVSSnZweXJmVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFDSTV6MjlDeWJTWTJSYnVxZjZKL045aXNYM1M1RVVCd21EWVVGNjhTVkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BXSndmem5EdlBmNlVxYWZIYmhmLzlFMTh0SlZ3Yy9hL3A3TDN4dElIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSG43eXU4SjducUNZYmNJeHVSOWRMdnNGQkRuaXo3a3RkWTYwejdHZDh5UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImMzQlpqS0lBeEFNY3UvRVNaelR5NWZwc1cybjVlYXNMSzdleVRVbldCWWx4R0gwRGRDYnA1enA2ZFpYalpIZ3RNL1RMRlpRRmpNL2VkenFpbnRlbWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6InUvalNVVkhZRGppOEN6b2w2TTZHRWltQlUyTFFDUno4NnZSdkRUN1dIU0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imc2QVZuS2tHU2JpTFBtMUpBTkdwdXciLCJwaG9uZUlkIjoiZmQ4MjUzMGMtNjM2Yy00ZDcwLTllNTYtYjUxZTAzMTgxNjVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlErTXhpZjhMeC9qQkZrbmRuWEpJbXhHWjZqYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIc1Y0NCt1blIxVmQ3VjZwOFV0Q2FQZlZQenc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjNERkhXNFgiLCJtZSI6eyJpZCI6IjIzNDkxMjQyNTI3NDQ6NDJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05TcCtiRUVFSWZYaGJ3R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlV3ckhIYXpNRGZDRlEvUmFKakMxayttV0ROK0dmc1R4akwvN21YOVE5QTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imt4VXlxVmZjMmxIRXJyWHRaVEJpOW5iWVFpQUNQUVFxZ0ZaaVdyWGtVdEVUVER5bUNNcDFLVC82TVNRNkIvcEtKSDNsek5ZdXRtMFV2eVg5RTF0eEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2UllZcWxJak9ZMFNyMUUxd2UycVBRd1BsY3dTRGk0VHdDN3A0MU5WYjRKdDZTTVJCakUyOXhNZUltd1NlM3ZaUmpoVTk2eGhhbExEeXUrZjk0NnBoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMjQyNTI3NDQ6NDJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVk1LeHgyc3pBM3doVVAwV2lZd3RaUHBsZ3pmaG43RThZeS8rNWwvVVBRTiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjUzNDkzMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFK1IifQ===" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
