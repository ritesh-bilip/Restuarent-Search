// Simulating data for restaurants (replace with actual data if available)
const restaurantsData = [
  {
    name: "The Irish House",
    image: "imge/the irish house.jpeg",
    link: "foodshowcase.html",
  },
  {
    name: "Ballygunge Guest House",
    image: "imge/Ballygunge Guest house.jpeg",
    link: "foodshowcase.html",
  },
  {
    name: "Barbeque Nation",
    image: "imge/barbeque nation.jpeg",
    link: "foodshowcase.html",
  },
  {
    name: "Beijing Bar & Reastaurant",
    image: "imge/beijing bar & reastaurant.jpeg",
    link: "foodshowcase.html",
  },
  {
    name: "Blue & Beyond",
    image: "imge/blue & beyond.jpeg",
    link: "foodshowcase.html",
  },
  {
    name: "Bombay Brasserie",
    image: "imge/bombay brasserie.jpeg",
    link: "foodshowcase.html",
  },
  {
    name: "Haji Saheb",
    image: "imge/haji saheb.jpeg",
    link: "foodshowcase.html",
  },
  {
    name: "The Bikers Cafe",
    image: "imge/the bikers cafe.jpeg",
    link: "foodshowcase.html",
  },
  { name: "The Grid", image: "imge/the grid.jpeg", link: "foodshowcase.html" },
  {
    name: "Yautcha Kolkata",
    image: "imge/yautcha kolkata.jpeg",
    link: "foodshowcase.html",
  },
];

// Function to dynamically create restaurant cards
function createRestaurantCards(restaurants) {
  const restaurantList = document.querySelector(".restaurant-list");

  restaurants.forEach((restaurant) => {
    const card = document.createElement("div");
    card.classList.add("restaurant-card");
    card.innerHTML = `
          <img src="${restaurant.image}" alt="${restaurant.name}">
          <h3>${restaurant.name}</h3>
          <a href="${restaurant.link}">View Menu</a>
      `;
    restaurantList.appendChild(card);
  });
}

// Display restaurant cards on page load
document.addEventListener("DOMContentLoaded", function () {
  createRestaurantCards(restaurantsData);
});

// Example of adding interactivity (button click)
document.getElementById("orderNow").addEventListener("click", function () {
  alert("Order now functionality to be implemented!");
});
