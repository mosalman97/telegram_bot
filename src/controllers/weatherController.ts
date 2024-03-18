import * as TelegramBot from 'node-telegram-bot-api';
import { getMainMenuKeyboard } from '../utils/telegramUtils';
import { getWeatherInfo } from '../utils/axiosUtils';

export const getWeather = (chatId: number, bot: TelegramBot) => {
  bot.sendMessage(chatId, 'Enter City Name')
  bot.once('text', async (msg: any) => {
    try {
      const city = msg.text.trim();
      const currentWeather = await getWeatherInfo(city);
      bot.sendMessage(chatId, `Current Weather in ${city}: ${currentWeather}`, getMainMenuKeyboard());
    } catch (error) {
      console.error('Error fetching weather:', error);
      bot.sendMessage(chatId, 'Error fetching weather information. Please try again later.');
    }
  });
};