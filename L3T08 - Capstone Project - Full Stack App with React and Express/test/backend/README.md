### Backend Setup Instructions

Follow these steps to set up and run the backend server for the project:

1. **Install Dependencies**: Run the following command to install the required dependencies:

   ```
   npm install
   ```

2. **Start the Server**: After installing dependencies, start the server by running:

   ```
   npm start
   ```

3. **Environment Variables**: Ensure you have a `.env` file in the root directory of the backend with the following content:

   ```dotenv
   PORT=5000
   SECRET=your_jwt_secret
   ```

   Replace `your_jwt_secret` with your own secret key for JWT token generation.

4. **Usage**:
   - The backend server will be running at `http://localhost:5000`.
   - Use the provided API endpoints for token generation and iTunes search.
   - Refer to the API documentation or code comments for details on how to use each endpoint.

### API Endpoints

- **Token Generation**:

  - Endpoint: `POST /api/token`
  - Description: Generates a JWT token for authentication.
  - Payload: None required.
  - Response: Returns a JSON object with the generated token.

- **iTunes Search**:
  - Endpoint: `GET /api/search`
  - Description: Searches iTunes API based on provided query parameters.
  - Query Parameters:
    - `term`: Search term (required)
    - `media`: Media type to search for (required)
  - Response: Returns search results from the iTunes API.

### Notes

- Ensure the backend server is running before making any requests to the API endpoints.
- Modify the `.env` file as needed, especially the `SECRET` key for JWT token generation.
