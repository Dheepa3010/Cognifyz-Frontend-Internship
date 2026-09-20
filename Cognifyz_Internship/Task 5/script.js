const fetchButton = document.getElementById("fetchButton");

const dataContainer = document.getElementById("dataContainer");

const loading = document.getElementById("loading");


fetchButton.addEventListener("click", function () {

    loading.textContent = "Connecting to intelligence network...";

    dataContainer.innerHTML = "";


    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")

        .then(function(response) {

            if (!response.ok) {
                throw new Error("Unable to connect to API");
            }

            return response.json();

        })

        .then(function(data) {

            loading.textContent =
                "✓ Intelligence stream connected successfully.";

            data.forEach(function(item) {

                const card = document.createElement("div");

                card.className = "data-card";

                card.innerHTML = `
                    <span class="id">
                        DATA NODE ${item.id}
                    </span>

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${item.body}
                    </p>
                `;

                dataContainer.appendChild(card);

            });

        })

        .catch(function(error) {

            loading.textContent =
                "Connection failed. Please try again.";

            dataContainer.innerHTML = `
                <div class="empty-state">

                    <div class="empty-icon">!</div>

                    <h3>Connection Error</h3>

                    <p>
                        Unable to retrieve external data.
                    </p>

                </div>
            `;

            console.error(error);

        });

});