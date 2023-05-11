window.addEventListener("load", () => {
    function sendData() {
        const XHR = new XMLHttpRequest();
        // Define a callback function
        // xhttp.onload = function () {
        //     // Here you can use the Data
        // }

        // // Send a request
        // xhttp.open("GET", "ajax_info.txt");
        // xhttp.send();
        // Bind the FormData object and the form element
        const FD = new FormData(form);

        // Define what happens on successful data submission
        XHR.addEventListener("load", (event) => {
            // alert(event.target.responseText);
            alert('Submitted');
        });

        // Define what happens in case of error
        XHR.addEventListener("error", (event) => {
            alert('Oops! Something went wrong.');
        });

        // Set up our request
        XHR.open("POST", "home.html");

        // The data sent is what the user provided in the form
        XHR.send(FD);
    }

    // Get the form element
    const form = document.getElementById("myForm");

    // Add 'submit' event handler
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        sendData();
    });
});