// var addpizza = ["Pepperoni", "Meat-mania", "Meatasaurus", "Extravaganza", "Vegie-Galore", "Baked-Perfection"]
//array that hold all ordered products
var listPizzaAdd = [];

function displayShoppingCart(){
		var orderedProducts = document.getElementById('orderedProductsTblBody');

		while(orderedProducts.rows.length > 0){
			orderedProducts.deleteRow(0);
		}

	//variable that hold total price
		var cart_total_price = 0;

		for(var product in listPizzaAdd){
			var row = orderedProducts.insertRow();

			var cellName = row.insertCell(0);
			var cellDescription = row.insertCell(1);
			var cellPrice = row.insertCell(2);
			cellPrice.align="right";
		 //fill cells with values from current product object of our array
			cellName.innerHTML = listPizzaAdd[product].Name;
			cellDescription.innerHTML = listPizzaAdd[product].Description;
			cellPrice.innerHTML = listPizzaAdd[product].Price;
			cart_total_price+=listPizzaAdd[product].Price;
		}

			document.getElementById("showcart").innerHTML=cart_total_price;
}

function AddtoCart(name,description,price){
       //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
       var singleProduct = {};
       //Fill the product object with data
       singleProduct.Name=name;
       singleProduct.Description=description;
       singleProduct.Price=price;
       //Add newly created product to our shopping cart
       listPizzaAdd.push(singleProduct);
       //call display function to show on screen
       displayShoppingCart();
}

//
// $("#orderthis1").click(function(){
// 	var order = $(this).val();
// 	var first = addpizza[0];
//
// 	if(order == 'Pepperoni'){
// 		listPizzaAdd.push(first);
// 		// $('#showcart').html('Pepperoni');
// 		listPizza(listPizzaAdd);
// 	}
// })
// $("#orderthis2").click(function(){
// 	var order = $(this).val();
// 	var second = addpizza[1];
//
// 	if (order == 'Meat-mania') {
// 		listPizzaAdd.push(second);
// 		// $('#showcart').html('Meat-mania');
// 		listPizza(listPizzaAdd);
// 	}
// })
// $("#orderthis3").click(function(){
// 	var order = $(this).val();
// 	var third = addpizza[2];
//
// 	if (order == 'Meatasaurus') {
// 		$('#showcart').html('Meatasaurus');
// 	}
// })
// $("#orderthis4").click(function(){
// 	var order = $(this).val();
// 	var fourth = addpizza[3];
//
// 	if (order == 'Extravaganza') {
// 		$('#showcart').html('Extravaganza');
// 	}
// })
// $("#orderthis5").click(function(){
// 	var order = $(this).val();
// 	var fifth = addpizza[4];
//
// 	if (order == 'Vegie-Galore') {
// 		$('#showcart').html('Vegie-Galore');
// 	}
// })
// $("#orderthis6").click(function(){
// 	var order = $(this).val();
// 	var sixth = addpizza[5];
//
// 	if (order == 'Baked-Perfection') {
// 		$('#showcart').html(sixth);
// 	}
// })
