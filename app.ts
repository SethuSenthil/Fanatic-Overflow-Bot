//deno run --allow-env --allow-write --allow-read  --allow-run --allow-net app.ts
import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import "https://deno.land/std@0.192.0/dotenv/load.ts";
import { TelegramBot } from "https://raw.githubusercontent.com/michael-spengler/telegram_chatbot/master/mod.ts";
import { cron } from "https://deno.land/x/deno_cron@v1.0.0/cron.ts";

console.log("Started StackOverflow Login Bot");

const login = async () => {
  console.log("Trying to login again...");
  //get bot credentials
  const bot = new TelegramBot(Deno.env.get("TELEGRAM_BOT_TOKEN")!);
  const chatID: string = Deno.env.get("TELEGRAM_CHAT_ID")!;

  try {
    //open browser
    const browser = await puppeteer.launch({
      headless: true,
    });

    //open new page / tab
    const page = await browser.newPage();

    //navigate to login page
    await page.goto("https://stackoverflow.com/users/login");

    //type in email
    await page.type("#email", Deno.env.get("EMAIL")!);

    //type in password
    await page.type("#password", Deno.env.get("PASSWORD")!);

    //click enter
    await page.keyboard.press("Enter");

    //wait for page to load
    await page.waitForNavigation();

    const imageData = await page.screenshot({ path: "screenshot.png" });

    await browser.close();

    //send message
    await bot.sendMessage({
      chat_id: chatID,
      text: `Logged into StackOverflow successfully`,
    });

    //send screenshot
    await bot.sendDocument({
      chat_id: chatID,
      document: new File([imageData], "screenshot.png"),
    });
  } catch (e) {
    await bot.sendMessage({
      chat_id: chatID,
      text: `Error logging into StackOverflow! ${e}`,
    });
  }
};

login();

// Run Job in every 12 hrs
cron("*/12 * * * *", login);
