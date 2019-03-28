# Address Query by ZipCode (Consulta de Endereço)

Challenge for a FrontEnd position

## Getting Started

This project was used as a way to evaluate the candidates' knowledge for the FrontEnd position @LuizaLabs

### Installing

Follow the next steps to have the development env running

1. Clone this repo from github: `https://github.com/mmendesas/ch_lulabs.git`
2. Install the dependencies: `yarn` or `npm install`
3. Run the project: `yarn start` or `npm start`
4. Access the `http://localhost:3000` to see the result

To see a working live sample, access: [ch_lulabs website](https://mmendesas.github.io/ch_lulabs/)

## Running the tests

#### Unit Tests

- From the **root** folder, run this command: `yarn test` or `npm test`

#### E2E Tests

- We decided to use the [**walnutjs**](https://github.com/mmendesas/walnutjs) framework to write the end-to-end tests, the following steps will help you run those tests:

1. Using the web interactions (easily to see what happens during execution)
   - Before execution, you need to intall `protractor` and start `webdriver-manager`:
   ```sh
    npm install -g protractor
    webdriver-manager update
    webdriver-manager start
   ```
   - Run the tests
   ```sh
     yarn run test:e2e
   ```
2. It's possible to run this using a **dockerized** structure:
   - See [this docs](https://github.com/andresakai/docker-protractor) to see more details

## Deployment

To deploy this on a live system you can run this command `yarn run deploy` or following the options in this [Deployment Doc](https://facebook.github.io/create-react-app/docs/deployment)

## Built With

- [React](https://reactjs.org/) - Javascript Library for building user interfaces
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
- [Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial) - lets you customize maps with your own content and imagery
- [React Testing Library](https://github.com/kentcdodds/react-testing-library) - React DOM testing utilities
- [Walnutjs](https://github.com/mmendesas/walnutjs) - End-to-end test framework in BDD style

## Authors

- **Marcio Mendes** - _Initial work_ - [mmendesas](https://github.com/mmendesas)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Tips and Tricks

- After entering and search for a zip code (CEP), try clicking on the map marker to see details
- Use Ctrl + Scroll to control the zoom within the map view

### Resources used during this challenge

- [Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial) - lets you customize maps with your own content and imagery
- [Google Maps React](https://www.npmjs.com/package/google-maps-react) - render any React component on the Google Map.
- [Deployment Doc](https://github.com/mmendesas/ch_lulabs) - Deployment Create React App
- [React Testing Library](https://github.com/kentcdodds/react-testing-library) - React DOM testing utilities
