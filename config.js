const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV25KqOBT9l7xqD6BcxKquGuXilW5UUHRqHgIETQMBk6DiKf99Cj093TVzzpkenlKBrKy99lqbb4AUmKEZqkH/GygpPkGOmiWvSwT6YFglCaKgDWLIIeiDemid5Sj3X6k9jHngXLW6NR46+/08ME/TFzxP4RUWHWssps/g1gZlFWY4+gWgnpQt9SSW9tFZlrVVOcwLo5qvT9kmtLTFKlv0TEWB6pJsn8GtQYSYYrK3ygPKEYXZDNUuxPRr9DuDSF8IctI5BbaKz+GLcXaE1Ex7g4TMJ74yPC99/tJLob34Gn2Jh0FQDCPbPRpmwpeeTZMsRq3D1FC6RouRWRSQHWbbrvygz/CeoHgSI8Ixr7+su/y6Se0ttpXJrLaopvstf3Pir+Or4C/3nYj1VEcdD4RtZUdfIx4jeV3tfOmqHsYOP1uBOEPIouNVsJfja/eqmevwJfD14i36TNyl715J/4/u6uBQDMX55hwVTm0sZEN1u5RoXfQmLluBFdo0MKV1r9ikztfok9FaFqY918lO3cv66L7SWpB3jp23NBKNwlZlxyJO7cBeFR/0Ia/or1ju1tNN71zJqV4PlmxE3hDV49qWr63a6RimRFdHVmLxOhVzl0yqJXavZeGY2HlNieOIKO8p3eBqdQ4TYcWq88ENWslw/3yvKEX1JAZ96dYGFO0x4xRyXJD7XkdrAxifViiiiN/lBTU6O7Vfh3qxUVwh0eDBihaF10FFF5uCkG3MrNhGM6UynGfQBiUtIsQYiseY8YLWDmIM7hED/T/unWqKpigvOJriuMmBImuK1JM1Tdd+Z7+dD5AzWJa/EcRBGyS0yB0E+pxWqA3uB1RdFjuW0lGlodaxdVPUTN3SRVGWuz2xY1tNifnjUg/niHGYl6AvabKo6JKmqrc/24CgC3/4p6laldogwZRxn1RlVsD43VzvL2EUFRXhq5pERrNAFPTFj23EOSZ71lRWEUijAz4ho6kD9BOYMXRrgxidcIQaPPBEvYNuoOlCViXd39UoRulx0Ch3KMjjEyhDpMuS/tRDnehJVqD6FKqq/hQjSY3kCIah1AONHI/oNmd+6iQTe5Ndy32jiXMdxgPZ8DLbk419vGJ3NzwsgCiK31UOYZRWpVekiPwCF7r+SDAJmY6SQ+DmE8+CqX3JRy/yZ9yHtUD/28e4NIq4wZNWxlCd2SvQdKu5519u6Cv/9MPtb82bAzHiEGcM9IHh5CFzfNOawEwIxdFo4O8Hxr4R9b1H75l7ePrCrvPzqjvxnSRel5DEgpIqBxbN9nS40y4LIX0JKiFh0+7i+QcgzRSk2tYzBoo5UuOLIdQ5T47L8qjHbGgHpw0cJbpJI+dIClOL58rQGZfaoXJL6Pd26kyS0jdzpJphTSLvmo3Ks+WpG3Px3Nz28Mrny4beRqGdOW5V5ciYeWigzyt5b4SbdbaDx6Opm5c5r3y3w8KZd74uhdbpbUFe5zBO6Wiu1BUj8WWLeaIyDS4Hs2xVioPzYxrcp1H2/S+Av+f04awEo/tQJbDp0H/05rPHxVv7E8T3Kf0THw2j0Kl7Fq9tc9xdw03ZTVq71204NorZeYN6vquYa+3U1YxYBLcmvGUGeVLQvDEhiWmBY9AGGWR88BHTHyVfboO8HpTlikP+nm4waB5bcsHtL0dmvb2ACAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

