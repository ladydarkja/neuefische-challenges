console.clear();

const errorElement = document.querySelector('[data-js="errorElement"]');

const userElement = document.querySelector(".user");

async function getUser(url) {
  const response = await fetch(url);
  if (!response.ok) {
    console.log("Network error");
    return null;
  }
  try {
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log("error");
    return null;
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    errorElement.innerHTML = "";
    userElement.innerHTML = "";
    if (!user) {
      console.log("User not found");
      errorElement.textContent = "User not found.";
      return;
    }
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
  })
);
