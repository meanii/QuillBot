const { Telegraf } = require('telegraf');
const quillbot = require('./actions/quillbot');
const startAction = require('./actions/start')

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start(ctx => {
  return startAction(ctx)
})

bot.on('text', (ctx) => {
  return quillbot(ctx);
})

exports.handler = async event => {
  try {
    await bot.handleUpdate(JSON.parse(event.body));
    return { statusCode: 200, body: '' };
  } catch (e) {
    console.log(e)
    return { statusCode: 400, body: 'This endpoint is meant for bot and telegram communication' };
  }
}