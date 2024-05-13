# My First Express App

Directory Structure:
my_first_express_app/
│
├── public/
│ ├── about.html
│ └── contact_us.html
│ └── error.html
│ └── index.html
│
├── person.json
│
├── app.js
│
├── package.json
│
└── README.md

This is a simple Express web application that serves static HTML files and displays dynamic content from a JSON file.

## Project Structure

- `public/`: Contains static HTML files.
  - `about.html`: About page.
  - `contact_us.html`: Contact us page.
- `app.js`: Express server file.
- `person.json`: JSON file describing a person.
- `README.md`: Project documentation.

## Setup Instructions

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`.
4. Start the server: `npm start`.

## Routes

- `/`: Displays "Welcome" message and name of the person from `person.json`.
- `/about.html`: Displays the about page.
- `/contact_us.html`: Displays the contact us page.
- Unknown paths display the `error page`

## Dependencies

- Express: `npm install express`

## Development Dependencies

- Nodemon: `npm install --save-dev nodemon`
