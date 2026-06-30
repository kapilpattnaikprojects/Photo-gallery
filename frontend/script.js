const gallery = document.getElementById("gallery");

// Load all images
function loadGallery() {

    gallery.innerHTML = "";

    fetch("http://localhost:3000/photos")
        .then(response => response.json())
        .then(photos => {

            photos.forEach(photo => {

                gallery.innerHTML += `
                    <div class="card">
                        <img src="images/${photo}" alt="${photo}">
                        <h3>${photo}</h3>
                    </div>
                `;

            });

        })
        .catch(error => {
            console.error("Gallery Error:", error);
        });

}

loadGallery();


// ===========================
// Upload Image
// ===========================

const uploadButton = document.getElementById("uploadBtn");

uploadButton.addEventListener("click", () => {

    console.log("✅ Upload button clicked");

    const fileInput = document.getElementById("photo");

    const file = fileInput.files[0];

    console.log("Selected File:", file);

    if (!file) {

        alert("Please choose an image first.");

        return;

    }

    const formData = new FormData();

    formData.append("photo", file);

    console.log("Sending request to backend...");

    fetch("http://localhost:3000/upload", {

        method: "POST",

        body: formData

    })

    .then(response => {

        console.log("Response:", response);

        return response.json();

    })

    .then(data => {

        console.log("Backend Response:", data);

        alert(data.message);

        loadGallery();

    })

    .catch(error => {

        console.error("Upload Error:", error);

    });

});