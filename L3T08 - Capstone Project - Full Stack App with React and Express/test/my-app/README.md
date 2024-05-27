### Frontend React Application

This React application is designed to search and display media content from the iTunes API. It allows users to search for various types of media, view search results, and mark items as favorites. Below are the main components and features of the application:

### Components

#### `SearchBar`

- Renders a search input field and a dropdown menu to select media type.
- Validates the search term and triggers search requests.

#### `ResultsList`

- Displays a list of search results with details such as title, artist name, release date, and media type.
- Provides a button to toggle favorite status for each item.

#### `FavouritesList`

- Renders a list of favorite items with details and a remove button.
- Displays the image, title, artist name, release date, and media type for each favorite item.

#### `App`

- Main component that orchestrates the layout and functionality of the application.
- Manages state for search results, favorites, and authentication token.
- Implements functions to handle search requests, favorite toggling, and clearing search results.

### Features

- **Search Media**: Users can enter a search term and select a media type to search for content from the iTunes API.
- **View Results**: Search results are displayed with details and an option to mark items as favorites.
- **Manage Favorites**: Users can add items to favorites and remove them from the favorites list.
- **Authentication**: Generates a JWT token for authentication with the backend server.

### Testing

- Unit tests are provided for the `SearchBar`, `ResultsList`, and `FavouritesList` components using the `@testing-library/react` framework.

### Getting Started

1. **Install Dependencies**: Run `npm install` to install required dependencies.
2. **Run the Application**: Start the frontend server by running `npm start`.
3. **Backend Integration**: Ensure the backend server is running and accessible for API requests.

### Author

Hashim Aziz Muhammad
For more information or inquiries, contact hashimazizm@gmail.com.
