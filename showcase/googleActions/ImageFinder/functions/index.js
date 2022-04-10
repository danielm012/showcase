// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';

const {dialogflow, BasicCard} = require('actions-on-google');
const functions = require('firebase-functions');

// inheriting from dialogflow, starting constructor
const app = dialogflow({debug: true});

const images = {
  'car racing': new BasicCard({
    title: 'car racing',
    image: {
      url: 'http://www.dieselstation.com/wallpapers/albums/Koenigsegg/Agera-R-2013/Koenigsegg-Agera-R-2013-widescreen-13.jpg',
      accessibilityText: 'car racing', 
    },
      display: 'WHITE',
  }
  
),

  'duck flying': new BasicCard({
    title: 'duck flying',
    image: {
      url: 'https://forum.americanexpedition.us/images/mallard-duck/mallard-duck-flying-to-female.jpg',
      accessibilityText: 'duck flying'
    },
    display: 'WHITE',
  }),

  'dog racing': new BasicCard({
    title: 'dog barking',
    image: {
      url:'https://www.pets4homes.co.uk/images/articles/3779/large/how-to-care-for-a-dog-with-a-stomach-upset-58345cd2daf98.jpg',
      accessibilityText: 'dog barking'
    },
    display: 'WHITE',
  })
};

 
 app.intent('FindFunction', (conv, {any}) =>{
   const word = any;
   console.log("testing run! any: " + any);
     conv.close('I know you want a picture of a ' + word);
     //conv.ask('here is a image, I do not know if this is right!', images[ActionImages]);
     conv.close('I try to get a picture but the developer is still working on his programming skills');
 });

 app.intent('ImageWithActions', (conv, {ActionImages}) =>
{
    conv.close('Here is the image', images[ActionImages]);
});

 exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
 
 /*
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
}

  // // Uncomment and edit to make your own intent handler
  // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function yourFunctionHandler(agent) {
  //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
  //   agent.add(new Card({
  //       title: `Title: this is a card title`,
  //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
  //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
  //       buttonText: 'This is a button',
  //       buttonUrl: 'https://assistant.google.com/'
  //     })
  //   );
  //   agent.add(new Suggestion(`Quick Reply`));
  //   agent.add(new Suggestion(`Suggestion`));
  //   agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
  // }

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }
  // // See https://github.com/dialogflow/dialogflow-fulfillment-nodejs/tree/master/samples/actions-on-google
  // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  // intentMap.set('your intent name here', yourFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
}); */