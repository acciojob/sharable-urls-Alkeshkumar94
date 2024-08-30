document.getElementById('myform').addEventListener('submit', function(event) {
            event.preventDefault();

            // Get values from the form
            var nameValue = document.getElementById('name').value;
            var yearValue = document.getElementById('year').value;

            // Build the query string
            var queryString = "";
            if (nameValue) {
                queryString += "name=" + encodeURIComponent(nameValue);
            }
            if (yearValue) {
                if (queryString) {
                    queryString += "&";
                }
                queryString += "year=" + encodeURIComponent(yearValue);
            }

            // Update the h3 element with the new URL
            var urlElement = document.getElementById('url');
            urlElement.textContent = "https://localhost:8080/" + (queryString ? "?" + queryString : "");
        });