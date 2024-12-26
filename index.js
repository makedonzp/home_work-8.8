document.getElementById("loadButton").addEventListener("click", loadImages);

async function loadImages(event) {
  event.preventDefault();
  const loader = document.getElementById("loader");
  const gallery = document.getElementById("gallery");

  loader.style.display = "block";
  gallery.innerHTML = "";

  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/20 ");
    const data = await response.json();
    displayImages(data.message);
  } catch (error) {
    console.error("Ошибка при загрузке изображений:", error);
  } finally {
    loader.style.display = "none";
  }
}

function displayImages(images) {
  const gallery = document.getElementById("gallery");
  images.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    gallery.appendChild(img);
  });
}
