# Request Header Parser Microservice

This microservice returns the IP address, language, and operating system for the current browser.

## Installation

To install and run this microservice locally, follow these steps:

1. Clone the repository: `git clone https://github.com/JD-Gonz/headerParser.git`
2. Navigate to the project directory: `cd headerParser`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Access the microservice at `http://localhost:8080/whoami`

## Usage

To use the microservice, make a GET request to the endpoint `http://localhost:8080/whoami`. The microservice will return a JSON object with the IP address, language, and operating system for the current browser.

Example response:

```
{
  "ipaddress": "127.0.0.1",
  "language": "en-US",
  "software": "Windows NT 10.0; Win64; x64"
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.