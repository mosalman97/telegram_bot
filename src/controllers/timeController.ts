import * as TelegramBot from 'node-telegram-bot-api';
import { getMainMenuKeyboard } from '../utils/telegramUtils';

export const getCurrentTime = (chatId: number, bot: TelegramBot) => {
  const currentTime: string = new Date().toLocaleTimeString();
  bot.sendMessage(chatId, `Current Time: ${currentTime}`, getMainMenuKeyboard());
};
