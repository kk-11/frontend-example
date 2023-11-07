# Parcel Lab Frontend Coding Challenge

tldr;

Run the mock order endpoint 
`node ./server`

Install the client deps and run
`npm i && npm run dev`


I'll be honest this one got away from me a bit and I'd rather it was in a more finished state.
In particular the test's are very lacking (full disclosure I'm not super good with tests and even with 4 more hours they probably wouldn't have blown any body away.)

In general there's a lot that could be cleaned up but I'd love to chat about it if you'd be interested :)

Tech used:

vite: build tool, quick and easy
styled-components: super popular styling choice.
react-router(v6): easy routing. 
express: node server for mocked endpoint.


Project map:
--- server
    This is the endpoint mock
   -- index.js
      Entry for express server
   -- orders.js
      Mocked data

--- src
    Main client app
    