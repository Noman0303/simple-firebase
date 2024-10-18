/* 
1.visit: console.firebase.google.com
2.create project (skip google analytics)
3.Register App (create config)
4.install firebase : npm install firebase
5.add config file to your project. firebase.init.js
6.DANGER: Do not publish or make firebase config to public by pushing those to github.
7.Visit: Go to docs> build> Authentication > Web > Get Started
8.export app form the firebase.config.js file: export default app
9.Login.jsx : import getAuth from firebase/auth
10.create const auth = getAuth (app)
11. import googleAuthProvider & create a new provider 
12.use signInWithPopup and pass auth and provider
13.Activate sign in method (google, facebook, github)
*/