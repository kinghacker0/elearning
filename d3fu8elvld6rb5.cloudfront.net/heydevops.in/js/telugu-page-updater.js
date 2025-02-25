let updatedTime = new Date();

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDoc, doc, getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"; // Import Firestore-specific functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc_Vzsg_zLdM1YKF9F6Xhl-SsiOXOhnQI",
  authDomain: "lpe-tool.firebaseapp.com",
  projectId: "lpe-tool",
  storageBucket: "lpe-tool.appspot.com",
  messagingSenderId: "642166338149",
  appId: "1:642166338149:web:35d366a6048c003aea0c8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

// Create a Firestore reference to the document you want to retrieve
const docRef = doc(db, "/lpe/telugu-page");

// Get the document data
const getDocData = async () => {
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const result = docSnap.data();
      // console.log(result.price.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,"));
      document.querySelector('.price').innerHTML = `₹${result.price.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`;
      updatedTime = `${result.date} ${result.time}`;
      setTimer();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

// for comma genrator

// Call the function to get the document data
getDocData();


const setTimer=()=>{

  // Set the date we're counting down to
  var countDownDate = new Date(`${updatedTime}`).getTime();
  console.log(updatedTime);

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"

    const daysContainer = document.querySelectorAll(".days-container");
    const hoursContainer = document.querySelectorAll(".hours-container");
    const minutesContainer = document.querySelectorAll(".minutes-container");
    const secondsContainer = document.querySelectorAll(".seconds-container");

    // document.getElementById('timer').innerHTML =
    //   days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    daysContainer.forEach((day) => {
      day.innerHTML = days + "";
    });
    hoursContainer.forEach((hour) => {
      hour.innerHTML = hours + "";
    });
    minutesContainer.forEach((minute) => {
      minute.innerHTML = minutes + "";
    });
    secondsContainer.forEach((second) => {
      second.innerHTML = seconds + "";

    });

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }, 1000);

}
