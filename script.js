 document.getElementById('myForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get values from the form
        var nameValue = document.getElementById('name').value;
        var yearValue = document.getElementById('year').value;

        // Build the query string
        var queryString = "?";
        if (nameValue) {
            queryString += "name=" + encodeURIComponent(nameValue) + "&";
        }
        if (yearValue) {
            queryString += "year=" + encodeURIComponent(yearValue);
        }

        // Update the h3 element with the new URL
        var urlElement = document.getElementById('url');
        urlElement.textContent = "https://localhost:8080/" + queryString;
    });