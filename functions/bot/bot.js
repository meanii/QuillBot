const { Telegraf } = require('telegraf');
const startAction = require('./actions/start')

const bot = new Telegraf(`5182555915:AAFTW8D9nuvl3SobKWY6KY4tDZjfAbzXrOw`);

bot.start(ctx => {
  return startAction(ctx)
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