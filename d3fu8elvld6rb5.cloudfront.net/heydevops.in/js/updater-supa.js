let updatedTime = new Date();

// Import the functions you need from the SDKs you need
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.0.0/+esm';


const supabaseUrl ='https://bqvxtxtxwlpquzhrhztz.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxdnh0eHR4d2xwcXV6aHJoenR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MDI5MjQsImV4cCI6MjAzNDk3ODkyNH0.ynyfW_p6plvcEZOuSlh2MsbTRDmLpfvZiTLwaERCs-M'
const supabase = createClient(supabaseUrl, supabaseKey)

// Create a Firestore reference to the document you want to retrieve

const price = document.querySelectorAll('.price')
// const cutprice = document.querySelectorAll('.cutprice')
// const banner = document.querySelectorAll('.banner')
const webinar = document.querySelector('.webinardate')
const time=document.querySelector(".webinartime")
const ctas = document.querySelectorAll('.cta');
// const whatsapp = document.querySelector('.whatsapp');

const getDocData = async () => {
    const { data, error } = await supabase
        .from('creators')
        .select()
        .eq('email', 'heydevopshelp@gmail.com').eq('course','Devops-course')
     
        if (data) {

            // console.log("Document data:", docSnap.data());
            // console.log(result.price.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,"));
            if (price) {
                price.forEach((item) => item.innerHTML = `₹${data[0].price?.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`);
            }
            // if (cutprice) {
            //     cutprice.forEach((item) => item.innerHTML = `₹${data[0].cut_price?.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}`);
            // }
            //  if (banner) {
            //     banner.forEach((item) => item.setAttribute("src", data[0].course_banner));
            // }
            // if (webinar) {
            //     webinar.innerHTML = convertDate(data[0].date);
            // }
            // if (time) {
            //     time.innerHTML = convertTime(data[0].time);
            // }
            if (ctas) { ctas.forEach((button) => {
                if(data[0].code)
          { button.setAttribute("href", `${data[0].cta}?code=${data[0].coupon_value}`)}
                else{ button.setAttribute("href", data[0].cta)}

            
            }) }
            updatedTime = `${data[0].date} ${data[0].time}`;
            setTimer();

        } else {
            console.log(error);
        }

};

// for comma genrator

// Call the function to get the document data
getDocData();

const convertDate = (date) => {
    let dateObj = new Date(date);

    // Define an array of full month names
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Extract the day and month
    let day = dateObj.getDate();
    let month = monthNames[dateObj.getMonth()];

    // Determine the suffix for the day
    let suffix;
    if (day >= 11 && day <= 13) {
        suffix = 'th';
    } else {
        switch (day % 10) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
            default:
                suffix = 'th';
                break;
        }
    }

    // Format the date as "DDth MMMM"
    let formattedDate = `${day} <sup>${suffix}</sup> ${month}`;
    return formattedDate;
}

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
      day.innerHTML = days + ":";
    });
    hoursContainer.forEach((hour) => {
      hour.innerHTML = hours + ":";
    });
    minutesContainer.forEach((minute) => {
      minute.innerHTML = minutes + ":";
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

const convertTime = (time) => {
    // Split the input time into hours and minutes
    let [hours, minutes] = time.split(':').map(Number);

    // Determine the period (AM/PM)
    let period = hours >= 12 ? 'PM' : 'AM';

    // Adjust the hours for 12-hour format
    hours = hours % 12 || 12;

    // Format the hours and minutes to ensure two digits
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');

    // Combine the formatted time
    let formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

    return formattedTime;
}
