# Fanatic Overflow Bot

Easily get the Fanatic gold badge in Stack Overflow

<img src="logo.webp">

## Run
`deno run --allow-env --allow-write --allow-read  --allow-run --allow-net app.ts`

Install Deno Runtime: https://deno.com/manual@v1.34.3/getting_started/installation

Create a .env file in the projects directory with the following
```.env
EMAIL="UR EMAIL"
PASSWORD="UR STACKOVERFLOW PASS"
TELEGRAM_BOT_TOKEN="UR TELEGRAM BOT TOKEN"
TELEGRAM_CHAT_ID="UR TELEGRAM CHAT BOT"
```

- To create a Telegram bot text to bot father: https://t.me/botfather
- To get your chat id easily, add the `chat id` bot to your chat : https://t.me/myidbot

## What is the Fanatic Badge?

The Fanatic badge is a gold badge awarded to users who visit the site for 100 consecutive days. This badge is a sign of dedication and commitment to the Stack Overflow community.

## How does the Fanatic Overflow Bot work?

The Fanatic Overflow Bot is a Deno script that automates the process of visiting Stack Overflow 12 hours (just to be safe). The script uses the Puppeteer library to open a new Chrome browser window and navigate to the Stack Overflow website and logs you in. This process is repeated twice a day for 100 days, allowing the user to earn the Fanatic badge without having to manually visit the website every day.

In addition, the script also sends you a message about the status of the login with a screenshot in Telegram through a Telegram bot. This feature can be enabled by providing the necessary credentials in the .env file.

## How to use the Fanatic Overflow Bot?

To use the Fanatic Overflow Bot, you need to have Deno runtime installed on your computer. The script will automatically open a new Chrome browser window and start visiting Stack Overflow every day.

## Disclaimer

Please note that the use of bots to automate the process of earning badges on Stack Overflow is against the site's terms of service. I do not encourage or condone the use of this script for any illegal or unethical purposes. Use this script at your own risk.
## How to use the Fanatic Overflow Bot?

To use the Fanatic Overflow Bot, you need to have Deno runtime installed on your computer. The script will automatically open a new Chrome browser window and start visiting Stack Overflow every day.

## Disclaimer

Please note that the use of bots to automate the process of earning badges on Stack Overflow is against the site's terms of service.  Ido not encourage or condone the use of this script for any illegal or unethical purposes. Use this script at your own risk.