$(".orderthis").click(function(){
	var order = $(this).val();
	
	if(order == 'Pepperoni'){

		$('#showcart').html('Pepperoni');
	}
	else if (order == 'Meat-mania') {
		$('#showcart').html('Meat-mania');
	}
	else if (order == 'Meatasaurus') {
		$('#showcart').html('Meatasaurus');
	}
	else if (order == 'Extravaganza') {
		$('#showcart').html('Extravaganza');
	}
	else if (order == 'Vegie-Galore') {
		$('#showcart').html('Vegie-Galore');
	}
	else if (order == 'Baked-Perfection') {
		$('#showcart').html('Baked-Perfection');
	}


})
