$(document).ready(function() {
    
    var watchID = null;
    
    function startWatch() {

        // Update acceleration every 3 seconds
        var options = { frequency: 3000 };

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }
    
    function stopWatch() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        }
    }
    
    function onSuccess(acceleration) {
        var element = document.getElementById('accelerometer');
        element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                            'Acceleration Y: ' + acceleration.y + '<br />' +
                            'Acceleration Z: ' + acceleration.z + '<br />' +
                            'Timestamp: '      + acceleration.timestamp + '<br />';
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }
    
    $("h3").hide();
    
    //What happens if certain spell is cast by clicking
    $("h2").click(function()
    {
    document.getElementById('input');
    var value = document.getElementById('input').value;
    
    if (value=="Avada Kedavra" || value== "avada kedavra") {
   	    show_image("img/green_skull.gif","gif of green skull");
   	    
       // Create Media object from src
        play_audio('android_asset/ghost.ogg');   
        
    }
    
    else if (value=="Incendio" || value=="incendio") {
        show_image("img/fire.gif","gif of fire");
        
        // Create Media object from src
        play_audio('android_asset/fire_sound.mp3');

    }
    else if (value=="Silencio") {
        //code
    }
    else{
        $(this).next().slideToggle(300);
    }
    });
    
    //loads image based on the string variable created by Speech to Text
    function show_image(src, alt) {
        var img = document.createElement("img");
        img.src = src;
        img.width = 400;
        img.height = 300;
        img.alt = alt;
      
        // This next line will just add it to the <body> tag
        document.body.appendChild(img);   
}


	 function play_audio(src) {
            // Create Media object from src
            my_media = new Media(src);

            // Play audio
            my_media.play();
     }
    
    
    
});