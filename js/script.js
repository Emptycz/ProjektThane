function changeNav() {
    if($( "#mySidenav" ).css( "width") == "250px"){
    	$( "#mySidenav" ).css( "width", "0" );
    }
    else
    {
    	$( "#mySidenav" ).css( "width", "250px" );
    }
}

window.onload = function loaded_body(){
    
    window.in_width = window.innerWidth; //šířka okna - prostor k dispozici - mění se
    window.in_height = window.innerHeight;

	keepSize();


	window.onresize = function(event) { //při změně velikosti okna

		window.in_width = window.innerWidth; //šířka okna - prostor k dispozici - mění se
    	window.in_height = window.innerHeight;

   		keepSize();

	};

}


function keepSize(){

	base = window.in_width / 2;

	max_h = window.in_height;

	if(max_h < 500){
		max_h = 500;
	}

	$( ".content" ).css("visibility", "visible");

	//všechny obrázky budou stejně vysoké jako ten nejnižší z nich - zmenší se oříznutím

	var my_height = 999999999;

	$('.img_grid .grid img').each(function( i ) {

		if(this.height < my_height){
			my_height = this.height;
		}
		
	});

	my_height -= 5;

	$( ".img_grid .grid li" ).css("height", my_height + "px");
	
	var my_height = 999999999;

	$('.lead_img_grid .grid img').each(function( i ) {

		if(this.height < my_height){
			my_height = this.height;
		}
	
	});

	my_height -= 5;

	$( "li.side_li" ).css("height", my_height + "px");
	
}