export const getMainMenuKeyboard = () => {
    return {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Time', callback_data: 'time' }, { text: 'Date', callback_data: 'date' }],
          [{ text: 'Weather', callback_data: 'weather' }],
          [{ text: 'Main Menu', callback_data: 'main_menu' }],
        ],
      },
    };
  };