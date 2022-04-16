let buttons = document.querySelectorAll(".btn");
let storeItems = document.querySelectorAll(".store-item");
let form = document.querySelector("form");
let input = document.querySelector(".form-control");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    let filter = e.target.dataset.filter;
    if (filter === "all") {
      storeItems.forEach(function (item) {
        item.style.display = "block";
      });
    } else if (filter === "cakes") {
      storeItems.forEach(function (item) {
        if (item.classList.contains("cakes")) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    } else if (filter === "cupcakes") {
      storeItems.forEach(function (item) {
        if (item.classList.contains("cupcakes")) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    } else if (filter === "sweets") {
      storeItems.forEach(function (item) {
        if (item.classList.contains("sweets")) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    } else if (filter === "doughnuts") {
      storeItems.forEach(function (item) {
        if (item.classList.contains("doughnuts")) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let search = input.value.toLowerCase();
  console.log(search);

  if (search === "" || !search || search === "all" || search === "everything") {
    storeItems.forEach(function (item) {
      item.style.display = "block";
    });
  }
  if (search === "cakes" || search === "cake") {
    storeItems.forEach(function (item) {
      if (item.classList.contains("cakes")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  } else if (search === "cupcakes" || search === "cupcake") {
    storeItems.forEach(function (item) {
      if (item.classList.contains("cupcakes")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  if (search === "sweets" || search === "sweet") {
    storeItems.forEach(function (item) {
      if (item.classList.contains("sweets")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  if (search === "doughnuts" || search === "doughnut") {
    storeItems.forEach(function (item) {
      if (item.classList.contains("doughnuts")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
});
