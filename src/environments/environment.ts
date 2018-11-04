// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  homeUrl: "localhost:4200",
  firebase: {
    apiKey: "AIzaSyAYZt5DvIwVNV8tlmOLOvxPeYnb0TIoC00",
    authDomain: "insta-chat-38bb4.firebaseapp.com",
    databaseURL: "https://insta-chat-38bb4.firebaseio.com",
    projectId: "insta-chat-38bb4",
    storageBucket: "",
    messagingSenderId: "70714683562"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
