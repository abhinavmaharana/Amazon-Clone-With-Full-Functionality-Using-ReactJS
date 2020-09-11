const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { request, response } = require('express');
const stripe = require("stripe")('sk_test_51HPvWrDHzftOhCJfJmliDlkj9wyuhJ9f0VpwbvNJDvLnT4Umrkm9u6Fdd3A0a8PFXwcMge3eHeWgFAKzqKy0wQMC00ueq0vmFr')

// API

// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen Command
exports.api = functions.https.onRequest(app)

//http://localhost:5001/challenge-88129/us-central1/api

