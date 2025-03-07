
function celciusToFahrenheit(celcius) {
  let fehrenheit = (celcius * 1.8) + 32;
    return fehrenheit;
}

console.log(celciusToFahrenheit(10));



function fahrenheitToCelcius(fahrenheit) {
    let celcius = (fahrenheit - 32) * 5/9;
      return celcius;
  }
  
  console.log(fahrenheitToCelcius(10));