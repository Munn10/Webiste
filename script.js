const mainMenu = document.querySelector(".mainmenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-100%";
}

// Menu-items code:

let data = [
  {
    id: 1,
    title: "Cheese Pizza",
    imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/45.jpg",
    description:
      "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
    price: "$15.95",
  },
  {
    id: 2,
    title: "Pepperoni Pizza",
    imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/7777.jpg",
    description:
      "Get our classic Pepperoni pizza with your choice of sauce and crust.",
    price: "$16.35",
  },
  {
    id: 3,
    title: "Vegetarian Pizza",
    imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/p1.jpg",
    description:
      "Tomato Sauce, Mozzarella, Green Pepper, Onions, Fresh Mushrooms, Tomatoes, and Black Olives.",
    price: "$19.95",
  },
  {
    id: 4,
    title: "Mozzarella Pizza",
    imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/09.jpg",
    description:
      "Secret homemade spicy sauce, with curly pepperoni and fresh mozzarella",
    price: "$22.55",
  },
  {
    id: 5,
    title: "Sicilian Pizza",
    imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/46.jpg",
    description: "Salami, pepperoni, Italian sausage, green peppers & onions",
    price: "$19.15",
  },
  {
    id: 6,
    title: "Grilled Pizza",
    imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/68.jpg",
    description: "Tomato, onions, green peppers & grilled or fried chicken",
    price: "$14.25",
  },
  {
    id: 7,
    title: "Veggie Pizza",
    imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/53.jpg",
    description: "Black olives, green pepper, onion, mushroom & tomato",
    price: "$12.25",
  },
  {
    id: 8,
    title: "Chicken Pizza",
    imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/22.jpg",
    description: "Alfredo sauce, grilled chicken, mushrooms & black olives",
    price: "$13.55",
  },
  {
    id: 9,
    title: "Hot Brown Pizza",
    imgURL: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/43.jpg",
    description:
      "Roasted turkey, bacon, tomato over creamy cheddar alfredo sauce",
    price: "$18.00",
  },
];

let container = document.querySelector(".menu-items");
console.log(container);
const loadAll = () => {
  const pizzaItemsHTML = data.map(
    (item) => `
    
    <div class='col-md-4'>
      <div class='card' style='margin-left: 20px; height:500px; margin-bottom:20px; padding: 40px; width: 350px;'>
        <img src='${item.imgURL}' class='card-img-top' alt='...'>
        <div class='card-body'>
          <h5 class='card-title'>${item.title}</h5>
          <p class='card-text'>${item.description}</p>
          <a href='#' class='btn btn-primary'>${item.price}</a>
        </div>
      </div>
    </div>`
  );

  document.getElementById("box").innerHTML = pizzaItemsHTML.join("");
};

loadAll();
