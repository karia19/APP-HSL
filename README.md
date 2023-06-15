# HSL Transit Map

This is a web application built with Next.js 13 that displays the real-time positions of buses, trams, and trains on a map using the HSL API. It also shows the locations of all HSL stations. Please note that real-time location tracking for certain vehicles is currently under development and will be available soon.

## Features

- Displays real-time positions of buses, trams, and trains on a map.
- Shows the locations of all HSL stations.
- Retrieves the user's geolocation from the browser and automatically zooms the map to that location.
- Built with Next.js 13, a popular JavaScript framework for building web applications.
- Utilizes the Mapbox GL library for interactive and customizable maps.
- Uses the GTFS Realtime Bindings library for parsing real-time data from the HSL API.

## Installation

To install and run the application locally, please follow these steps:

1. Clone the GitHub repository:
   ```shell
   git clone https://github.com/karia19/hsl-transit-map.git
   ```
2. Navigate to the project directory:
   ```shell
   cd hsl-transit-map
   ```
3. Install the dependencies:
   ```shell
   npm install
   ```
4. Set up environment variables:
   - Create a `.env.local` file in the project root directory.
   - Add the following environment variables to the file:
     ```
     NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=<your Mapbox access token>
     NEXT_PUBLIC_HSL_API_KEY=<your HSL API key>
     ```
   - Replace `<your Mapbox access token>` with your own Mapbox access token. You can create a Mapbox account and obtain an access token [here](https://www.mapbox.com/).
  
5. Start the development server:
   ```shell
   npm run dev
   ```
6. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

Once the application is running, you will see a map displaying the real-time positions of buses, trams, and trains. The HSL stations will also be marked on the map. If the browser supports geolocation, the map will automatically zoom to your current location.

## Contributing

Contributions to this project are welcome! If you find any issues or have ideas for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
