const laptopList = [
  {
    imageLink: "images/Lenovo Laptop.jpg",
    laptopName: "Lenovo Laptop",
    brand: "lenovo",
    rentPrice: 50000,
    rating: 3,
    status: true,
  },
  {
    imageLink: "images/Huawei Laptop.jpg",
    laptopName: "Huawei Matebook",
    brand: "Huawei",
    rentPrice: 200000,
    rating: 4,
    status: true,
  },
  {
    imageLink: "images/DELL Laptop.jpg",
    laptopName: "Dell Laptop",
    brand: "Dell",
    rentPrice: 100000,
    rating: 3,
    status: true,
  },
  {
    imageLink: "images/Asus Chromebook Laptop.jpg",
    laptopName: "Asus Chromebook",
    brand: "Asus",
    rentPrice: 25000,
    rating: 5,
    status: true,
  },
  {
    imageLink: "images/Alienware Laptop.jpg",
    laptopName: "Alienware Laptop",
    brand: "Dell",
    rentPrice: 300000,
    rating: 4,
    status: false,
  },
  {
    imageLink: "images/Lenovo Yoga Duet Laptop.jpg",
    laptopName: "Lenovo Yoga",
    brand: "Lenovo",
    rentPrice: 300000,
    rating: 2,
    status: true,
  },
  {
    imageLink: "images/ROG Laptop.jpg",
    laptopName: "ROG Strix",
    brand: "Asus",
    rentPrice: 250000,
    rating: 3,
    status: true,
  },
  {
    imageLink: "images/MSI Laptop.jpg",
    laptopName: "MSI Laptop",
    brand: "MSI",
    rentPrice: 300000,
    rating: 3,
    status: false,
  },
  {
    imageLink: "images/Zenbook Laptop.jpg",
    laptopName: "Asus Zenbook",
    brand: "Asus",
    rentPrice: 400000,
    rating: 2,
    status: true,
  },
  {
    imageLink: "images/ROG Zephyrus Laptop.jpg",
    laptopName: "ROG Zephyrus",
    brand: "Asus",
    rentPrice: 200000,
    rating: 5,
    status: true,
  },
];

function currencyRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}
function renderLaptops(laptops) {
  const container = document.getElementById("laptopContainer");
  container.innerHTML = "";

  laptops.forEach((laptop) => {
    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.src = laptop.imageLink;
    card.appendChild(image);

    const name = document.createElement("p");
    name.textContent = laptop.laptopName;
    card.appendChild(name);

    const rentPrice = document.createElement("p");
    rentPrice.textContent = `Starting At Rp ${laptop.rentPrice}`;
    card.appendChild(rentPrice);

    const status = document.createElement("p");
    status.textContent = ` ${laptop.status ? "Available" : "Not Available"}`;
    card.appendChild(status);

    container.appendChild(card);
  });
}

function sortLaptops() {
  const sortType = document.getElementById("sort").value;

  let sortedLaptops = [];

  switch (sortType) {
    case "name":
      sortedLaptops = laptopList
        .slice()
        .sort((a, b) => a.laptopName.localeCompare(b.laptopName));
      break;
    case "highPrice":
      sortedLaptops = laptopList
        .slice()
        .sort((a, b) => b.rentPrice - a.rentPrice);
      break;
    case "lowPrice":
      sortedLaptops = laptopList
        .slice()
        .sort((a, b) => a.rentPrice - b.rentPrice);
      break;
    default:
      sortedLaptops = laptopList.slice();
  }

  renderLaptops(sortedLaptops);
}

function filterLaptopsByBrand() {
  const selectedBrand = document.getElementById("brandFilter").value;
  let filteredLaptops;

  if (selectedBrand === "all") {
    filteredLaptops = laptopList;
  } else {
    filteredLaptops = laptopList.filter(
      (laptop) => laptop.brand.toLowerCase() === selectedBrand
    );
  }

  renderLaptops(filteredLaptops);
}

function searchLaptops() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const filteredLaptops = laptopList.filter(
    (laptop) =>
      laptop.laptopName.toLowerCase().includes(searchTerm) ||
      laptop.brand.toLowerCase().includes(searchTerm)
  );

  renderLaptops(filteredLaptops);
}
renderLaptops(laptopList);

const sortedLaptopList = laptopList.sort((a, b) => b.rating - b.rating);

const highestRatedLaptop = sortedLaptopList[9];
const highestRatedLaptop2 = sortedLaptopList[3];

const card1Img = document.querySelector(".card1 .imgBox img");
const card1Title = document.querySelector(".card1 .contentBox h3");
const card1Diskon = document.querySelector(".card1 .contentBox .diskon");
const card1Price = document.querySelector(".card1 .contentBox .price");
const card1BuyLink = document.querySelector(".card1 .contentBox .buy");

const card2Img = document.querySelector(".card2 .imgBox img");
const card2Title = document.querySelector(".card2 .contentBox h3");
const card2Diskon = document.querySelector(".card2 .contentBox .diskon");
const card2Price = document.querySelector(".card2 .contentBox .price");
const card2BuyLink = document.querySelector(".card2 .contentBox .buy");

card1Img.src = highestRatedLaptop.imageLink;
card1Title.textContent = highestRatedLaptop.laptopName;
card1Diskon.textContent = `Rp ${highestRatedLaptop.rentPrice}`;
card1Price.textContent = `Rp ${highestRatedLaptop.rentPrice}`;
card1BuyLink.href = "checkout.html";

card2Img.src = highestRatedLaptop2.imageLink;
card2Title.textContent = highestRatedLaptop2.laptopName;
card2Diskon.textContent = `Rp ${highestRatedLaptop2.rentPrice}`;
card2Price.textContent = `Rp ${highestRatedLaptop2.rentPrice}`;
card2BuyLink.href = "checkout.html";

//ini intro
document.addEventListener("DOMContentLoaded", function () {
  const introContainer = document.querySelector(".intro");
  introContainer.classList.add("animated");

  introContainer.addEventListener("animationend", function () {
    introContainer.style.display = "none";
  });
});
