
# Install
npm i node-telegram-bot-api




# Uso
```
process.env.NTBA_FIX_319 = 1;
const  TelegramBot  =  require ( 'node-telegram-bot-api' ) ;
const  token  =  'SEU-TOKEN-DO-BOT-TELEGRAM';
const bot = new TelegramBot( token, { polling: true } );
bot.onText(/\/start/, (msg) => {
bot.sendMessage(msg.chat.id, `Olá ${msg.chat.first_name} ${msg.chat.last_name}`)
    });
    //Mensagem de boas vindas;
```
