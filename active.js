function setDefaultSelection() {
    var selectedNavigation = localStorage.getItem('selectedNavigation');
    var defaultNavigation = document.querySelector('.navbar-item[value="home"]');
  
    if (selectedNavigation) {
      var navigationItem = document.querySelector('.navbar-item[value="' + selectedNavigation + '"]');
      if (navigationItem) {
        navigationItem.classList.add('active');
        return;
      }
    }
  
    defaultNavigation.classList.add('active');
  }
  
  var navigationList = document.querySelectorAll('.navbar-item');
  navigationList.forEach(function (navigation) {
    navigation.addEventListener('click', function () {
      var selectedNavigation = navigation.getAttribute('value');
  
      navigationList.forEach(function (item) {
        item.classList.remove('active');
      });
  
      navigation.classList.add('active');
      localStorage.setItem('selectedNavigation', selectedNavigation);
    });
  });
  
  setDefaultSelection();
  
let dropdownTimeout;
const dropdown = document.querySelector('.product-dropdown');

function showDropdown() {
    clearTimeout(dropdownTimeout);
    var dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = 'block';
}

function hideDropdown() {
    dropdownTimeout = setTimeout(function() {
      var dropdown = document.querySelector('.dropdown-content');
      dropdown.style.display = 'none';
    }, 300);
}