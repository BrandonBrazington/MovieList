import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDR7jAfrtwemghnWCNI6d6-33Z6y80EL7k",
    authDomain: "movie-list-brazington-tech.firebaseapp.com",
    databaseURL: "https://movie-list-brazington-tech.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;