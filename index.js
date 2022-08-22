const VkBot = require('node-vk-bot-api');
const { TOKEN, GROUP_ID } = require('./secret');
const { botName } = require('./config');

const bot = new VkBot({
    token: TOKEN,
    group_id: GROUP_ID,
  })

  bot.on((ctx) => {
    //console.log(ctx);
    const { message } = ctx;
    const regBotName = new RegExp(botName, 'i');
    if (!regBotName.test(message.text)){
        return;
    }
    
  })

bot.startPolling()