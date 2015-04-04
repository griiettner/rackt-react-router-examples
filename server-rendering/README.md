# Server rendering example

This code is an example how to do server-side rendering for React and [react-router](https://github.com/rackt/react-router). This simple app is a Node.js application that will render react-router and all of its sub-components and return HTML code. This example is designed to be views-as-a-service, which means that you can use whatever backend language/framework you like, just when you have to output HTML, then make a request to this Node.js app and pass the necessary paramaters you want and this app will return the rendered HTML for you.

## Requirements

* node.js/io.js + npm

## How to get it up and running

`cd` into the cloned project, `server-rendering` directory and run:

```
$ npm install
$ npm start
```

Then open your browser and go to [http://localhost:3000](http://localhost:3000)