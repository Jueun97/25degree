import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
  onUserState() {
    const user = firebase.auth().currentUser;

    console.log(user);
  }
  logout() {
    firebase.auth().signOut();
  }
}
export default AuthService;
