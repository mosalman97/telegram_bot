import * as TelegramBot from 'node-telegram-bot-api';
import { getMainMenuKeyboard } from '../utils/telegramUtils';

export const getCurrentDate = (chatId: number, bot: TelegramBot) => {
    const currentDate: string = new Date().toLocaleDateString();
    bot.sendMessage(chatId, `Current Date: ${currentDate}`, getMainMenuKeyboard());
  };
  