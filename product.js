var productContainer = document.getElementById('product-container');

    products.forEach(function(product) {
      var productElement = document.createElement('div');
      productElement.className = 'product';
  
      var imageElement = document.createElement('img');
      imageElement.className = 'product-image';
      imageElement.src = product.productImage;
      imageElement.alt = product.productName;
      productElement.appendChild(imageElement);
  
      var detailsElement = document.createElement('div');
      detailsElement.className = 'product-details';
  
      var nameElement = document.createElement('div');
      nameElement.className = 'product-name';
      nameElement.textContent = product.productName;
      detailsElement.appendChild(nameElement);
  
      var priceElement = document.createElement('div');
      priceElement.className = 'product-price';
      priceElement.textContent = 'Price: Rp. ' + product.productPrice ;
      detailsElement.appendChild(priceElement);
  
      var descriptionElement = document.createElement('div');
      descriptionElement.className = 'product-description';
      descriptionElement.textContent = product.productDescription;
      detailsElement.appendChild(descriptionElement);
  
      productElement.appendChild(detailsElement);
  
      productContainer.appendChild(productElement);
    });