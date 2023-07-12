document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
  const dataContainer = document.getElementById("data-container");

  // Display skeleton loader
  for (let i = 0; i < 10; i++) {
    const skeleton = document.createElement("div");
    skeleton.classList.add("skeleton");
    dataContainer.appendChild(skeleton);
  }

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // Remove skeleton loader
    dataContainer.innerHTML = "";

    // Display fetched data
    data.forEach(item => {
      const post = document.createElement("div");
      post.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
      dataContainer.appendChild(post);
    });
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}