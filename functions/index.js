/* eslint-disable max-len */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable spaced-comment */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
// eslint-disable-next-line func-call-spacing
const stripe = require("stripe")
("sk_test_***************************************"); //Stripe key;


// API


// App Config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {

    const total = request.query.total;

    console.log("Payment Request Received for the amount of ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of currency
        currency: "usd",
    });

    //OK - created

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/amzro-e06ad/us-central1/api
