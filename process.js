
meSpeak.loadConfig("mespeak_config.json");
meSpeak.loadVoice("voices/en/en.json");
//console.log(PageIndex);

var spoken;
var beginingText="";
var currentPlay=0;
var waitTime;
var stopped=false;
var word_words=0;//amount of words in sentence
var input_textbox=document.getElementById("input_textbox");
console.log(input_textbox);
var textInput="";
var uipa="";
//var ipa_input=document.getElementById("ipa_input");
var biggerPom;
var highlighterBox=document.getElementById('highlightBox');
var markingsNames=[{'mark':"(ʙ)",'name':"affixer"},{'mark':"(ʙʙ)",'name':"classer"},
                {'mark':"(ʙʙʙ)",'name':"elongation"},{'mark':"(ʙʙʙʙ)(ʙʙʙʙ)",'name':"reduplicator"},
                {'mark':"ʙ()ʙ()ʙ",'name':"space"}, {'mark':"(ʙ1ʙ1ʙ1ʙ)",'name':"glotalStop"},
                {'mark':"ʙ(ʙ)ʙ",'name':"fullStop"},{'mark':"ʙ(ʙʙ)ʙ",'name':"questionMark"},
                {'mark':"ʙ(ʙʙʙ)ʙ",'name':"exclamation"},{'mark':"ʙ(ʙʙʙʙ)ʙ",'name':"semiColon"},
                {'mark':"ʙ(ʙʙʙʙʙ)ʙ",'name':"colon"}];

var markingsSymbols=[{'mark':"(ʙ)", 'symbol':  '́'  },{'mark':"(ʙʙ)", 'symbol': '̀' },
                {'mark':"(ʙʙʙ)", 'symbol':  '̄'  },{'mark':"(ʙʙʙ)(ʙʙʙ)", 'symbol':"q"},
                {'mark':"ʙ()ʙ()ʙ", 'symbol':" "}, {'mark':"(ʙ(1(ʙ(1)ʙ)1)ʙ)",'symbol':""},
                {'mark':"ʙ(ʙʉ)ʙ",'symbol':"."},{'mark':"ʙ(ʙʙʉ)ʙ",'symbol':"?"},
                {'mark':"ʙ(ʙʙʙʉ)ʙ",'symbol':"!"},{'mark':"ʙ(ʙʙʙʙʉ)ʙ",'symbol':";"},
                {'mark':"ʙ(ʙʙʙʙʙʉ)ʙ",'symbol':":"}];

var markingsPunctuations=[{'punct':".", 'mark':"ʙ(ʙʉ)ʙ"},{'punct':"?", 'mark':"ʙ(ʙʙʉ)ʙ"},
                {'punct':"!", 'mark':"ʙ(ʙʙʙʉ)ʙ"},{'punct':";", 'mark':"ʙ(ʙʙʙʙʉ)ʙ"},
                {'punct':":", 'mark':"ʙ(ʙʙʙʙʙʉ)ʙ"}];//commas not included


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

input_textbox.onload = function(){


	input_textbox=document.getElementById("input_textbox").contentWindow.document.body;

};

input_textbox=input_textbox.contentWindow.document.getElementById("sentenceInput");

// download function from Matěj Pokorný: https://stackoverflow.com/questions/2897619/using-html5-javascript-to-generate-and-save-a-file/18197511#18197511
function download() {
  var pom = document.createElement('a');
  pom.setAttribute('href', spoken);
  pom.setAttribute('download', "spoken.wav");

  if (document.createEvent) {
	  var event = document.createEvent('MouseEvents');
	  event.initEvent('click', true, true);
	  pom.dispatchEvent(event);
  }
  else {
	  pom.click();
  }
  biggerPom=pom;

}



function clear_download_button() {
  document.getElementById("download-button").disabled = true;
}

function copyToClipboard(text) {
  t = document.createElement('input');
  t.value = text;
  document.body.appendChild(t);
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
}

function copy_link_button() {
  uipa = input_textbox.innerText;
  url = window.location.href.split('?')[0] + "?w=" + uipa;
  copyToClipboard(url);
}



function stopper(){
  waitTime=0;
  
	 var sentences=document.getElementById("input_textbox").contentWindow.document.getElementsByClassName("sentence");
	 
	 
	
	for(var ix=0;sentences.length>0;ix++){
		//console.log("sentences_Length_"+sentences.length);
		//console.log("ix_"+ix);
		//console.log("sentences_"+sentences[0].innerHTML);
		sentences[0].style.color="black"; 
        sentences[0].className="null";	 		
	 

	}		
	
 
  
  // Set a fake timeout to get the highest timeout id
var highestTimeoutId = setTimeout(";");
for (var i = 0 ; i < highestTimeoutId ; i++) {
    clearTimeout(i);
}

  meSpeak.stop();
  stopped=true;
  document.getElementById("pronounce").disabled = false;
  hideHighlightBox();
  input_textbox.contentEditable = "true";
  word_words=0;


}

function restart(){
  stopper();
  input_textbox.innerText=beginingText;
  input_textbox.contentEditable = "false";
  process(restarter.value);

}



function getIndicesOf(searchStr, src, caseSensitive) {
 //console.log ("getIndicesOf(searchStr, src, caseSensitive)_enter _searchStr:_"+searchStr+"_src_"+src+"_caseSensitive_"+caseSensitive);

    caseSensitive=caseSensitive || false;
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        src = src.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = src.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    //console.log ("getIndicesOf(searchStr, src, caseSensitive)_Leave_"+indices);

    return indices;



}



function highlightInsideHighlighterBox(text,occurence) {




  occurence=occurence || 0;

  var inputText = document.getElementById("highlightBox");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  var wordOccurrencies=[];

 //console.log ("(highlightInsideHighlighterBox)enter _TEXT:_"+text+"_occurence_"+occurence+"_innerHTML_"+innerHTML);

  if (index >= 0 && occurence<1) {

    //console.log("ting");

   innerHTML = innerHTML.substring(0,index) + "<u>" + innerHTML.substring(index,index+text.length) + "</u>" + innerHTML.substring(index + text.length);
   inputText.innerHTML = innerHTML;

  }else{

    //console.log("tingy");
    wordOccurrencies=getIndicesOf(text, innerHTML, true);

    index=wordOccurrencies[occurence];

    innerHTML = innerHTML.substring(0,index) + "<u>" + innerHTML.substring(index,index+text.length) + "</u>" + innerHTML.substring(index + text.length);
    inputText.innerHTML = innerHTML;


  }
 //console.log ("(highlightInsideHighlighterBox)Leave _innerHTML:_"+innerHTML+"_wordOccurrencies_"+wordOccurrencies);

}

function sentenceSpanner(text,occurence,src) {

  occurence=occurence || 0; //keep track of same words so they all get tagged

  var inputText = src;
  var innerHTML = src;
  var index = innerHTML.indexOf(text);
  var wordOccurrencies=[];
  var result="";

 //console.log ("(sentenceSpanner)enter _TEXT:_"+text+"_occurence_"+occurence+"_src_"+src);

  if (index >= 0 && occurence<1) {

    //console.log("ting");

   result ="<p class='sentence' onmouseover=\"redding(this)\" onmouseout=\"blacking(this)\" ondblclick=\"restart(this)\"  style=\"color: gray;\" >" + innerHTML.substring(index,index+text.length) + "</p>" ;

  }else{

    //console.log("tingy");
    wordOccurrencies=getIndicesOf(text, innerHTML, true);

    index=wordOccurrencies[occurence];

    result ="<p class='sentence' onmouseover=\"redding(this)\" onmouseout=\"blacking(this)\" style=\"color: gray;\" >" + innerHTML.substring(index,index+text.length) + "</p>" ;



  }
//console.log ("(sentenceSpanner)leave:_"+result);

return result;

}

function dehighlightInsideHighlighterBox() {

 //console.log ("(dehighlightInsideHighlighterBox)enter : "+highlighterBox.innerHTML);

  var innerHTML = highlighterBox.innerHTML;
  var indexBegin = innerHTML.indexOf("<u>");
  var middler=innerHTML.indexOf("<u>")+"<u>".length;
  var indexEnd = innerHTML.indexOf("</u>")+("</u>".length);

  if (indexBegin >= 0 && innerHTML.indexOf("&nbsp;")==-1) {
   // console.log ("(dehighlightInsideHighlighterBox)enter : "+highlighterBox.innerHTML);

     innerHTML = innerHTML.substring(0,indexBegin)+innerHTML.substring(middler,innerHTML.indexOf("</u>"))+" "+innerHTML.substring(indexEnd,innerHTML.length);
     highlighterBox.innerHTML = innerHTML;

  }else if(indexBegin >= 0){

    //console.log ("(dehighlightInsideHighlighterBox)enter else: "+highlighterBox.innerHTML);
    innerHTML = innerHTML.substring(0,indexBegin)+innerHTML.substring(middler,innerHTML.indexOf("</u>"))+innerHTML.substring(indexEnd,innerHTML.length);
    highlighterBox.innerHTML = innerHTML;
/**best if you add nothing toindex end**/

  }

  //console.log ("(dehighlightInsideHighlighterBox)leave : "+highlighterBox.innerHTML);

}

function preReader(text) {
 //console.log("(preReader)Enter_"+text);

	var workingText=splitByPuntuationWithMarking(text);
  //console.log(workingText);
  var comebefore=0;
  var indeces=[];
  var previous="";
  var products=[];
  var text2=recombineTextFromArrayWithExtraCommas(workingText);


  for(var i=0;i<workingText.length;i++){

      indeces=getIndicesOf(workingText[i],previous,true);
   //console.log("(preReader)during1_"+workingText[i]);

    if(indeces.length==0){

      products.push(sentenceSpanner(workingText[i],0,text2));
      //console.log("(preReader)during2_"+sentenceSpanner(workingText[i],0,text));

    }else if(indeces.length>0){


      products.push(sentenceSpanner(workingText[i],indeces.length-1,text2));
      //console.log("(preReader)during3_"+sentenceSpanner(workingText[i],indeces.length-1,text));

    }


   previous+=workingText[i];

  }

//console.log("(preReader)leave_products_"+products);
  return products;
}


function displayHighlightBox() {

	document.getElementById('highlightBox').style.visibility = 'visible';


}
function hideHighlightBox() {

	document.getElementById('highlightBox').style.visibility = 'hidden';


}

function arrayTextHighlighter() {

	document.getElementById('highlightBox').style.visibility = 'hidden';


}

function loopRepeater() {

	document.getElementById('highlightBox').style.visibility = 'hidden';


}


function secureMarkings(text){
  //marking order: affixer, classer, elongation,reduplicator, exclamation
  //console.log ("(secureMarkings)enter : "+text);

  var markingConfuserHalf;

  var beginings;

  var markingConfuserStart;

  var endings;

  var infiniteStopper=0;

  for(i=0;i<markingsNames.length;i++){

    infiniteStopper=0;
    //console.log("trigger indx is "+ text.indexOf(markingsNames[i]) +" for "+markingsNames[i]);

    while(text.indexOf(markingsNames[i].mark)>0 && infiniteStopper<999){

      //console.log("trigger");

        markingConfuserHalf= text.indexOf(markingsNames[i].mark) + Math.round(markingsNames[i].mark.length/2);

        beginings=text.substring(0,text.indexOf(markingsNames[i].mark));

        markingConfuserStart=text.substring(text.indexOf(markingsNames[i].mark),markingConfuserHalf);

        endings=text.substring(markingConfuserHalf,text.length);

        text=beginings+markingConfuserStart + "+" + endings;

        infiniteStopper++;

    }



  }

   //console.log ("(secureMarkings)leave : "+text);
    return text;

}


function removeWhiteSpaceFromArray(text){
	
	text = text.filter(function(str) {
    return /\S/.test(str);
});
	
	return text;
}


function removeMarkings(text){
  //marking order: affixer, classer, elongation,reduplicator
  //console.log ("(removeMarkings)enter : "+text);

  var markingConfuserSkip;

  var beginings;

  var endings;

  var infiniteStopper=0;

  for(i=0;i<markingsNames.length;i++){

    infiniteStopper=0;
    //console.log("trigger indx is "+ text.indexOf(markingsNames[i].mark) +" for "+markingsNames[i].mark);

    while(text.indexOf(markingsNames[i].mark)>=0 && infiniteStopper<999){

      //console.log("trigger");

        markingConfuserSkip= text.indexOf(markingsNames[i].mark) + markingsNames[i].mark.length;

        beginings=text.substring(0,text.indexOf(markingsNames[i].mark));

        endings=text.substring(markingConfuserSkip,text.length);

        text=beginings+ endings;

        infiniteStopper++;

    }



  }

   // console.log ("(removeMarkings)leave : "+text);
    return text;

}


function sentenceDespanner(text){
  //marking order: affixer, classer, elongation,reduplicator
  //console.log ("(sentenceDespanner)enter : "+text);

  var openingText="<p class='sentence' onmouseover=\"redding(this)\" onmouseout=\"blacking(this)\">";
  var closingText="</p>";

  var markingConfuserSkip;

  var beginings;

  var endings;

  var infiniteStopper=0;

  for(i=0;i<markingsNames.length;i++){

    infiniteStopper=0;
    //console.log("trigger indx is "+ text.indexOf(markingsNames[i].mark) +" for "+markingsNames[i].mark);

    while(text.indexOf(openingText)>=0 && infiniteStopper<999){

      //console.log("trigger");

        markingConfuserSkip= text.indexOf(openingText) + openingText.length;

        beginings=text.substring(0,text.indexOf(openingText));

        endings=text.substring(markingConfuserSkip,text.length - closingText.length);

        text=endings;

        infiniteStopper++;

    }



  }

 //console.log ("(sentenceDespanner)leave : "+text);
    return text;

}


function isAVowel(x){

  //console.log ("(isAVowel)Enter : "+x);

	if(x=="a"||x=="i"||x=="eI"||x=="o"||x=="u"||x=="0"||x=="ɛ"||x=="@"||x=="O" || x==":" || x=="V" ||x=="E" || x=="VV"){

    //console.log ("(isAVowel)leave : true "+x);

		return true;

	}else{

    //console.log ("(isAVowel)leave : false "+x);

		return false;
	}

}

function isALongSound(x){

  //console.log ("(isALongSound)Enter : "+x);

	if(x=="SH" || x=="mm:" || x=="n:n:" || x=="jj" || x=="N"){

    //console.log ("(isALongSound)leave : true "+x);

		return true;

	}else{

    //console.log ("(isALongSound)leave : false "+x);

		return false;
	}

}



function vowelExtensions(text){

 //console.log ("(vowelExtensions)Enter : "+text+"-textLength_"+text.length);
  var TextArray=text.split('');
  var extensions="";

	for(var i=0;i<text.length;i++){

    if(isAVowel(TextArray[i])){

      extensions+="_____";


    }


  }

  text+=extensions;

  //console.log ("(vowelExtensions)leave:-"+text+"-textLength_"+text.length);
  return text;

}


function longSoundExtensions(text){

  //console.log ("(longSoundExtensions)Enter : "+text+"-textLength_"+text.length);
  var TextArray=[];
  var longSoundsArray=["SH", "mm:","n:n:", "jj","1","N"];
  var extensions="";

	for(var i=0;i<longSoundsArray.length;i++){

    TextArray=getIndicesOf(longSoundsArray[i], text, true);

    for(var p=0;p<TextArray.length;p++){

        extensions+="______";

    }


  }

  text+=extensions;

 // console.log ("(longSoundExtensions)leave:-"+text+"-textLength_"+text.length);
  return text;

}




function isADuplicationLetter(src,index){
  //depends on an outside loop

  // console.log ("(isADuplicationLetter)Enter : "+src +"_,_"+index);

	var xArray=src.split("");
	var start=src.indexOf("-") || null;

	//console.log(src +" space "+ index +" space "+ start);
	//as long ass it is the same letters from start to index
	while( (start<xArray.length-1) && xArray[start+1]==xArray[index] && (start<index)){
		//console.log("continuarr checksout");
		start++;

	}
	// if the same latters exist between - and index
	//console.log(src +" space2 "+ index +" space2 "+ start);

	if(start==index){
		// console.log ("(isADuplicationLetter)Leave : True "+src +"_,_"+index);
		return true;

	}else{

    // console.log ("(isADuplicationLetter)Leave : False "+src +"_,_"+index);

		return false;
	}

}

function isAMemberOfTemneAlphabet(text){

  //console.log ("(isAMemberOfTemneAlphabet)enter : "+text);

	var alphabet=["a","m","n","s","e","r","ŋ","ɪ","i","j","θ","t","o","b","d","ɱ","u","l","β","f","ɔ","k","w","x","ɛ","z","c","g",
                "ʌ","y","p","ʂ","ə","h́","ʒ","v","'",   '́'  ,  '̀' ,   '̄' ,"h","-" ];

  var textArray=text.replace(/ /g,'').split('');//remove all white space and split

  var letters=0;

  for(var i=0;i<textArray.length;i++){


      for(var w=0;w<alphabet.length;w++){


      if(textArray[i]== alphabet[w]){

        letters++;
    }


    }


  }



  if(letters>0){

   // console.log ("(isAMemberOfTemneAlphabet)Leave : True "+text +"_Length: "+letters);

   return true;

  }else{

   // console.log ("(isAMemberOfTemneAlphabet)Leave : False "+text+"_Length: "+letters);

   return false;

  }



}

function hasAPunctuation(text){
  var puncts=0;
  //console.log ("(hasAPunctuation)enter : "+text);
  for(var i=0;i<markingsPunctuations.length;i++){

    if(text.indexOf(markingsPunctuations[i].punct)>=0){

      puncts++;

    }

  }

  if(puncts>0){

    return true;

  }else{

   return false;

  }


}

function hasAMark(text){
  var marks=0;

  //console.log ("(hasAMark)enter : "+text);

  for(var i=0;i<markingsPunctuations.length;i++){

    if(text.indexOf(markingsPunctuations[i].mark)>=0){

      marks++;

    }

  }


  if(marks>0){
   // console.log ("(hasAMark)Leave True: "+text+"_"+markingsPunctuations[i].mark);
    return true;


  }else{
   //console.log ("(hasAMark)Leave False: "+text);
   return false;

  }


}


function reverseSpeechToTemne(text){
 
 //console.log ("(reverseSpeechToTemne)enter : "+text);
 if ( !(typeof text === 'string' || text instanceof String) ){
	 
	 console.log("input not a string");
	 return;
 }
 //marking order: affixer, classer, elongation,reduplicator
 

  var beginings;

  var endings;

  var infiniteStopper=0;

  for(i=0;i<markingsSymbols.length;i++){

    infiniteStopper=0;
    //console.log(" trigger indx is "+ text.indexOf(markingsSymbols[i].mark) +" for "+markingsSymbols[i].mark);

    while(text.indexOf( markingsSymbols[i].mark )>-1 && infiniteStopper<1000){


      if(markingsSymbols[i].mark=="(ʙʙʙ)(ʙʙʙ)"){

        //console.log("trigger");

        beginings=text.substring(0,text.indexOf("(ʙ(1(ʙ(1)ʙ)1)ʙ)"));


        endings=text.substring( text.indexOf(markingsSymbols[i].mark) + markingsSymbols[i].mark.length,
                                text.length);

        text=beginings + markingsSymbols[i].symbol + endings;



      }else{



     // console.log("trigger");

        beginings=text.substring(0,text.indexOf(markingsSymbols[i].mark));


        endings=text.substring( text.indexOf(markingsSymbols[i].mark) + markingsSymbols[i].mark.length,
                                text.length);

        text=beginings + markingsSymbols[i].symbol + endings;




      }

     infiniteStopper++;

    }

    }

 
  //console.log ("(reverseSpeechToTemne)leave : "+text);
  return text;

}


function reverseSpeechToTemneForArray(text){
 
 //console.log ("(reverseSpeechToTemneForArray)enter : "+text);
 if ( !(typeof text === 'array' || text instanceof Array) ){
	 
	 console.log("input not a string");
	 return;
 }
 //marking order: affixer, classer, elongation,reduplicator
 
  text=text.filter(function(e){return e});
  
  var beginings;

  var endings;

  var infiniteStopper=0;
  
  for(var p=0;p<text.length;p++){
	  
	  if(isAMemberOfTemneAlphabet(text[p])){
		  
		 //console.log(text[p]);
		for(i=0;i<markingsSymbols.length;i++){

    infiniteStopper=0;
    //console.log(" trigger indx is "+ text[p].indexOf(markingsSymbols[i].mark) +" for "+markingsSymbols[i].mark);

    while(text[p].indexOf( markingsSymbols[i].mark )>-1 && infiniteStopper<1000){


      if(markingsSymbols[i].mark=="(ʙʙʙ)(ʙʙʙ)"){

        //console.log("trigger");

        beginings=text[p].substring(0,text[p].indexOf("(ʙ(1(ʙ(1)ʙ)1)ʙ)"));


        endings=text[p].substring( text[p].indexOf(markingsSymbols[i].mark) + markingsSymbols[i].mark.length,
                                text[p].length);

        text[p]=beginings + markingsSymbols[i].symbol + endings;



      }else{



     // console.log("trigger");

        beginings=text[p].substring(0,text[p].indexOf(markingsSymbols[i].mark));


        endings=text[p].substring( text[p].indexOf(markingsSymbols[i].mark) + markingsSymbols[i].mark.length,
                                text[p].length);

        text[p]=beginings + markingsSymbols[i].symbol + endings;




      }

     infiniteStopper++;

    }

    }
	  
		  
		  
	  }else{
		  
		  text[p]=null;
		  
		  
	  }
	  
  }

  

 
  //console.log ("(reverseSpeechToTemneForArray)leave : "+text);
  return text;

}


function splitByPuntuation(text){

 //marking order: affixer, classer, elongation,reduplicator
 // console.log ("(splitByPuntuation)enter : "+text);

  var temp=text;
  var infiniteStopper=0;

  for(var i=0;i<markingsPunctuations.length;i++){

    infiniteStopper=0;

   while(temp.indexOf(markingsPunctuations[i].punct)>-1 && infiniteStopper<1000){

     temp=temp.substring(0,temp.indexOf(markingsPunctuations[i].punct))+","+
       temp.substring(temp.indexOf(markingsPunctuations[i].punct)+
                      markingsPunctuations[i].punct.length,temp.length);

   }


  }

  temp=temp.trim();

  text=temp.split(",");

  //console.log ("(splitByPuntuation)leave : "+text);
  return text;

}

function splitByPuntuationWithMarking(text){

 //marking order: affixer, classer, elongation,reduplicator
  //console.log ("(splitByPuntuationWithMarking)enter : "+text);

  var temp=text;
  var infiniteStopper=0;

  for(var i=0;i<markingsPunctuations.length;i++){

    infiniteStopper=0;
   while(temp.indexOf(markingsPunctuations[i].punct)>-1 && infiniteStopper<1000){

     temp=temp.substring(0,temp.indexOf(markingsPunctuations[i].punct))+markingsPunctuations[i].mark+","+
       temp.substring(temp.indexOf(markingsPunctuations[i].punct)+
                      markingsPunctuations[i].punct.length,temp.length);

   }


  }

  temp=temp.trim();

  text=temp.split(",");

  //console.log ("splitByPuntuationWithMarking)leave : "+text);
  return text;

}


function splitByPuntuationLettersOnly(text){

 //marking order: affixer, classer, elongation,reduplicator
  //console.log ("(splitByPuntuationLettersOnly)enter : "+text);
  var temp=text;
  var infiniteStopper=0;

  for(var i=0;i<markingsPunctuations.length;i++){
    //change every punct into a comma
    infiniteStopper=0;

   while(temp.indexOf(markingsPunctuations[i].punct)>-1 && infiniteStopper<1000){

     temp=temp.substring(0,temp.indexOf(markingsPunctuations[i].punct))+","+
       temp.substring(temp.indexOf(markingsPunctuations[i].punct)+
                      markingsPunctuations[i].punct.length,temp.length);

   }


  }


  //remove all non text

  temp=temp.trim();

  temp=temp.split(",");
  text=[];

  for(var p=0;p<temp.length;p++){

   if(isAMemberOfTemneAlphabet(temp[p])){

      text.push(temp[p]);

   }else{




   }


  }

  //console.log ("(splitByPuntuationLettersOnly)leave : "+text);
  return text;

}


function temneWordRelativeRootFinder(x){

	var counter=0;//prevent fovereloop
	var midcut=x;//get rid of class
	//console.log("Relative root1: " + midcut);

	if(midcut.indexOf("'")>-1){

		midcut=x.substring(x.indexOf("'")+1,x.length) ;//get rid of class

	}

	if(midcut.indexOf("’")>-1){

		midcut= x.substring(x.indexOf("’")+1,x.length) ;//get rid of class

	}
	//console.log("Relative root2: " + midcut);
	//console.log("index of h " + midcut.indexOf("h") +" index of accent " + midcut.indexOf(   "́"   ));
	//as long as there is an accent before an h
  while( midcut.indexOf("h") > midcut.indexOf(   "́"   ) && (counter<x.length) ){

		midcut=midcut.substring(midcut.indexOf("h"),x.length);
		counter++;

		//console.log("Relative root2point"+counter+" :" + midcut);

	}

	if(midcut.indexOf("-q")>-1){

		midcut=midcut.substring(0,midcut.indexOf("-q"));

	}
	if(midcut.indexOf("h")==0){

		midcut=midcut.substring(1,midcut.length);

	}
	//console.log("Relative root3: " + midcut);
	return midcut;

}


function reduplicater(text){
//console.log("(reduplicater)Enter :" +text);

	//reduplicationes
  text=text+" ";
  var currentIndex;
  var root;
  var uipa2=text.split(" ");
  //uipa2=uipa2.join("")
  //uipa2=uipa.split(" ");
  //console.log("shin shin "+uipa2);
  for(var i=0; i<uipa2.length;i++){
	  temp="";
      currentIndex=uipa2[i].split('');
	for(var q=0; q<uipa2[i].length;q++){
		//if you see a q

		if(( currentIndex[q]=="q")   ){
			//console.log(q+" old: " + currentIndex);
			if(uipa2[i].indexOf("q")>uipa2[i].indexOf("-")  ){

				if(isADuplicationLetter(uipa2[i],q)){

					currentIndex[q]="(ʙ(1(ʙ(1)ʙ)1)ʙ)"+temneWordRelativeRootFinder(uipa2[i])+"(ʙʙʙ)(ʙʙʙ)";
					//console.log("current: " + currentIndex);

				}

			}


		}




  }
	//finally change the og word
	uipa2[i]=currentIndex.join("");

  }

  //console.log("(reduplicater)Leave :" +uipa2.join(" "));
  return uipa2.join(" ");


}



function letterChangerAndSpacer(text){
 console.log("(letterChangerAndSpacer)Enter :" +text);

	//adding space betwen all the inout characters
  //and removing accents
  //and making letter changes
	  uipa2=[];

	  for(var i=0;i<text.length;i++){

		if( text.charAt(i)!=" "){

			uipa2[i]=text.charAt(i);

			if(uipa2[i]=="β"){

				uipa2[i]="gb";

			}
      if(uipa2[i]=="@"){

				uipa2[i]="(kah)";

			}
      if(uipa2[i]=="#"){

				uipa2[i]="(h́aʂtag)";

			}

		if( uipa2[i]=="c"){

				uipa2[i]="cH";

			}

			if( uipa2[i]=="ɔ"){
			//reduce the dʌθɔŋalayzeʂɔn of vəbz
				uipa2[i]="0";

			}

			if( uipa2[i]=="e"){
			//reduce the dʌθɔŋalayzeʂɔn of vəbz
				uipa2[i]="eI";

			}

			if( uipa2[i]=="o"){
			//reduce the dʌθɔŋalayzeʂɔn of vəbz
				uipa2[i]="O";

			}

			if( uipa2[i]=="ə"){
			//reduce the dʌθɔŋalayzeʂɔn of vəbz
				uipa2[i]="VV";


			}
			if( uipa2[i]=="ʌ"){
			//reduce the dʌθɔŋalayzeʂɔn of vəbz
				uipa2[i]="@";

			}
			 if(uipa2[i]=="h́"){

				uipa2[i]="h";

			}

			if(uipa2[i]==  '̀' ){


				uipa2[i]="(ʙʙ)";


				//uipa2[i-1]=uipa2[i-1]+uipa2[i-1];

			}

      	if(uipa2[i]==  '́'  ){


				uipa2[i]="(ʙ)";
				uipa2[i-1]+=":";


				//uipa2[i-1]=uipa2[i-1]+uipa2[i-1];

			}

			if(text.charAt(i)=='̄'){
                  
				if(text.charAt(i-1)=='ɪ'){
                  uipa2[i]=" h ng"+" (ʙʙʙ)";
                }else{

                uipa2[i]=uipa2[i-1]+" (ʙʙʙ)";
				}					
				  
				
				

			}


			//out of index catcher foword
			if(i<(text.length-1)){

        if( uipa2[i]=="h" && text.charAt(i+1)== "̀" ) {
				 //console.log("uipa2: "+uipa2[i])

					uipa2[i]="'";

				}

				if( uipa2[i]=="h" && text.charAt(i+1)!='̄' && text.charAt(i+1)!='́'){
				 //console.log("uipa2: "+uipa2[i])

					uipa2[i]="";

				}

				if( uipa2[i]=="."  && i+1 < text.length-1){

					uipa2[i]="ʙ(ʙʉ)ʙ,";

				}

				if( uipa2[i]=="!"  && text.charAt(i+1)==" "){

					uipa2[i]="ʙ(ʙʙʙʉ)ʙ,";

				}

				if( uipa2[i]=="?"  && text.charAt(i+1)==" "){

					uipa2[i]="ʙ(ʙʙʉ)ʙ,";

				}
        if( uipa2[i]==";"  && text.charAt(i+1)==" "){

					uipa2[i]="ʙ(ʙʙʙʙʉ)ʙ,";

				}
        if( uipa2[i]==":"  && text.charAt(i+1)==" "){

					uipa2[i]="ʙ(ʙʙʙʙʙʉ)ʙ,";

				}
				if( uipa2[i]=="k"  && (text.charAt(i+1)=="'" || text.charAt(i+1)=="’")){

					uipa2[i]="k@11";

				}
				if( uipa2[i]=="t"  && (text.charAt(i+1)=="'" || text.charAt(i+1)=="’")){

					uipa2[i]="t@11";

				}
				if( uipa2[i]=="p"  && (text.charAt(i+1)=="'" || text.charAt(i+1)=="’")){

					uipa2[i]="p@11";

				}

				if( (uipa2[i]=="k") ){
					if( (text.charAt(i+1)=='́') ){
						if( (i+2<(text.length)) ){
							if( (text.charAt(i+2)=="'") ||  (text.charAt(i+2)=="’") ){

								//console.log(uipa2[i] +" k triggered");
								uipa2[i]="kVV11";



							}


						}

					}

				}
				if( (uipa2[i]=="t") ){
					if( (text.charAt(i+1)=='́') ){
						if( (i+2<(text.length)) ){
							if( (text.charAt(i+2)=="'") ||  (text.charAt(i+2)=="’") ){

								//console.log(uipa2[i] +" k triggered");
								uipa2[i]="tVV11";



							}


						}

					}

				}


				if( isAVowel(uipa2[i])&& (text.charAt(i+1)=="'" || isAVowel(text.charAt(i+1)))){
				//reduce the dʌθɔŋalayzeʂɔn of vəbz
					uipa2[i]=uipa2[i]+"(ʙ1ʙ1ʙ1ʙ)";

				}


			}

			if( uipa2[i]=="ɪ"){

				uipa2[i]="n:n:";

			}

			if( uipa2[i]=="ɱ"){

				uipa2[i]="mm:";

			}

			if( uipa2[i]=="ʂ"){

				uipa2[i]="SH";

			}
			if( uipa2[i]=="ʂ"){

				uipa2[i]="SH";

			}

			if( uipa2[i]=="j"){

				uipa2[i]="J";

			}

			if( uipa2[i]=="y"){

				uipa2[i]="jj";

			}

			if( uipa2[i]=="d"){

				uipa2[i]="d";

			}

			if( uipa2[i]=="r"){

				uipa2[i]="R";

			}


		}else{

      uipa2[i]="ʙ()ʙ()ʙ";

    }

		}


  //console.log("(letterChangerAndSpacer)Leave :" +uipa2.join(' '));
	 return uipa2.join(' ');









}


async function demo() {

/**private**/

		//letters going in the current cycle
    var orig= textInput;
	var lettersIn=removeWhiteSpaceFromArray(uipa.split(","));
	  
    var origLettersIn=reverseSpeechToTemneForArray(splitByPuntuationWithMarking(orig));
	origLettersIn=origLettersIn.filter(function(e){return e});
	//console.log(origLettersIn);
	var previous_lettersIn="";
    var previousWaitTime=0;

	  for(var i=0;i<lettersIn.length;i++){

		uipa=lettersIn[i];
		//console.log("origLettersIn_"+uipa);
		if(!stopped){

           if(uipa!=" "){
			   
			   
			
			word_words=uipa.split("");
			//console.log(uipa+ " : " +(word_words.length/3));


     // console.log("lettersin_"+lettersIn.length+ "_"+i);


			spoken = meSpeak.speak('[['+uipa+']]', {  'rawdata': 'mime',speed:3,wordgap:0.99, variant:"m7", pitch:40});

      //lets wait for mespeak to finish compiling
      await sleep(100);


      waitTime=(meSpeak.getSpeechDuration()*1000)*0.9;

    //console.log("next in : "+waitTime+ " miliseconds");
     // console.log("uipa:_"+uipa);


				//console.log("trigger "+meSpeak.getSpeechDuration());

				if (spoken == null) {

          alert("An error occurred: speaking failed.");

          return;

				}

		document.getElementById("download-button").disabled = false;

      var totalWaitTime=previousWaitTime;

		if(i < origLettersIn.length){
			
			playerLater(totalWaitTime,origLettersIn, i, spoken,previousWaitTime,lettersIn[i]+" h",waitTime);

			previousWaitTime+= waitTime;
			
		}

        


        //console.log("total wait time_"+waitTime+"__"+uipa);
				//document.getElementById("pronounce").disabled = false;

		   }else{ console.log("niaa_"+i);}
			
 

	  }else{

      //console.log("stopped");

		  return;
	  }

		}



	}

function playerLater(wait,origLettersIn, instance, spanken,previousWaitTime,currentSentence,wordTime){


	//console.log(origLettersIn[instance]);

	var origLettersInByWords=origLettersIn[instance].split(/(\s+)/);


	  playTemne=setTimeout(function(){  //console.log("World!");



	 async function demo2(){


		 if(instance<origLettersIn.length && isAMemberOfTemneAlphabet(origLettersIn[instance])){
		   
			displayHighlightBox();

			highlighterBox.innerText="";

			highlighterBox.innerText=origLettersIn[instance];
			var utterances= pageIndex.identifyUtterancesSpeechToTextVersion(highlighterBox.innerText);
			highlighterBox.innerHTML= pageIndex.reattachUtterances(utterances);
			var glyphs= pageIndex.createUtterances(document.getElementsByClassName("utterance"));
			
			pageIndex.colourCoder(glyphs,2);
			
			origLettersInByWords=origLettersIn[instance].split(/(\s+)/);//so all whit space is eliminated
		  //console.log("origLettersInByWords "+origLettersInByWords);

		  }else{


			hideHighlightBox();

		  }


		meSpeak.play(spanken);


		  var comeBefore="";
		  var numComeBefore=0;
		  var comeBeforeArray=[];
		  var origLettersInByWordsUipa=[];//get the time to speak ratio correct
		  var wordWaitTime=0;
		  var duplicateCount=0;
		  var duplicateArray=0;
		  var timesGone=0;


			
				
					
		   for(var q=0; q<origLettersInByWords.length;q++){

			 comeBeforeArray=0;
			 numComeBefore=0;
			 origLettersInByWordsUipa=secureMarkings(origLettersInByWords[q]);
			 origLettersInByWordsUipa= reduplicater(origLettersInByWordsUipa);
			 origLettersInByWordsUipa=letterChangerAndSpacer(origLettersInByWordsUipa);
			 origLettersInByWordsUipa=mapping(origLettersInByWordsUipa+" h");
			 wordWaitTime=( wordTime* (  (longSoundExtensions(vowelExtensions(origLettersInByWordsUipa)).length)/(currentSentence.length)  ) )*0.46;
			 /****/

			 if(origLettersInByWords[q] == " " || origLettersInByWords[q] == "" ||
				origLettersInByWords[q] == null||origLettersInByWords[q] == "&nbsp" ){


			 }else if(isAMemberOfTemneAlphabet(origLettersInByWords[q])){


				 //highlighting prexeders

			   //console.log("origLettersInByWords[q]:_"+origLettersInByWords[q]);

				if(comeBefore.indexOf(origLettersInByWords[q])>-1){

				 //console.log(comeBefore+"ting_"+origLettersInByWords[q]+"_indexOf_"+comeBefore.indexOf(origLettersInByWords[q]))

				  comeBeforeArray=getIndicesOf(origLettersInByWords[q] ,comeBefore ,true );

				  numComeBefore=comeBeforeArray.length;

				  comeBefore+=origLettersInByWords[q]+" ";

				}else{

				  comeBefore=comeBefore+origLettersInByWords[q]+" ";

				}




			   //console.log(origLettersInByWords[q] +"_is_wordWaitTime:_"+wordWaitTime+" percent of:_"+uipa.length +"_from_the_text:_"+origLettersInByWordsUipa);
			   // console.log("in_the_end:_"+removeMarkings(uipa));



			   highlightInsideHighlighterBox(origLettersInByWords[q],numComeBefore);

			   //console.log("wait_"+wordWaitTime+" of "+waitTime+" for_"+ origLettersInByWords[q]+"___"+currentSentence);

			   await sleep( wordWaitTime );

			   


			 }

			 dehighlightInsideHighlighterBox();


			 if(origLettersInByWords[q].indexOf("-q")>=0 && timesGone<=duplicateArray.length){


				if(duplicateCount>0){

				   duplicateCount--;//if already got the duplicate count then repeat the word again
				   q--;
				  timesGone++;

			   }else{

				 duplicateArray=getIndicesOf("q" ,origLettersInByWords[q] ,true );//get all indeces of q

				   for(var imp=0;imp<duplicateArray.length;imp++){

				   //for all the values of duplicate array how many of them are true duplicates?

				   if(isADuplicationLetter(origLettersInByWords[q],duplicateArray[imp])){


					 duplicateCount++;


				   }



				   }

				 q--;
				 timesGone++;
				 duplicateCount--;

			   }



			 }


		   }

				

			//hideHighlightBox();
			duplicateCount=0;
			duplicateArray=[];
			timesGone=0;
			//console.log("the stop_"+stopped );




	 }

		demo2();

		//hideHighlightBox();
	//document.getElementById("pronounce").disabled = false;

 }, wait);







}



function mapping(text){

//console.log("(mapping)Enter :" +text);
  //translate
  var mappings = [
	{ 'src': /^\s*\//g, 'dest': '' },
	{ 'src': /\/\s*$/g, 'dest': '' },

	{ 'src': /\.\.\./g, 'dest': '' },
	{ 'src': /(\.)/g, 'dest': '%' },
	{ 'src': /(\u02c8)/g, 'dest': '\'' },
	{ 'src': /(\u02cc)/g, 'dest': ',' },
	{ 'src': /(\u0251)/g, 'dest': 'A:' },
	{ 'src': /(\u02d0)/g, 'dest': ':' },
	{ 'src': /(\u0251\u02d0)/g, 'dest': 'A' },
	{ 'src': /(\u0251\u0279)/g, 'dest': 'A' },
	{ 'src': /(a\u02d0)/g, 'dest': 'A' },

	// feedback from formantzero via r/linguistics
	{ 'src': /(\u0329)/g, 'dest': 'r' },

	// feedback from scharfes_s via r/linguistics
	{ 'src': /(\u027e)/g, 'dest': 't' },

	{ 'src': /(\xe6)/g, 'dest': 'a' },
	{ 'src': /(a)/g, 'dest': 'a' },
	{ 'src': /(\u028c)/g, 'dest': 'V' },
	{ 'src': /(\u0252)/g, 'dest': '0' },
	{ 'src': /(\u0254)/g, 'dest': '0' },
	{ 'src': /(a\u028a)/g, 'dest': 'aU' },
	{ 'src': /(\xe6\u0254)/g, 'dest': 'aU' },
	{ 'src': /(\u0259)/g, 'dest': '@' },
	{ 'src': /(\u025a)/g, 'dest': '3' },
	{ 'src': /(\u0259\u02d0)/g, 'dest': '3:' },
	{ 'src': /(a\u026a)/g, 'dest': 'aI' },
	{ 'src': /(\u028c\u026a)/g, 'dest': 'aI' },
	{ 'src': /(\u0251e)/g, 'dest': 'aI' },
	{ 'src': /(b)/g, 'dest': 'b' },
	{ 'src': /(t\u0283)/g, 'dest': 'tS' },
	{ 'src': /(\u02a7)/g, 'dest': 'tS' },
	{ 'src': /(d)/g, 'dest': 'd' },
	{ 'src': /(\xf0)/g, 'dest': 'd' },
	{ 'src': /(\u025b)/g, 'dest': 'E' },
	{ 'src': /(e)/g, 'dest': 'E' },
	{ 'src': /(\u025d)/g, 'dest': '3:' },
	{ 'src': /(\u025c\u02d0)/g, 'dest': '3:' },
	{ 'src': /(\u025b\u0259)/g, 'dest': 'e@' },
	{ 'src': /(e)/g, 'dest': 'E' },
	{ 'src': /(\u025d)/g, 'dest': '3:' },
	{ 'src': /(\u025c\u02d0)/g, 'dest': '3:' },
	{ 'src': /(e\u026a)/g, 'dest': 'eI' },
	{ 'src': /(\xe6\u026a)/g, 'dest': 'eI' },
	{ 'src': /(f)/g, 'dest': 'f' },
	{ 'src': /(\u0261)/g, 'dest': 'g' },
	{ 'src': /(g)/g, 'dest': 'g' },
	{ 'src': /(h)/g, 'dest': 'h' },
	{ 'src': /(\u026a)/g, 'dest': 'I' },
	{ 'src': /(\u0268)/g, 'dest': 'I' },
	{ 'src': /(\u026a\u0259)/g, 'dest': 'i@' },
	{ 'src': /(\u026a\u0279)/g, 'dest': 'i@' },
	{ 'src': /(\u026a\u0279\u0259)/g, 'dest': 'i@3' },
	{ 'src': /(i)/g, 'dest': 'i:' },
	{ 'src': /(i\u02d0)/g, 'dest': 'i:' },
	{ 'src': /(d\u0292)/g, 'dest': 'dZ' },
	{ 'src': /(\u02a4)/g, 'dest': 'dZ' },
	{ 'src': /(k)/g, 'dest': 'k' },
	{ 'src': /(x)/g, 'dest': 'x' },
	{ 'src': /(l)/g, 'dest': 'l' },
	{ 'src': /(d\u026b)/g, 'dest': 'l' },
	{ 'src': /(m)/g, 'dest': 'm' },
	{ 'src': /(n)/g, 'dest': 'n' },
	{ 'src': /(\u014b)/g, 'dest': 'N' },
	{ 'src': /(\u0259\u028a)/g, 'dest': 'oU' },
	{ 'src': /(o)/g, 'dest': 'oU' },
	{ 'src': /(o\u028a)/g, 'dest': 'oU' },
	{ 'src': /(\u0259\u0289)/g, 'dest': 'V' },
	{ 'src': /(\u0254\u026a)/g, 'dest': 'OI' },
	{ 'src': /(o\u026a)/g, 'dest': 'OI' },
	{ 'src': /(p)/g, 'dest': 'p' },
	{ 'src': /(\u0279)/g, 'dest': 'r' },
	{ 'src': /(s)/g, 'dest': 's' },
	{ 'src': /(\u0283)/g, 'dest': 'S' },
	{ 'src': /(t)/g, 'dest': 't' },
	{ 'src': /(\u027e)/g, 'dest': 't' },
	{ 'src': /(\u03b8)/g, 'dest': 'T' },
	{ 'src': /(\u028a\u0259)/g, 'dest': 'U@' },
	{ 'src': /(\u028a\u0279)/g, 'dest': 'U@' },
	{ 'src': /(\u028a)/g, 'dest': 'U' },
	{ 'src': /(\u0289\u02d0)/g, 'dest': 'u:' },
	{ 'src': /(u\u02d0)/g, 'dest': 'u:' },
	{ 'src': /(u)/g, 'dest': 'u:' },
	{ 'src': /(\u0254\u02d0)/g, 'dest': 'O:' },
	{ 'src': /(o\u02d0)/g, 'dest': 'O:' },
	{ 'src': /(v)/g, 'dest': 'v' },
	{ 'src': /(w)/g, 'dest': 'w' },
	{ 'src': /(\u028d)/g, 'dest': 'w' },
	{ 'src': /(j)/g, 'dest': 'j' },
	{ 'src': /(z)/g, 'dest': 'z' },
	{ 'src': /(\u0292)/g, 'dest': 'Z' },
	{ 'src': /(\u0294)/g, 'dest': '?' },

	// special edits
	{ 'src': /(k\'a2n)/g, 'dest': 'k\'@n' },
	{ 'src': /(ka2n)/g, 'dest': 'k@n' },
	{ 'src': /(gg)/g, 'dest': 'g' },
	{ 'src': /(@U)/g, 'dest': 'oU' },
	{ 'src': /rr$/g, 'dest': 'r' },
	{ 'src': /3r$/g, 'dest': '3:' },
	{ 'src': /([iU]|([AO]:))@r$/g, 'dest': '$1@' },
	{ 'src': /([^e])@r/g, 'dest': '$1:3' },
	{ 'src': /e@r$/g, 'dest': 'e@' },
	{ 'src': /e@r([bdDfghklmnNprsStTvwjzZ])/g, 'dest': 'e@$1' },

	// edits arising from testing
	{ 'src': /(\'k)+/g, 'dest': 'k\'' },
	{ 'src': /(\ː)+/g, 'dest': ':' },
	{ 'src': /(\:)+/g, 'dest': ':' },
	{ 'src': /(ᵻ)/g, 'dest': 'I' },
	{ 'src': /(ɜ)/g, 'dest': '3' },
	{ 'src': /(ɔ)/g, 'dest': 'O' },

	// feedback from formantzero via r/linguistics
	{ 'src': /\u0361(.)/g, 'dest': '$1\'' },
	{ 'src': /3$/g, 'dest': 'R' }
  ];




	  for (var i = 0; i < mappings.length; i++) {
		text = text.replace(mappings[i].src, mappings[i].dest);
		//console.log(mappings[i].src +" UPIA: "+ uipa[i]);



	  }

//console.log("(mapping)Leave :" +text);
return text;

}


function recombineTextFromArray(textArr){

 // console.log("(recombineTextFromArray)Enter :" +textArr);

  var output="";
  var textArray=textArr;

  for(var i=0;i<textArray.length;i++){

    if(hasAMark(textArray[i])){

      output+=textArray[i];

    }else{

      output+=textArray[i]+",";

    }





  }

//console.log("(recombineTextFromArray)leave :" +output);

  return output;

}

function recombineTextFromArrayLineBreaker(textArr){

 //console.log("(recombineTextFromArrayLineBreaker)Enter :" +textArr);

  var output="";
  var textArray=textArr;

  for(var i=0;i<textArray.length;i++){
	  
	if(textArray[i].indexOf("&nbsp")>-1){

     textArray[i]=textArray[i].substring(0,textArray[i].length-6);
    }		

    if(hasAMark(textArray[i])){

      output+=textArray[i];

    }else{

      output+=textArray[i]+",";

    }





  }

//console.log("(recombineTextFromArrayLineBreaker)leave :" +output);

  return output;

}

function recombineTextFromArrayWithExtraCommas(textArr){

 // console.log("(recombineTextFromArray)Enter :" +textArr);

  var output="";
  var textArray=textArr;

  for(var i=0;i<textArray.length;i++){

    if(hasAMark(textArray[i])){

      output+=textArray[i]+",";

    }else{

      output+=textArray[i]+",";

    }





  }

//console.log("(recombineTextFromArray)leave :" +output);

  return output;

}

 function process(startHere) {
	stopper();
   
   //console.log("logger:_"+input_textbox.innerText);
  

   document.getElementById("pronounce").disabled = true;
   stopped=false;
   input_textbox.contentEditable = "false";
   
   beginingText=input_textbox.innerText;
   uipa=recombineTextFromArrayLineBreaker(input_textbox.innerText.split("\n")).replaceAll("...","");
   
   input_textbox.innerHTML=reverseSpeechToTemne(
     recombineTextFromArray(preReader(input_textbox.innerText)));
   input_textbox.innerHTML=input_textbox.innerHTML.substring(0,input_textbox.innerHTML.length-1);




    if (startHere == null || startHere.length == 0) {

        //uipa = document.getElementById("ipa_input").value;
        /*I only did this iframe to input box bull shit because the empty lines kept fucking up my results so i had to condense the damn thing*/
        //ipa_input.value=input_textbox.innerText;
       
        var temp;

       
        // nothing to process
        if (uipa == null || uipa.length == 0) {
			
			return;
        }

		
		textInput=uipa;
        uipa=secureMarkings(uipa);
        uipa= reduplicater(uipa);
        uipa=letterChangerAndSpacer(uipa);
		console.log("uipa1",uipa);
        uipa=mapping(uipa);
       

        //document.getElementById("submit").disabled = false;

  }else{

        //uipa = document.getElementById("ipa_input").value;
        /*I only did this iframe to input box bull shit because the empty lines kept fucking up my results so i had to condense the damn thing*/
       // ipa_input.value=startHere;
	   
	   uipa=recombineTextFromArrayLineBreaker(startHere.split("\n"));
	   textInput=uipa;
        var temp;


        // nothing to process
        if (uipa == null || uipa.length == 0) {
        return;
        }


        uipa=secureMarkings(uipa);
        uipa= reduplicater(uipa);
        uipa=letterChangerAndSpacer(uipa);
        uipa=mapping(uipa);
      






        //document.getElementById("submit").disabled = false;


  }

 
 demo();


 }








    function is_valid_input(i) {
      return !(i.includes("<") || i.includes(">") || i.length > 200)
    }

    (function() {
      var urlParams = new URLSearchParams(window.location.search);
      if(urlParams.has('w')) {
	var word = urlParams.get('w');
	if(is_valid_input(word)) {
          document.getElementById("ipa_input").value = word;
	}
      }
    })();
