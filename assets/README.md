# 📚 Steps to deploy the bot
This page will show you how to deploy the bot in 13 simple steps.

## 1. Get bot token 💬
> Go to [@botfather](https://t.me/botfather) and ask him to create a new bot for you.
> * Send him `/newbot` and he will ask you the name & username for your bot.
<p align="center"><img src="/assets/new-bot.jpg"><i>Create a new bot.</i></p>


## 2. Create a new project 🛠️
> * Go to [apps script page](https://script.google.com).
> * Create a new project by clicking on `+ New project`.
<p align="center"><img src="/assets/start-1.png"><i>Create a new project.</i></p>


## 3. Adding lumpia library 📄
> * On the editor page > search menu `Libraries` > `+`.
> * Enter this library id: `1Yo6vQRwjG5Gl9jeEF0g2tBTUa0XN5MyT4G_HeDpRr9DvabxhRcSdhPNj`.
> * Click on `Look up`.
> * Always choose the version with the largest number.
<p align="center"><img src="/assets/start-2.png"><i>Adding lumpia library</i></p>

## 4. Setting up properties 🗃️
> * On the editor page > Go to `Project settings` or `⚙️`.
> * Scroll down and search for `Script Properties`.
> * Add key `BOT_TOKEN` & fill the value with your bot token.
> * Add new key `API_KEY` & fill the value with your openai api key.
> * When finished, click `Save script properties`.
<p align="center"><img src="/assets/start-4.png"><i>⚙️ Setting up properties.</i></p>

## 5. Deploying the bot. ⚡
### 1. New deployment.
> * Go back to the editor page
> * Click on `Deploy` > `New deployment`.
<p align="center"><img src="/assets/start-5.png"><i>New deployment.</i></p>

### 2. Deployment type.
> * Click on `⚙️` > Select `Web app`.
> * Configuration:
>> * Description: `Your description`.
>> * Execute as: `Me (you@gmail.com)`.
>> * Who has access: `Anyone`.
<p align="center"><img src="/assets/start-6.jpg"><i>Select deployment type.</i></p>

### 3. Authorize access.
<p align="center"><img src="/assets/start-7.png"><i>Click "Authorize access".</i></p>

### 4. Warning message.
> * You will see a warning message.
> * If you see that message, Click on `Advanced` > `Go to Untitled project (unsafe)`.
<p align="center"><img src="/assets/start-8.jpg"><i>Click on "Advanced".</i></p>
<p align="center"><img src="/assets/start-9.jpg"><i>"Go to Untitled project (unsafe)".</i></p>

### 5. Allowing the project.
> * On the next step you will see a new pop up message.
> * "*Untitled project wants to access your Google Account*".
> * Click on `Allow`.
> <p align="center"><img src="/assets/start-10.jpg"><i>Click on "Allow".</i></p>

### 6. Deployement complete.
> * On the next step you will see a new pop up message again.
> There is contain about your new deployement app.
> There is a `version`, `deploying date`, `deployement id` and the `url`.
> You only need the url. Copy the url by clicking on `Copy` & then click `Done`.
<p align="center"><img src="/assets/start-11.png"><i>Copy the web app url.</i></p>

### 7. Set webhook.
>   * Go back to the editor page > search code `const APP_URL = "<YOUR_APP_URL>";`.
>   * Change the `<YOUR_APP_URL>` with the url you've copied in the previous step.
>   <p align="center"><img src="/assets/start-12.png"><i>Run setWebhook();.</i></p>
>   
  

<p align="center"><img src="/assets/start-13.png"><i>Run setWebhook();.</i></p>

---

If you see those results, congratulations! Your bot is running successfully now! 🌈💕

## 💜 Test the bot.
> * You now can test your bot.
> * If all steps are correct, your bot will reply all message sent by you.
> * Go to your bot & click `Start`.
> * Send your bot any message and see the result.
<p align="center"><img src="/assets/start-14.jpg"></p>

---

- ♥️ Special thx to: [@botindonesia](https://t.me/botindonesia).
- 🔧 This bot using [lumpia.js.org](https://lumpia.js.org/) library.
- 🌈 Created by [@jnxnyanna](https://t.me/jnxnyanna).
- ❗ It is forbidden to sell this bot code.
- ✨ If you like, don't forget to give star to this repository.



>> Special thx ~ **Zhenni** 🖤











