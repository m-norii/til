const admin = require('firebase-admin');
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp();
var db = admin.firestore();

exports.helloWorld = functions.https.onCall(
    (data, context) => {
        db.collection('people').get()
            .then((snapshot) => {
                var res = [];
                snapshot.forEach((doc) => {
                    res.push(doc.data());
                });
                return {message:'return people data.',
                people:res};
            })
            .catch((err) => {
                return err;
            });
    }
);
