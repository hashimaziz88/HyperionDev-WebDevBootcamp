
// unit test for API call
//This example uses the Jest testing framework with the expect function to test the API call.

async function fetchData() {
  try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      return response.status;
    } catch (error) {
      throw error;
    }
}

test('Poki API status check', async () => {
  const data = await fetchData();
  expect(data).toBe(200);
});
  