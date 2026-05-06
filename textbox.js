function setScroll(yScroll)
			{
				window.scroll(0, yScroll);
			}

			/*these entire next line of codes deal with the iframe text box talking to the parent document in order to get the right amount of letters currently inside the frame box to be displayed in the wordscounter*/
			var sentenceInput=document.getElementById("sentenceInput");
			var wordCounter= parent.document.getElementById("wordCounter");
			var content=sentenceInput.innerText;
			var characters=content.length;
			var input_textbox_length="/750";
      var submitButton=parent.document.getElementById("pronounce");
      var stopButton=parent.document.getElementById("stop");

			wordCounter.innerText = "h'sikra "+characters+input_textbox_length;

			sentenceInput.onkeyup=function(event) {

				if(characters> 1500/2){
					sentenceInput.innerText= sentenceInput.innerText.substring(0,1500/2);
				  }

				//console.log("gokaka: "+ content.length);
				content=sentenceInput.innerText;
				characters=content.length;

				wordCounter.innerText = "h'sikra "+characters+input_textbox_length;




		   };


      function redding(x) {


          if(x.className=="sentence"){
			  
			 x.style.color = "red"; 
		  }
            
          }

      function blacking(x) {


            if(x.className=="sentence"){
			  
			  x.style.color="gray";
		  }
            
          }

     function restart(x){
		 
		 if(x.className=="sentence"){
			 
			       
      content=sentenceInput.innerText;
      var btn=parent.document.getElementById('restarter');
       //console.log(x.innerText+"_btn_"+btn.innerHTML)


      btn.value=content.substring(content.indexOf(x.innerText));
       //console.log(content.indexOf(x.innerText));
       btn.click(); 
			 
			 
		 }
 

     }