var listOrder = [];

$('.minus-btn').on('click', function(e) {
    		e.preventDefault();
    		var $this = $(this);
    		var $input = $this.closest('div').find('input');
    		var value = parseInt($input.val());

    		if (value > 1) {
    			value = value - 1;
    		}
        else {
    			value = 0;
    		}
        $input.val(value);
        displayShoppingCart();
});
$('.plus-btn').on('click', function(e) {
    		e.preventDefault();
    		var $this = $(this);
    		var $input = $this.closest('div').find('input');
    		var value = parseInt($input.val());

    		if (value < 100) {
      		value = value + 1;
    		}
        else {
    			value = 100;
    		}
    		$input.val(value);
        displayShoppingCart();
});

function displayShoppingCart(){
  var orderedProducts = document.getElementById('orderedProductsTblBody');

  while(orderedProducts.rows.length > 0){
    orderedProducts.deleteRow(0);
  }

  var cart_total_price = 0;

  for(var product in listOrder){
    var row = orderedProducts.insertRow();

    var cellName = row.insertCell(0);
    var cellDescription = row.insertCell(1);
    var cellPrice = row.insertCell(2);
    cellPrice.align="right";
   //fill cells with values from current product object of our array
    cellName.innerHTML = listOrder[product].Name;
    cellDescription.innerHTML = listOrder[product].Description;
    cellPrice.innerHTML = listOrder[product].Price;
    cart_total_price+=listOrder[product].Price;
  }

  document.getElementById("showcart").innerHTML=cart_total_price.toFixed(2);
  $("#checkout").on("click", function(){
    $(".popup-overlay, .popup-content").addClass("active");
    $("#totalprice").html("RM " +cart_total_price.toFixed(2));
  });
  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked
  $(".close, .popup-overlay").on("click", function(){
    $(".popup-overlay, .popup-content").removeClass("active");
  });
}

function AddtoCart(name,description,price){
       //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
       var singleProduct = {};
       //Fill the product object with data
       singleProduct.Name=name;
       singleProduct.Description=description;
       singleProduct.Price=price;
       //Add newly created product to our shopping cart
       listOrder.push(singleProduct);
       //call display function to show on screen
       displayShoppingCart();
}

function RemoveFromCart(){
    var singleProduct = {};
    singleProduct.Name= "";
    singleProduct.Description="";
    singleProduct.Price="";
    listOrder.pop(singleProduct);

    for(var product in listOrder){
      var row = orderedProducts.deleteRow();

      var cellName = row.deleteCell(0);
      var cellDescription = row.deleteCell(1);
      var cellPrice = row.deleteCell(2);
      cellPrice.align="right";
     //fill cells with values from current product object of our array
      cellName.innerHTML = "";
      cellDescription.innerHTML = "";
      cellPrice.innerHTML = "";
      cart_total_price-=listOrder[product].Price;
    }
    displayShoppingCart();
}
