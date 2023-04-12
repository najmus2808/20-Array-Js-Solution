// Problem-12: A weather app needs to format a list of temperatures Celsius and Fahrenheit display.

const temperatures = [12, 25, 8, 19, 3];
const formattedTemperatures = temperatures.map((temperature) => {
  const fahrenheit = temperature * 1.8 + 32;
  return `${temperature}°C (${fahrenheit}°F)`;
});

console.log(formattedTemperatures);
