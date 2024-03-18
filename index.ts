import * as telegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';
import express from 'express';
dotenv.config();
import { getCurrentDate } from './src/controllers/dateController';
import { getCurrentTime } from './src/controllers/timeController';
import { getWeather } from './src/controllers/weatherController';
import { getMainMenuKeyboard } from "./src/utils/telegramUtils";

const BOT_TOKEN: string = process.env.BOT_TOKEN || '';

// Create a bot that uses 'polling' to fetch new updates
const bot = new telegramBot.default(BOT_TOKEN, { polling: true });

// express
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Command to start the bot and show the main menu
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  // Reply with a welcome message and the main menu
  bot.sendMessage(chatId, `Welcome to SLBOT! Select an option:`, getMainMenuKeyboard());
});

// Command to get the current time
bot.onText(/Time/, (msg) => {
  getCurrentTime(msg.chat.id, bot);
});

// Handle button clicks
bot.on('callback_query', (callbackQuery: any) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;
  switch (data) {
    case 'time':
      getCurrentTime(chatId, bot);
      break;
    case 'date':
      getCurrentDate(chatId, bot);
      break;
    case 'weather':
      getWeather(chatId, bot);
      break;
    case 'main_menu':
      bot.sendMessage(chatId, `Welcome to SLBOT! Select an option:`, getMainMenuKeyboard());
      break;
  }
});
