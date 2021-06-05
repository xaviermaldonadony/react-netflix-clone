import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// only do this once
// import { seedDatabase } from '../seed';

// seed the database

// config
const config = {
	apiKey: 'AIzaSyDVUIzu3c-KO35dh4HtSD_4K9_2Ugz0CN8',
	authDomain: 'netflix-clone-5bcd5.firebaseapp.com',
	projectId: 'netflix-clone-5bcd5',
	storageBucket: 'netflix-clone-5bcd5.appspot.com',
	messagingSenderId: '805394312196',
	appId: '1:805394312196:web:e8674813ffe847c291d951',
};

const firebase = Firebase.initializeApp(config);
// only do this once
// seedDatabase(firebase);

export { firebase };
