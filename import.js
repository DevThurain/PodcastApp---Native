const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./config.js');
const serviceAccount = require('./serviceAccount.json');

// json to firestore
const jsonToFirestore = async() => {
    try{
        console.log('initializing firebase ...');
        // await initializeApp();
        await firestoreService.initializeFirebaseApp(serviceAccount);
        console.log('firebase initialized.');

        await firestoreService.restore('./podcasts_padc.json');
        console.log('import success.')

    }catch(error){
        console.log(error);
    }
}

jsonToFirestore();