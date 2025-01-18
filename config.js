const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5WV2Y6rRhCG36Vv7XNsdrA00gGMd7yCtygXDTS4x2xums1HlnKb27xA8mx5gjxChD2jGeksmXDVYvnrr6qviq8gTnCGpqgGva8gJbiAFDVHWqcI9ICW+z4ioA08SCHogcB0h7Pnreh0J5HLLygi8/pQMic+MLcGYp7tbjU/Tjx+s0uewK0N0twJsfszQa8z2Mumuaml3XC7nXfGhSCceCtUC6I9r2ZxJQpznDpL5vAEbo0ixATHgZGeUIQIDKeoXkJMPmYfqhTHx4mN9WNXqc+U0pY7niRe1pIUa18vMcMvMmXOKmf7Y/YP+LnsT+dLlCgTGUadQSBetvW6tRqZZVHMhetoMfHgRjS01cN+hoMYeWMPxRTT+sN1Zw1pitVxJW364lxe2nP5bK5dx4lG/Y4QrnJ7cxqVmtLxQ/ljxqe6P9HiWNrhbUEufLiaICNNxUkuqHbAx7nln5bRKVMd1nhvfEleWTn/r7qPIlE9V0MPcmzgXJ2YqrnK7orTaV6MlrF1PF5E61BpUyP4mP25qfVzao5IZ1TFG3Y12E+Wi6MlSmvGFM2i6ozt1WJxlWdq9mYf0pz8zGXil2XhKRfscGa3o3NRtSBoB+n6dMUdsh5S3+MGexl1o8piDvYg9LbBtX+Rmdk+LIjqTi7P+OgIsJrVmsqtR2S3PPbLp3tGZ1SPPdBjbm1AUIAzSiDFSXy/xyhtAL1ig1yC6L28gLWK6yGB6y5XR6m2nNV7NRjVXssYHFhusOC5nNSaPqbSxXgCbZCSxEVZhrwRzmhCahNlGQxQBnq/3DvVJE1QlFA0wV4jL/CSwMi8JCnSl+xzeYI0g2n6OUYUtIFPkshEoEdJjtrg/oGoDERF5ARRFHhV1kXRkFjWkFTW6LKCoWpNitEjqIUjlFEYpaDHSJzEKIrEs7df2yBGFX3w02TNMW3gY5JRO87TMIHeK1yvD6HrJnlMN3Xs6s0BEdB7dxtRiuMgazLLY0jcEy6Q3uQBej4MM3RrAw8V2EWNHtgso93MdnyrjlbxriqYjJOcsqncKYkfr8iMIzi80/3EKY7ziecZ5ZMsssInn5U9RuJ9wfcZ0JTjMbrNNz8kKbdsUpScUM5LrR4l3Ersl2tpWOyzw52GBwKIIO+1yg50z3lqJWcU/0y3jEvHh+yhUM4jGcFhywuHeGatD+91H2iB3te3daknXqM3HRrcRNzuQdOtJs43NPTYb3mIYfMy+PL373/1EfSCnOT//PnHb03Al240Uh6iEIcZ6AHdjJzMtPvGgg0IKYdDdRyoeqCCt+69TuOD9iq7zsoNN7ZN39umMPY6wlk4Ze40INpRqlad83yfd/xswq2eviMCesBzC3Kc1mXxfEjGaZpl9lzyt2NcTrOVPr20pGm8y5XFXlnseaJ6Hf5Mq4U57cLVYGuKEsNr3U1Cy+HJojvd43eXsC/3g6cm2oOi98Fm51C9nlv9ESMs8yhLr4IVaLJjRuz+2O+snyvCWRxZ5q5AbOfqdpiJps4nU0GfnZJLyx4cp5ZEizrY24dxptvP53VA7sFe91T48n/ALxP8YM7H6L5uX9rxX117o797a7+TeNnfPyBMcx2zlg1aD/ojbgt3Kee3jouDM9KTablDsr0U+lup4CTd64JbM9ZpCKmfkKhZ87FHEuyBNghhRtW3Af7OTuDkNohqNU03FNLXuQdqcw2YBbj9C1jG616aCAAA',
    PREFIXE: process.env.PREFIX || ",",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "0751847797",              
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

