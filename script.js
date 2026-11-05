// JavaScript functionality

document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Loaded Successfully!");

});


// jQuery functionality

$(document).ready(function () {

    // Welcome button

    $("#welcomeBtn").click(function () {

        $("#message").text("Welcome to R. Srinidhi's Personal Website!");

    });


    // Date and time button

    $("#dateBtn").click(function () {

        alert("Current Date and Time: " + new Date().toLocaleString());

    });

});