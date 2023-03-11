/**
 * It's a open source software.
 * It's under MIT License as published.
 * You can modify and/or redistribute the code.
 * 
 * Copyright (C) 2023 Jenxieny Alviana Christin Olivia
 * Github: https://github.com/jnxnyanna
 * Telegram: https://t.me/jnxnyanna
 */

// Base API URL for OpenAI.
// Change the admin id with your telegramid.
// You can get it from @userinfobot.
// You can add more than 1 id.
// Example: ["1234567890", "5577901126"];
const BASE_URL = "https://api.openai.com/v1/completions";
const ADMIN_LIST = ["2007335599"]; // Change this with your telegram id

// Defined the property in  Settings > Script Properties.
// Add properties with name "bot_token" & "api_key_openai".
// Get your "bot_token" from t.me/BotFather.
// Get your "api_key_openai" from https://beta.openai.com/account/api-keys.
// https://developers.google.com/apps-script/reference/properties?hl=en
const properties = PropertiesService.getScriptProperties();
const BOT_TOKEN = properties.getProperty("BOT_TOKEN");
const API_KEY = properties.getProperty("API_KEY");

// Replace <YOUR_APP_URL> with the URL of your deployed app.
// Go to Apply > New deployments > Choose a type > Web application
// Enter with this detail
// Version: New version
// Description: Your description (optional)
// Under the web application
// Run as: Me (yourname@gmail.com)
// Who has access: Anyone
const APP_URL = "<YOUR_APP_URL>";

// Init the project.
// Define variable bot with lumpia.
// Define variable client with bot.telegram or bot.tg.
const bot = new lumpia.init(BOT_TOKEN);

function doPost(e) {
    // Only POST data will be processed.
    // Bot will be processing this POST data.
    bot.doPost(e);
}

function setWebhook() {
    // Set webhook for the bot.
    // If the bot receive for new updates, the data will be processed at doPost() function.
    var result = bot.telegram.setWebhook(APP_URL);
    console.log(result);
}

// Ask openai
// Need to pass message text
function askOpenAi(message) {
    var options = {
        "method": "POST",
        "headers": {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json"
        },
        "payload": JSON.stringify({
            model: "text-davinci-003",
            prompt: message,
            max_tokens: 500,
            temperature: 0.7,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        })
    }

    // Send request to openai
    var result = JSON.parse(UrlFetchApp.fetch(BASE_URL, options).getContentText());
    return result.choices[0].text;
}

// Let the bot to hear all messages.
bot.on("message", async (ctx) => {
    const text = ctx.message.text;

    // Only text are allowed.
    // Check if the user send another message types, like photo, document or etc.
    // Delete the message if the message types is not a text.
    if (!text) return ctx.deleteMessage();

    // Let the bot to send action with typing.
    // Use ctx.replyWithChatAction("typing");
    ctx.replyWithChatAction("typing");

    // Start command.
    // This command will be executed first.
    // Don't ask this text to OpenAI, so put return on the end of block.
    if (/^\/start/i.exec(text)) return ctx.replyIt("👋 Hi! I am a bot integrated with OpenAI. You can ask any question and I will answer your question.\n\nPlease note that I only accepts text, not others such as photos/videos. I can only reply with a maximum of <b>500 words</b>.", {
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "🌈 Owner", url: "https://t.me/jnxnyanna" },
                    { text: "🔗 Source code", url: "https://github.com/jnxnyanna/zhenni-openai-chatbot" }
                ]
            ]
        }
    });

    // Try ask to openai
    try {
        // Ask to OpenAI.
        // Reply the answer to user
        var answer = await askOpenAi(text);
        ctx.replyIt(answer);
    } catch (e) {
        // If openai returned an error, send this error to admin
        // Don't forget to reply the users with error message
        ctx.replyIt("Sorry, but I can't process your request right now. :(");
        for (var i in ADMIN_LIST) {
            bot.telegram.sendMessage(ADMIN_LIST[i], "Error: " + e.message);
        }
    }
});