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

function updatePrice() {
  const selectedLaptop = document.getElementById("selected").value;
  const hargaInput = document.getElementById("harga");
  const laptop = laptopList.find(
    (laptop) => laptop.laptopName.toLowerCase() === selectedLaptop.toLowerCase()
  );
  if (laptop) {
    hargaInput.value = "Rp " + laptop.rentPrice;
  } else {
    hargaInput.value = "";
  }
}

function submitForm() {
  const name = document.getElementById("name").value;
  const nomor = document.getElementById("nomor").value;
  const selectedLaptop = document.getElementById("selected").value;
  const harga = parseFloat(
    document.getElementById("harga").value.replace("Rp ", "")
  );
  const durasi = parseInt(document.getElementById("durasi").value);

  if (
    !name ||
    !nomor ||
    !selectedLaptop ||
    isNaN(harga) ||
    isNaN(durasi) ||
    durasi < 1 ||
    durasi > 30
  ) {
    alert("Mohon isi semua form dengan benar!");
    return;
  }

  if (!/^\d+$/.test(nomor)) {
    alert("Nomor identitas harus berupa angka!");
    return;
  }

  document.getElementById("result-name").innerText = name;
  document.getElementById("result-nomor").innerText = nomor;
  document.getElementById("result-laptop").innerText = selectedLaptop;
  document.getElementById("result-harga").innerText = "Rp" + " " + harga;
  document.getElementById("result-durasi").innerText = durasi +  "Hari";
  const total = harga * durasi;
  document.getElementById("result-total").innerText = "Rp" +" " + total;
  document.getElementById("result-container").style.display = "block";
  document.getElementById("form-container").style.display = "none";
}

function ajukanForm() {
  window.location.href = "home.html";
  alert("Pesanan telah diajukan");
}

function iseng() {
  alert("Syarat Dan Ketentuan Gak Disuruh Buat");
}
