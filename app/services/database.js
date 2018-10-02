import firebase from 'firebase'
import store from '@/store'

var config = {
    apiKey: "AIzaSyCGWebJo3RMQAXSj2G_P6gnOe8uk7cpUbs",
    authDomain: "beer-flight-app-1524578137725.firebaseapp.com",
    databaseURL: "https://beer-flight-app-1524578137725.firebaseio.com",
    projectId: "beer-flight-app-1524578137725",
    storageBucket: "beer-flight-app-1524578137725.appspot.com",
    messagingSenderId: "566727453979"
};

const database = firebase.initializeApp(config)

database.signUp = async (email, password) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)

        store.commit('setCurrentUser', firebase.auth().currentUser)

        return true
    } catch (error) {
        return error
    }
}
export default database