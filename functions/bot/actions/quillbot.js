const axios = require('axios');

module.exports = async ctx => {
    try {
        const QUILLBOT_API_BASEURL = `https://quillbot.com/api/paraphraser/single-paraphrase/2?text=${encodeURI(ctx.update.message.text)}&strength=2&autoflip=false&wikify=false&fthresh=-1&inputLang=en&quoteIndex=-1`
        const response = await axios(QUILLBOT_API_BASEURL)
        return ctx.reply(`got it: url - ${QUILLBOT_API_BASEURL}`)
    } catch (error) {
        return ctx.reply(`something went wrong: ${error.message}`)
    }
}