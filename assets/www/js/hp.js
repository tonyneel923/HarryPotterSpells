$(document).ready(function() {
    
    
    
    $("h3").hide();
    $("#my_image").hide();
    
    //What happens if certain spell is cast by clicking
    $("h2").click(function()
    {
	    document.getElementById('input');
	    var value = document.getElementById('input').value;
	    
	    
	    if (value=="Avada Kedavra" || value== "avada kedavra") {
	   	    $("img").show();
        	$("#my_image").attr("src","img/green_skull.gif");
	   	   
	       // Create Media object from src
	        //play_audio('android_asset/www/ghost.ogg');   
	        
	    }
	    
	    else if (value=="Incendio" || value=="incendio") {
	        $("img").show();
	        $("#my_image").attr("src","img/fire.gif");
	      
	        // Create Media object from src
	        //play_audio('android_asset/www/fire_sound.mp3');
	
	    }
	    
	    else{
	        $(this).next().slideToggle(300);
	    }
    });
    
    


	


	 function play_audio(src) {
            // Create Media object from src
            my_media = new Media(src);

            // Play audio
            my_media.play();
     }
    
    
    
});