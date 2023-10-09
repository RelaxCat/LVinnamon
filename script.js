$(function() {
  // HEADER FOOTER
  $("#header").load("../model/header.html", function() {
  });

  $("#footer").load("../model/footer.html", function() {
  });

  // SCROLLING
  window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('minimized');
    } else {
        header.classList.remove('minimized');
    }
  });

  // SLIDER
  $(document).ready(function() {
    var slider = $('.slider');
    var slides = $('.slides');
    var prevBtn = $('.prev-btn');
    var nextBtn = $('.next-btn');
    
    var slideIndex = 0;
    
    function prevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = slides.children().length - 1;
      }
      updateSlidePosition();
    }
   
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= slides.children().length) {
        slideIndex = 0;
      }
      updateSlidePosition();
    }
   
    function updateSlidePosition() {
      var slideWidth = slider.width();
      var slidePosition = -slideIndex * slideWidth;
      slides.animate({
        'margin-left': slidePosition + 'px'
      }, 500);
    }
 
    prevBtn.on('click', prevSlide);
    nextBtn.on('click', nextSlide);
 
    setInterval(nextSlide, 5000);
  }); 

  // GALLERY
  window.addEventListener('load', function() {
    const images = document.querySelectorAll('.gallery img');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
  
    images.forEach(function(image) {
      image.addEventListener('click', function() {
        const popup = document.createElement('div');
        popup.classList.add('popup');
  
        const popupImage = document.createElement('img');
        popupImage.src = this.src;
        popupImage.alt = this.alt;
  
        const closeButton = document.createElement('span');
        closeButton.classList.add('close');
        closeButton.innerHTML = '&times;';
  
        popup.appendChild(popupImage);
        popup.appendChild(closeButton);
        overlay.appendChild(popup);
  
        overlay.classList.add('open');
  
        closeButton.addEventListener('click', function() {
          overlay.classList.remove('open');
          overlay.innerHTML = '';
        });
      });
    });
  });

    // PRODUCT-DISPLAY
    var productTemplate = `<img src="{productImage}" alt="" class="product-img">
                          <h6 class="product-name"></h6>
                          <p class="product-desc"></p>
                          <p class="product-price"></p>`

    var cakeContainer = document.getElementById("cake-container");
    var cookieContainer = document.getElementById("cookie-container");
    var teaContainer = document.getElementById("tea-container");
    var coffeeContainer = document.getElementById("coffee-container");

    function createProductCard(product) {
      var card = document.createElement("div");
      card.classList.add("product-card");

      var productHTML = productTemplate
        .replace("{productImage}", product.productImage);
      card.innerHTML = productHTML;

      card.querySelector(".product-name").textContent = product.productName;
      card.querySelector(".product-desc").textContent = product.productDescription;
      card.querySelector(".product-price").textContent = "Rp " + product.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

      return card;
    }

    function displayProductMenu(products, container) {
      container.innerHTML = "";

      products.forEach(function (product) {
        var card = createProductCard(product);
        container.appendChild(card);
      });
    }

    var cakeProducts = products.filter(function (product) {
      return product.productCategory === "Cake";
    });
    displayProductMenu(cakeProducts, cakeContainer);

    var cookieProducts = products.filter(function (product) {
      return product.productCategory === "Cookie";
    });
    displayProductMenu(cookieProducts, cookieContainer);

    var teaProducts = products.filter(function (product) {
      return product.productCategory === "Tea";
    });
    displayProductMenu(teaProducts, teaContainer);

    var coffeeProducts = products.filter(function (product) {
      return product.productCategory === "Coffee";
    });
    displayProductMenu(coffeeProducts, coffeeContainer);

  });
  
// REGISTER
  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let error = false;
    
    let username = document.getElementById("username").value.trim();
    let address = document.getElementById("address").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("con-password").value.trim();
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let tos = document.getElementById("tos").checked;
    
    // USERNAME
    if (username.length === 0) {
      error = true;
      alert("Username cannot be empty");
      return;
    }
    if (username.length < 5 || username.length > 15) {
      error = true;
      alert("Username length must be between 5 and 15 characters!");
      return;
    }
    
    // ADDRESS
    if (!address.startsWith("Jl. ")) {
      error = true;
      alert("Address must start with 'Jl.'!");
      return;
    }
    
    // EMAIL
    if (!email.endsWith("@gmail.com")) {
      error = true;
      alert("Email must end with @gmail.com!");
      return;
    }
    
    // PASSWORD
    if (!validatePassword(password)) {
      error = true;
      return;
    }
    
    if (password !== confirmPassword) {
      error = true;
      alert("Your passwords do not match!");
      return;
    }
    
    // GENDER
    if (!male && !female) {
      error = true;
      alert("Gender cannot be empty");
      return;
    }
    
    // TOS
    if (!tos) {
      error = true;
      alert("You must agree to the terms of service before registering");
      return;
    }
    
    if (!error) {
      alert("Registration Successful!\n\nWelcome, " + username);
      window.location.href = "index.html";
    }
    
    document.getElementById("registrationForm").reset();
  });

  function validatePassword(password) {
    if (password.length < 5 || password.length > 10) {
      alert("Password length must be between 5 and 10!");
      return false;
    }

    let hasNumber = false;
    let hasAlphabet = false;
    for (let i = 0; i < password.length; i++) {
      if (isNaN(password[i])) {
        hasAlphabet = true;
      }
      else{
        hasNumber = true;
      }
      if (hasNumber && hasAlphabet) {
        return true;
      }
    }
    alert("Password must be alphanumeric!");
    return false;
  }
