function calculateBill() {
  let waterUsage = parseInt(document.getElementById("waterUsage").value);

  let tariff = 0;

  // Calculate tariff based on water usage
  if (waterUsage <= 6000) {
    tariff = waterUsage * (15.73 / 1000); // R15.73 per kilolitre
  } else if (waterUsage <= 10500) {
    tariff = 6000 * (15.73 / 1000) + (waterUsage - 6000) * (22.38 / 1000); // R15.73 per kilolitre for the first 6000 litres, R22.38 per kilolitre for the rest
  } else if (waterUsage <= 35000) {
    tariff =
      6000 * (15.73 / 1000) +
      4500 * (22.38 / 1000) +
      (waterUsage - 10500) * (31.77 / 1000); // R15.73 per kilolitre for the first 6000 litres, R22.38 per kilolitre for the next 4500 litres, R31.77 per kilolitre for the rest up to 35000 litres
  } else {
    tariff =
      6000 * (15.73 / 1000) +
      4500 * (22.38 / 1000) +
      (35000 - 10500) * (31.77 / 1000) +
      (waterUsage - 35000) * (69.76 / 1000); // R15.73 per kilolitre for the first 6000 litres, R22.38 per kilolitre for the next 4500 litres, R31.77 per kilolitre for the next 34000 litres, R69.76 per kilolitre for the rest
  }

  // Display the result
  document.getElementById(
    "result"
  ).textContent = `Your water bill is R${tariff.toFixed(2)}`;
}
