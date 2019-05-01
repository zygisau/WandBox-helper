chrome.runtime.onMessage.addListener(
    function(request) {
      if( request.message === "change_colors" ) {  
        // Recolor background
        document.getElementsByClassName('output-window')[0].style.backgroundColor = 'white';

        // Recolor text background
        let textArray = document.getElementsByClassName('output-window')[0].getElementsByTagName("pre");
        for (let textNode in textArray) {
            // skip loop if the property is from prototype
            if (!textArray.hasOwnProperty(textNode)) continue;

            textArray[textNode].style.backgroundColor = 'white';

            // Recolor output stream text color
            if(textArray[textNode].className === "StdOut")
                textArray[textNode].style.color = 'black';
        }
      }
    });