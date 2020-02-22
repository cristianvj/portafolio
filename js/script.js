$(document).ready(function(){
 	 $(".button-collapse").sideNav();
 	 $('.parallax').parallax();
 	 $('.scrollspy').scrollSpy();

 	var options = [ 
 	 	{selector: '#id_servicios1', offset: 20, callback: 
 	 		function() { 
 	 			Materialize.fadeInImage("#id_servicios1"); 
 	 		} 
 	 	},
 	 	{selector: '#id_servicios2', offset: 20, callback: 
 	 		function() { 
 	 			Materialize.fadeInImage("#id_servicios2"); 
 	 		} 
 	 	}, 
 	 	{selector: '#id_servicios3', offset: 20, callback: 
 	 		function() { 
 	 			Materialize.fadeInImage("#id_servicios3"); 
 	 		} 
 	 	}, 
 	 	{selector: '#id_servicios4', offset: 20, callback: 
 	 		function() { 
 	 			Materialize.fadeInImage("#id_servicios4"); 
 	 		} 
 	 	}, 
 	 	{selector: '#id_servicios5', offset: 20, callback: 
 	 		function() { 
 	 			Materialize.fadeInImage("#id_servicios5"); 
 	 		} 
 	 	}, 
 	 	{selector: '#id_servicios6', offset: 20, callback: 
 	 		function() { 
 	 			Materialize.fadeInImage("#id_servicios6"); 
 	 		} 
 	 	} 	 	 
 	]; Materialize.scrollFire(options);
})

