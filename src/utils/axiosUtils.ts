import axios from 'axios';

export const getWeatherInfo = async (city: string): Promise<string> => {
    const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`;
    try {
        const response = await axios.get(weatherAPIURL);
        return response.data.weather[0].description;
    } catch (error) {
        throw error;
    }
};