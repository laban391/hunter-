import fs from 'fs';
import chalk from 'chalk';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname } from 'path';
import moment from "moment-timezone";

//——————————[ Config Owner ]——————————//
global.ownernumber = '6283177843144'
global.lidownernumber = null;
global.ownername = 'PouCode'

//——————————[ Config Bot ]——————————//
global.namabot = "Osiris WaBot"
global.nomorbot = '6283131354890'
global.pair = "POUWABOT"
global.version = '1.0.0'
global.botMode = true
global.autojoingc = false
global.anticall = false
global.autoreadsw = false
global.autoread = false

//——————————[ Config Sosmed ]——————————//
global.web = "t.me/PouSkibudi"
global.linkSaluran = "https://whatsapp.com/channel/0029VbCZ37w9MF92NBQnfU3G"
global.idSaluran = "120363424944937940@newsletter"
global.nameSaluran = "0X8 - Society."

//——————————[ Config Wm ]——————————//
global.packname = `By: PouCode
Sewa Bot? Chat: ${ownernumber}`
global.author = `PouCode`
global.foother = '© PouCode'

//——————————[ Config Payment ]——————————//
//Note : Kalau gada isi aja jadi false
global.dana = "083177843144"
global.ovo = false
global.gopay = false
global.qris = false
global.an = {
    dana: "DESI NURXX",
    ovo: "*_*",
    gopay: "*_*"
}

//——————————[ Config Media ]——————————//
global.img = "_"
global.thumbxm = "_"
global.thumbbc = "_"
global.thumb = "_"

//——————————[ Config Broadcast ]——————————//
// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 3500
global.delayPushkontak = 5000
global.namakontak = "AutoSave Osiris WaBot"

//——————————[ Config Message ]——————————//
global.mess = {
  success: 'Berhasil.',
  wait: 'Tunggu Sebentar...',
  admin: 'Bot Bukan Admin Group.',
  botAdmin: 'Bot Belum Menjadi Admin Group.',
  creator: 'Fitur Ini Khusus Owner.',
  group: 'Pakai Fitur Ini Di Group.',
  private: 'Pakai Fitur Ini Di Chat Pribadi.',
  error: 'Fitur Nya Error Anjay.',
  limit: 'Limit Lu Abis Njir.',
}


// *** message *** 
global.closeMsgInterval = 30; // 30 menit. maksimal 60 menit, minimal 1 menit
global.backMsgInterval = 2; // 2 jam. maksimal 24 jam, minimal 1 jam


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let file = __filename;
fs.watchFile(file, async () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${file}`));
    try {
        const module = await import(`${file}?update=${Date.now()}`); 
    } catch (err) {
        console.error(err);
    }
});