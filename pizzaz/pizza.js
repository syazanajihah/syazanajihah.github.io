$("#orderthis1").click(function(){
	var order = $(this).val();
	var add;

	if(order == 'Pepperoni'){
		add += order;
		$('#showcart').html('Pepperoni');
	}
})

$("#orderthis2").click(function(){
	var order = $(this).val();
	var add;

	if (order == 'Meat-mania') {
		add += order;
		$('#showcart').html('Meat-mania');
	}
})

$("#orderthis3").click(function(){
	var order = $(this).val();
	var add;

	if (order == 'Meatasaurus') {
		add += order;
		$('#showcart').html('Meatasaurus');
	}
})

$("#orderthis4").click(function(){
	var order = $(this).val();
	var add;

	if (order == 'Extravaganza') {
		add += order;
		$('#showcart').html('Extravaganza');
	}
})

$("#orderthis5").click(function(){
	var order = $(this).val();
	var add;

	if (order == 'Vegie-Galore') {
		add += order;
		$('#showcart').html('Vegie-Galore');
	}
})

$("#orderthis6").click(function(){
	var order = $(this).val();
	var add;

	if (order == 'Baked-Perfection') {
		add += order;
		$('#showcart').html('Baked-Perfection');
	}
})
