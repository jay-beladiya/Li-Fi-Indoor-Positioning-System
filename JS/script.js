const rooms = {
    Room1: document.getElementById("room1"),
    Room2: document.getElementById("room2"),
    Room3: document.getElementById("room3"),
    Room4: document.getElementById("room4"),
    Room5: document.getElementById("room5"),
    Room6: document.getElementById("room6"),
  };
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
      import {
        getDatabase,
        ref,
        get,
        onValue,
      } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-database.js";

      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyCHlq0EgDZVqp2J796T9C50FjsBhW2cfpk",
        authDomain: "lifi-5c16c.firebaseapp.com",
        databaseURL: "https://lifi-5c16c-default-rtdb.firebaseio.com",
        projectId: "lifi-5c16c",
        storageBucket: "lifi-5c16c.appspot.com",
        messagingSenderId: "1095932481159",
        appId: "1:1095932481159:web:b31e426b1441bd239e7222",
        measurementId: "G-SRJ5S4069Z",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      // const analytics = getAnalytics(app);

      //var db = app.database();
      const db = getDatabase();

      // Specify the location in the database you want to retrieve data from
      const locationRef = ref(db, "Location");

      // Attach an event listener to listen for changes in the data
      onValue(locationRef, (snapshot) => {
        // This function will be called whenever the data at 'locationRef' changes

        // Get the data from the snapshot
        const data = snapshot.val();

        // You can now work with the 'data' object
        // For example, you can update your HTML element with the new data
        // const locationElement = document.getElementById("room_no");
        // locationElement.textContent = data;
        for (const roomID in rooms) {
            const roomElement = rooms[roomID];
            const iconElement = roomElement.querySelector("i");
            if (data == roomID) {
                roomElement.classList.remove("vacant");
                roomElement.classList.add("occupied");
                iconElement.classList.remove("fa-door-closed");
                iconElement.classList.add("fa-door-open");
            } else {
                roomElement.classList.remove("occupied");
                roomElement.classList.add("vacant");
                iconElement.classList.add("fa-door-closed");
                iconElement.classList.remove("fa-door-open");
            }
          }
        }
        );