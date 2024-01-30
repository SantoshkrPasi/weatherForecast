const baseUrl = `https://api.weatherapi.com/v1/current.json?key=28c58896f8ff4971be740600241001`;

export const getWeatherDataForCity = async (city) => {
  try {
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
      return await response.json();
  } catch (error) {
    console.error("Error in getWeatherDataForCity:", error.message);

    throw error;
  }
};

export const getWeatherDataForLocation = async (lat ,lon) => {
  try {
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
      return await response.json();
  } catch (error) {
    console.error("Error in getWeatherDataForCity:", error.message);

    throw error;
  }
};
