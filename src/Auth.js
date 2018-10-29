import auth0 from 'auth0-js';
import history from './history';

export default class Auth {
 auth0 = new auth0.WebAuth({
   domain: 'classicpairings.auth0.com',
   clientID: 'TG6iRWyjS2GSTnqkLqhEu0Sb0L0nj515',
   redirectUri: 'http://classic-pairings.s3-website.us-east-2.amazonaws.com/wines',
   responseType: 'token id_token',
   scope: 'openid profile'
 });

 constructor() {
   this.login = this.login.bind(this);
   this.logout = this.logout.bind(this);
   this.handleAuthentication = this.handleAuthentication.bind(this);
   this.isAuthenticated = this.isAuthenticated.bind(this);
 }

 login(username, password) {
   console.log('Login authorize', username, password);
   this.auth0.login(
     { realm: 'Username-Password-Authentication', username, password },
     (err, authResult) => {
       console.log('authResult', authResult);
       if (err) {
         console.log('err', err);
         alert(`Error: ${err.description}`);
         return;
       }
     }
   );
 }

 signup(email, password) {
   console.log('SignUp');
   this.auth0.signup(
     { connection: 'Username-Password-Authentication', email, password },
     (err) => {
       if (err) {
         console.log(err);

         if(err.code === 'invalid_password' ) {
           alert('Invalid Password');
         } else {
           alert(`Error: ${err.description}`);
         }


         return;
       }

       this.login(email, password);

     }
   );
 }

 handleAuthentication() {
   console.log('handleAuthentication');
   this.auth0.parseHash((err, authResult) => {
     console.log('authResult')
     if (authResult && authResult.accessToken && authResult.idToken) {
       this.setSession(authResult);
       history.replace('/wines');
     } else if (err) {
       history.replace('/wines');
       console.log(err);
     }
   });
 }

 setSession(authResult) {
   console.log('setSession');
   // Set the time that the Access Token will expire at
   let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
   localStorage.setItem('access_token', authResult.accessToken);
   localStorage.setItem('id_token', authResult.idToken);
   localStorage.setItem('expires_at', expiresAt);
   // navigate to the home route
   history.replace('/');
 }

 logout() {
   // Clear Access Token and ID Token from local storage
   localStorage.removeItem('access_token');
   localStorage.removeItem('id_token');
   localStorage.removeItem('expires_at');
   // navigate to the home route
   history.replace('/');
 }

 isAuthenticated() {
   // Check whether the current time is past the
   // Access Token's expiry time
   let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
   return new Date().getTime() < expiresAt;
 }
}
