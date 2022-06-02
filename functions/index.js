const functions = require("firebase-functions");
var cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());

const port = 3000;

app.get("/fetchApiPath/:clientId", (req, res) => {
  console.log(req.params);
  let pClientId = req.params.clientId;
  let data = [];

  let clientsData = [
    {
      clientId: "STOMACH",
      serverName: "Office Server",
      // serverPath: "http://103.140.26.150:4021/",
      serverPath: "http://65.0.243.31:4011/",
      secretKey: "ABC1234",
      subscriptionType: "GOLD",
      subcriptionEndDate: "2023-01-27",
    },
    {
      clientId: "BURFFEE",
      serverName: "Office Server",
      serverPath: "http://103.140.26.150:4021/",
      secretKey: "ABC1234",
      subscriptionType: "GOLD",
      subcriptionEndDate: "2023-01-27",
    },
    {
      clientId: "ATUL",
      serverName: "Office Server",
      serverPath: "http://103.140.26.150:4021/",
      secretKey: "ABC1234",
      subscriptionType: "GOLD",
      subcriptionEndDate: "2023-01-27",
    },
    {
      clientId: "HSRETAIL",
      serverName: "Office Server",
      serverPath: "http://103.140.26.150:4002/",
      secretKey: "ABC1234",
      subscriptionType: "GOLD",
      subcriptionEndDate: "2023-01-27",
    },
    {
      clientId: "MKANTIA",
      serverName: "Office Server",
      serverPath: "http://103.140.26.150:4009/",
      secretKey: "ABC1234",
      subscriptionType: "GOLD",
      subcriptionEndDate: "2023-01-27",
    },
    {
      clientId: "STOMACHDEVELOPMENT",
      serverName: "Development Stomach",
      // serverPath: "http://103.140.26.150:4021/",
      serverPath: "http://65.0.243.31:4011/",
      secretKey: "ABC1234",
      subscriptionType: "GOLD",
      subcriptionEndDate: "2023-01-27",
    },
  ];

  data = clientsData.filter((xx) => xx.clientId === pClientId);
  res.send(data);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
