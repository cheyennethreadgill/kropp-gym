//
//
//
//

// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
"use strict";

const functions = require("firebase-functions");
const { WebhookClient } = require("dialogflow-fulfillment");
const { Card, Suggestion, Payload } = require("dialogflow-fulfillment");
const fetch = require("node-fetch");

process.env.DEBUG = "dialogflow:debug"; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log("Dialogflow Request headers: " + JSON.stringify(request.headers));
  console.log("Dialogflow Request body: " + JSON.stringify(request.body));

  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }

  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  // MY CUSTOM HANDLER
  function productRecs(agent) {
    return fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((products) => {
        if (products && products.length > 0) {
          const goProducts = (products) => {
            for (let i = 0; i < 2; i++) {
              // Limiting to 2 cards for testing
              const { title, image, description } = products[i];

              console.log(products[i]);

              // Show fetched info in card
              agent.add(`Here are some products that I recommend:`);

              const payloadJson = {
                richContent: [
                  [
                    {
                      type: "image",
                      rawUrl: image,
                      accessibilityText: title,
                    },
                    {
                      type: "info",
                      title: title,
                      subtitle: description,
                      actionLink: "https://cloud.google.com/dialogflow/docs",
                    },
                    {
                      type: "button",
                      icon: {
                        type: "chevron_right",
                        color: "#FF9800",
                      },
                      text: "Add To Cart",
                      link: "https://google.com",
                      event: {
                        name: "",
                        languageCode: "",
                        parameters: {},
                      },
                    },
                  ],
                ],
              };

              agent.add(new Suggestion("Show more products"));
              agent.add(new Payload(agent.UNSPECIFIED, payloadJson, { rawPayload: true }));
            }
          };
          goProducts(products);
        } else {
          agent.add("No products found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        agent.add("Sorry, I couldn't fetch the product recommendations.");
      });

    // products.map((product) => {
    // const { title, image, description } = product;

    //   agent.add(
    //     new Card({
    //       title: title,
    //       imageUrl: image,
    //       text: description,
    //       buttonText: "Add To Cart",
    //       buttonUrl: "https://assistant.google.com/",
    //     })
    //   );
    //   agent.add(new Suggestion(`Suggestion`));
    // });
  }

  // Uncomment and edit to make your own intent handler
  // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // below to get this function to be run when a Dialogflow intent is matched
  function yourFunctionHandler(agent) {
    const payloadJson = {
      richContent: [
        [
          {
            type: "image",
            rawUrl:
              "https://img.pixers.pics/pho_wat(s3:700/FO/99/99/89/6/700_FO9999896_734854d627eb0ac613f72598072b9b7c.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/stickers-vector-clipart-illustrations-of-emoticon-smiley-face.jpg.jpg",
            accessibilityText: "Dialogflow across platforms",
          },
          {
            type: "info",
            title: "Dialogflow",
            subtitle: "Build natural and rich conversational experiences",
            actionLink: "https://cloud.google.com/dialogflow/docs",
          },
          {
            type: "chips",
            options: [
              {
                text: "Case Studies",
                link: "https://cloud.google.com/dialogflow/case-studies",
              },
              {
                text: "Docs",
                link: "https://cloud.google.com/dialogflow/docs",
              },
            ],
          },
        ],
      ],
    };

    agent.add(`Here are some products that I recommend:`);

    // agent.add(
    //   new Card({
    //     title: `Title: this is a card title`,
    //     imageUrl:
    //       "https://img.pixers.pics/pho_wat(s3:700/FO/99/99/89/6/700_FO9999896_734854d627eb0ac613f72598072b9b7c.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/stickers-vector-clipart-illustrations-of-emoticon-smiley-face.jpg.jpg",
    //     text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
    //     buttonText: "This is a button",
    //     buttonUrl: "https://assistant.google.com/",
    //   })
    // );
    agent.add(new Payload(agent.UNSPECIFIED, payloadJson, { rawPayload: true }));

    // agent.add(new Suggestion(`Quick Reply`));

    // agent.setContext({ name: "weather", lifespan: 2, parameters: { city: "Rome" } });
  }

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }
  // // See https://github.com/dialogflow/fulfillment-actions-library-nodejs
  // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set("Default Welcome Intent", welcome);
  intentMap.set("Default Fallback Intent", fallback);
  intentMap.set("ProductRecommendations", productRecs);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
