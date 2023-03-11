const token = "bot token kmu disini";
const bot = new lumpia.init(token);

function doPost(e) {
    bot.doPost(e);
}

function setWebhook() {
    var url = "url web app kmu disini";
    var result = bot.telegram.setWebhook(url);
    console.log(result);
}

bot.on("message", (ctx) => {
    ctx.replyIt("Halo " + ctx.from.first_name + "!");
});