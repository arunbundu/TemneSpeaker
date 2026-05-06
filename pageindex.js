var pageIndex = (function() {
  
 var colourCode=0;
 var glyphs;
 
 var allTemneLettersMinusR=["a","m","n","s","e","ŋ","ɪ","i","j","θ","t","o","b","d","ɱ","u","l","β","f","ɔ","k","w","x","ɛ","z","c","g","ʌ","y","p","ʂ","ə","h́","ʒ","v","h"];
 
var allTemneLettersMinusD=["a","m","n","s","e","ŋ","ɪ","i","j","θ","t","o","b","ɱ","u","l","β","f","ɔ","k","w","x","ɛ","z","c","g",
"ʌ","y","p","ʂ","ə","h́","ʒ","v","h"];

 var allTemneLetters=["a","m","n","s","e","r","ŋ","ɪ","i","j","θ","t","o","b","d","ɱ","u","l","β","f","ɔ","k","w","x","ɛ","z","c","g","ʌ","y","p","ʂ","ə","h́","ʒ","v","h"];

 var allTemneLettersMinusNŊɪⱮ=["a","m","s","e","r","i","j","θ","t","o","b","d","u","l","β","f","ɔ","k","w","x","ɛ","z","c","g","ʌ","y","p","ʂ","ə","h́","ʒ","v","h"];
 
 var partsOfSpeech=[
 {'partOfSpeech':"noun", 'nounType':"nonLiviing", 'cardinality':"primary", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters, 'definiteSingularPronounForm':"ə'", 'definiteSingular':"ə́ŋ'", 'indefiniteSingular':"ə̀'" , 'definitePlural':"ɛ́'", 'indefinitePluralPronounForm':"ɛ'" , 'indefinitePlural':"ɛ̀'"},
 {'partOfSpeech':"noun", 'nounType':"nonLiviing", 'cardinality':"secondary", 'phoneticHate':[{'name':"r" , 'tolaranceLevel': 1}], 'phoneticPreference':allTemneLettersMinusR, 'definiteSingularPronounForm':"rʌ'", 'definiteSingular':"rə́'", 'indefiniteSingular':"r̀ʌ'" , 'definitePlural':"nə́'", 'indefinitePluralPronounForm':"nʌ'" , 'indefinitePlural':"ǹʌ'"},
 {'partOfSpeech':"noun", 'nounType':"nonLiviing", 'cardinality':"secondary", 'phoneticHate':[{'name':null , 'tolaranceLevel':null}], 'phoneticPreference':allTemneLettersMinusD, 'definiteSingularPronounForm':"dʌ'", 'definiteSingular':"də́'", 'indefiniteSingular':"d̀ʌ'" , 'definitePlural':"nə́'", 'indefinitePluralPronounForm':"nʌ'" , 'indefinitePlural':"ǹʌ'"},
 {'partOfSpeech':"noun", 'nounType':"nonLiviing", 'cardinality':"tertiary", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters, 'definiteSingularPronounForm':"kʌ'", 'definiteSingular':"kə́'", 'indefiniteSingular':"k̀ʌ'" , 'definitePlural':"tə́'", 'indefinitePluralPronounForm':"tʌ'" , 'indefinitePlural':"t̀ʌ'"},
 {'partOfSpeech':"noun", 'nounType':"infinitive", 'cardinality':"primary", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters, 'definiteSingularPronounForm':"pʌ'", 'definiteSingular':"pə́'", 'indefiniteSingular':"p̀ʌ'" , 'definitePlural': null, 'indefinitePlural': null},
 {'partOfSpeech':"noun", 'nounType':"uncountable", 'cardinality':"primary", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters, 'definiteSingular': null, 'indefiniteSingular': null , 'definitePlural':"mə́'", 'indefinitePluralPronounForm':"mʌ'" , 'indefinitePlural':"m̀ʌ'"},
 {'partOfSpeech':"noun", 'nounType':"living", 'cardinality':"primary", 'phoneticHate':[{'name':"" , 'tolaranceLevel': 0},{'name':"" , 'tolaranceLevel': 1},{'name':"" , 'tolaranceLevel': 0},{'name':"ɱ" , 'tolaranceLevel': 0}], 'phoneticPreference':allTemneLettersMinusNŊɪⱮ, 'definiteSingularPronounForm':"ɔ'", 'definiteSingular':"ɔ́'", 'indefiniteSingular':"ù'" , 'definitePlural':"áŋ'", 'indefinitePluralPronounForm':"a'" , 'indefinitePlural':"à'"},
 {'partOfSpeech':"noun", 'nounType':"locative", 'cardinality':"primary", 'phoneticHate':[{'name':"r" , 'tolaranceLevel':1}], 'phoneticPreference':allTemneLettersMinusR, 'definiteSingularPronounForm':null, 'definiteSingular':"ró'", 'indefiniteSingular':"r̀u'" , 'definitePlural': null, 'indefinitePlural': null},
 {'partOfSpeech':"noun", 'nounType':"locative", 'cardinality':"primary", 'phoneticHate':[{'name':null , 'tolaranceLevel':null}], 'phoneticPreference':["r"], 'definiteSingularPronounForm':null, 'definiteSingular':"dó'", 'indefiniteSingular':"d̀u'" , 'definitePlural': null, 'indefinitePlural': null},
 
 {'partOfSpeech':"noun", 'nounType':"living", 'cardinality':"primary", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':["ɪ","ŋ","ɱ","n"], 'definiteSingularPronounForm':"u'", 'definiteSingular':"ɔ́'", 'indefiniteSingular':"ù'" , 'definitePlural':"cə́'", 'indefinitePluralPronounForm':"cʌ'" , 'indefinitePlural':"c̀ʌ'"},
 
 {'partOfSpeech':"noun", 'nounType':"currentLocation", 'cardinality':"primary", 'phoneticHate':[{'name':null , 'tolaranceLevel':null}], 'phoneticPreference':[], 'definiteSingularPronounForm':null, 'definiteSingular':"nɔ́'", 'indefiniteSingular':"d̀u'" , 'definitePlural': null, 'indefinitePlural': null},
 {'partOfSpeech':"noun", 'nounType':"locative", 'cardinality':"primary", 'phoneticHate':[{'name':"r" , 'tolaranceLevel': 1}], 'phoneticPreference':allTemneLettersMinusR, 'definiteSingularPronounForm':null, 'definiteSingular':"nɔ́'", 'indefiniteSingular':"r̀u'" , 'definitePlural': null, 'indefinitePlural': null},

 {'partOfSpeech':"verb", 'verbType':"omni", 'cardinality':"secondary", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters, 'definiteSingularPronounForm':null, 'definiteSingular':"tʌkʌ'", 'indefiniteSingular': null , 'definitePlural': null, 'indefinitePlural': null},
 
 {'partOfSpeech':"verb", 'verbType':"omni", 'cardinality':"secondary", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters, 'definiteSingularPronounForm':null, 'definiteSingular':null, 'indefiniteSingular': "k'" , 'definitePlural': null, 'indefinitePlural': "t'"},
 
 {'partOfSpeech':"noun", 'nounType':"omni", 'cardinality':"primary", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters, 'definiteSingularPronounForm':null, 'definiteSingular':"ḱ'", 'indefiniteSingular': null , 'definitePlural': "t́'", 'indefinitePlural': null},
 {'partOfSpeech':"classless", 'type':["omni"], 'cardinality':"primary", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters, 'definiteSingularPronounForm':null, 'definiteSingular':"h'", 'indefiniteSingular':"h'" , 'definitePlural':"h'", 'indefinitePluralPronounForm':null , 'indefinitePlural':"h'"}
 ];
 
 var postPartsOfSpeech=[
	{'partOfSpeech':"postNoun", 'nounType':"living", 'cardinality':"primary", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters, 'definiteSingularPronounForm':"", 'definiteSingular':"'ə́ŋ", 'indefiniteSingular': null , 'definitePlural': null, 'indefinitePlural': null}
 ];
 
var temneIndependentPronouns=[
{'name':"i'", 'type':["subject"], 'plurality':"singular",'person':["first"]},
{'name':"ɪ'", 'type':["subject"], 'plurality':"singular",'person':["second"]},
{'name':"ɔ'", 'type':["subject"], 'plurality':"singular",'person':["third"]},
{'name':"rʌ'", 'type':["subject"], 'plurality':"singular",'person':["third"]},
{'name':"kʌ'", 'type':["subject"], 'plurality':"singular",'person':["third"]},
{'name':"dʌ'", 'type':["subject"], 'plurality':"singular",'person':["third"]},
{'name':"əŋ'", 'type':["subject"], 'plurality':"singular",'person':["third"]},
{'name':"pʌ'", 'type':["subject"], 'plurality':"singular",'person':["third"]},
{'name':"sʌ'", 'type':["subject"], 'plurality':"plural",'person':["first"]},
{'name':"nu'", 'type':["subject"], 'plurality':"plural",'person':["second"]},
{'name':"aŋ'", 'type':["subject"], 'plurality':"plural",'person':["third"]},
{'name':"ɛ'", 'type':["subject"], 'plurality':"plural",'person':["third"]},
{'name':"tʌ'", 'type':["subject"], 'plurality':"plural",'person':["third"]},
{'name':"nʌ'", 'type':["subject"], 'plurality':"plural",'person':["third"]},
{'name':"cʌ'", 'type':["subject"], 'plurality':"plural",'person':["third"]},
{'name':"mʌ'", 'type':["subject"], 'plurality':"plural",'person':["third"]},
{'name':"ma'", 'type':["Subject"], 'plurality':"plural",'person':["fourth"]},

{'name':"mi", 'type':["object"], 'plurality':"singular",'person':["first"]},
{'name':"mu", 'type':["object"], 'plurality':"singular",'person':["second"]},
{'name':"su", 'type':["object"], 'plurality':"plural",'person':["first"]},
{'name':"nu", 'type':["object"], 'plurality':"plural",'person':["second"]},
{'name':"nuŋ", 'type':["object"], 'plurality':"plural",'person':["second"]},
{'name':"ta'", 'type':["permisiative","subjective"], 'plurality':"plural",'person':["third"]},

{'name':"minɛ'", 'type':["subjectAccusational"], 'plurality':"singular",'person':["first"]},
{'name':"munɔ'", 'type':["subjectAccusational"], 'plurality':"singular",'person':["second"]},
{'name':"kɔ̄ŋ'", 'type':["subjectAccusational"], 'plurality':"singular",'person':["third"]},
{'name':"kɔ̄n'", 'type':["subjectAccusational"], 'plurality':"singular",'person':["third"]},
{'name':"sa'", 'type':["subjectAccusational"], 'plurality':"plural",'person':["first"]},
{'name':"na'", 'type':["subjectAccusational"], 'plurality':"plural",'person':["first"]},

{'name':"minɛ̄ŋ", 'type':["objectAccusational"], 'plurality':"singular",'person':["first"]},
{'name':"munɔ̄ŋ", 'type':["objectAccusational"], 'plurality':"singular",'person':["second"]},
{'name':"sāŋ", 'type':["objectAccusational"], 'plurality':"plural",'person':["first"]},
{'name':"nāŋ", 'type':["objectAccusational"], 'plurality':"plural",'person':["second"]},

{'name':"mɛ'", 'type':["subjectProgressive","subjectPerfectum"], 'plurality':"singular",'person':["first"]},
{'name':"məŋ'", 'type':["subjectProgressiveQuestionative","subjectPerfectum"], 'plurality':"singular",'person':["second"]},
{'name':"mɔ'", 'type':["subjectProgressive","subjectPerfectum"], 'plurality':"singular",'person':["third"], 'example':"mɔh mɔ'der è!"},
{'name':"maŋ'", 'type':["subjectProgressive","subjectPerfectum"], 'plurality':"plural",'person':["third"]},
{'name':"p'", 'type':["infinitive","subjective"], 'plurality': "infinitive",'person':["fourth"]},
{'name':"minɛ", 'type':["directAssertative","objective"], 'plurality': "singular",'person':["first"], 'example': "minɛ ɔ'kanɛ"},
{'name':"minɛŋ", 'type':["directAssertative","objective"], 'plurality': "singular",'person':["first"], 'example': "minɛ ɔ'kanɛ"},
{'name':"munɔ", 'type':["directAssertative","objective"], 'plurality': "singular",'person':["second"]},
{'name':"munɔŋ", 'type':["directAssertative","objective"], 'plurality': "singular",'person':["second"]},
{'name':"kɔnɔ", 'type':["directAssertative","objective"], 'plurality': "singular",'person':["third"]},
{'name':"kɔnɔŋ", 'type':["directAssertative","objective"], 'plurality': "singular",'person':["third"]},
{'name':"sā", 'type':["directAssertative","objective"], 'plurality': "plural",'person':["first"]},
{'name':"na", 'type':["directAssertative","objective"], 'plurality': "plural",'person':["second"]},

];
 
 var temneDependentPronouns=[
 {'masters':["ɔ́'","ù'","'əŋ"],'masterType':[], 'name':"kɔ", 'type':["infinitive","hypotheticalObjective","objective"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ə́ŋ'","ə̀'"],'masterType':[], 'name':"ŋi", 'type':["infinitive","hypotheticalObjective","objective"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ɛ́'","ɛ̀'","áŋ'","a"],'masterType':[], 'name':"yi", 'type':["infinitive","hypotheticalObjective","objective"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["rə́'","r̀ʌ'","ró'"],'masterType':[], 'name':"ri", 'type':["infinitive","hypotheticalObjective","objective"], 'plurality':"singular",'person':["third"]},
 {'masters':["nə́'","ǹʌ'"],'masterType':[], 'name':"ni", 'type':["infinitive","hypotheticalObjective","objective"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["kə́'","k̀ʌ'","ḱ'"],'masterType':[], 'name':"ki", 'type':["infinitive","hypotheticalObjective","objective"], 'plurality':"singular",'person':["third"]},
 {'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':[], 'name':"ti", 'type':["infinitive","hypotheticalObjective","objective"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["pə́'","p̀ʌ'"],'masterType':[], 'name':"pi", 'type':["infinitive","hypotheticalObjective","objective"], 'plurality':"singular",'person':["third"]},
 {'masters':[],'masterType':[], 'name':"ci", 'type':["infinitive","hypotheticalObjective","objective"], 'plurality':"singular",'person':["third"]},
 {'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':[], 'name':"ŋi", 'type':["infinitive","hypotheticalObjective","objective"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["də́'","d̀ʌ'"],'masterType':[], 'name':"di", 'type':["infinitive","hypotheticalObjective","objective"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["mə́'","m̀ʌ'"],'masterType':[], 'name':"mi", 'type':["infinitive","hypotheticalObjective","objective"], 'plurality':"Plural",'person':["third"] , 'example':" alih rəs mə́'soy mʌ'hbi nu'βʌli-yɔ mi"},
 
 {'masters':["mə́'","m̀ʌ'"],'masterType':[], 'name':"ma", 'type':["hypotheticalObjective"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["ù'","ɔ́'"],'masterType':["noun","adjective","verb"], 'name':"ɔwe'", 'type':["discriptionalSubject"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"aŋe'", 'type':["discriptionalSubject"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"əŋe'", 'type':["discriptionalSubject"], 'plurality':"singular",'person':["third"]},
 {'masters':["ɛ́'","ɛ̀'"],'masterType':["noun","adjective","verb"], 'name':"ɛye'", 'type':["discriptionalSubject"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["rə́'","r̀ʌ'","ró'"],'masterType':["noun","adjective","verb"], 'name':"əre'", 'type':["discriptionalSubject"], 'plurality':"singular",'person':["third"]},
 {'masters':["nə́'","ǹʌ'"],'masterType':["noun","adjective","verb"], 'name':"əne'", 'type':["discriptionalSubject"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["kə́'","k̀ʌ'","ḱ'"],'masterType':["noun","adjective","verb"], 'name':"əke'", 'type':["discriptionalSubject"], 'plurality':"singular",'person':["third"]},
 {'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':["noun","adjective","verb"], 'name':"əte'", 'type':["discriptionalSubject"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"əpe'", 'type':["discriptionalSubject"], 'plurality':"singular",'person':["third"]},
 {'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"aŋe'", 'type':["discriptionalSubject"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["də́'","d̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"əde'", 'type':["discriptionalSubject"], 'plurality':"singular",'person':["third"]},
 {'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"əme'", 'type':["infinitive","hypotheticalObjective","stubjective"], 'plurality':"singular",'person':["third"], 'example':"mə́'lemre əme'póhlʌshə́"},
 {'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"ɱme'", 'type':["infinitive","hypotheticalObjective","stubjective"], 'plurality':"singular",'person':["third"], 'example':""},
 
 {'masters':["mə́'","m̀ʌ'"],'masterType':[], 'name':"ma", 'type':["hypotheticalObjective"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["ù","ɔ́"],'masterType':["noun","adjective","verb"], 'name':"ɔwe", 'type':["discriptionalSubject"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"aŋe", 'type':["discriptionalSubject"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"əŋe", 'type':["discriptionalSubject"], 'plurality':"singular",'person':["third"]},
 {'masters':["ɛ́'","ɛ̀'"],'masterType':["noun","adjective","verb"], 'name':"ɛye", 'type':["discriptionalSubject"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["rə́'","r̀ʌ'","ró'"],'masterType':["noun","adjective","verb"], 'name':"əre", 'type':["discriptionalSubject"], 'plurality':"singular",'person':["third"]},
 {'masters':["nə́'","ǹʌ'"],'masterType':["noun","adjective","verb"], 'name':"əne", 'type':["discriptionalSubject"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["kə́'","k̀ʌ'","ḱ'"],'masterType':["noun","adjective","verb"], 'name':"əke", 'type':["discriptionalSubject"], 'plurality':"singular",'person':["third"]},
 {'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':["noun","adjective","verb"], 'name':"əte", 'type':["discriptionalSubject"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"əpe", 'type':["discriptionalSubject"], 'plurality':"singular",'person':["third"]},
 {'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"aŋe", 'type':["discriptionalSubject"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["də́'","d̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"əde", 'type':["discriptionalSubject"], 'plurality':"singular",'person':["third"]},
 {'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"əme", 'type':["infinitive","hypotheticalObjective","stubjective"], 'plurality':"singular",'person':["third"], 'example':""},
 {'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"ɱme", 'type':["infinitive","hypotheticalObjective","stubjective"], 'plurality':"singular",'person':["third"], 'example':""},
	
	{'masters':["ù'","ɔ́'"],'masterType':["noun","adjective","verb"], 'name':"ɔwɔŋ", 'type':["locational","closeRelativePositional"], 'plurality':"Plural",'person':["third"]},

	{'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"aŋəŋ", 'type':["locational","closeRelativePositional"], 'plurality':"Plural",'person':["third"]},

	{'masters':["ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"əŋəŋ", 'type':["locational","closeRelativePositional"], 'plurality':"Plural",'person':["third"]},
	{'masters':["ɛ́'","ɛ̀'"],'masterType':["noun","adjective","verb"], 'name':"ɛyɛŋ", 'type':["locational","closeRelativePositional"], 'plurality':"Plural",'person':["third"]},

	{'masters':["rə́'","r̀ʌ'","ró'"],'masterType':["noun","adjective","verb"], 'name':"ərəŋ", 'type':["locational","closeRelativePositional"], 'plurality':"Plural",'person':["third"]},
	{'masters':["nə́'","ǹʌ'"],'masterType':["noun","adjective","verb"], 'name':"ənəŋ", 'type':["locational","closeRelativePositional"], 'plurality':"Plural",'person':["third"]},

	{'masters':["kə́'","k̀ʌ'","ḱ'"],'masterType':["noun","adjective","verb"], 'name':"əkəŋ", 'type':["locational","closeRelativePositional"], 'plurality':"Plural",'person':["third"]},
	{'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':["noun","adjective","verb"], 'name':"ətəŋ", 'type':["locational","closeRelativePositional"], 'plurality':"Plural",'person':["third"]},

	{'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"əpəŋ", 'type':["locational","closeRelativePositional"], 'plurality':"Plural",'person':["third"]},
	{'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"aŋəŋ", 'type':["locational","closeRelativePositional"], 'plurality':"Plural",'person':["third"]},
	
	{'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"əŋəŋ", 'type':["locational","closeRelativePositional"], 'plurality':"Plural",'person':["third"]},

	{'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"əməŋ", 'type':["locational","closeRelativePositional"], 'plurality':"Plural",'person':["third"]},
	
	{'masters':["ɛ́'","ɛ̀'"],'masterType':["noun","adjective","verb"], 'name':"yɔŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"]},

	{'masters':["rə́'","r̀ʌ'","ró'"],'masterType':["noun","adjective","verb"], 'name':"rɔŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"]},
	
	{'masters':["nə́'","ǹʌ'"],'masterType':["noun","adjective","verb"], 'name':"nɔŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"]},
	
	{'masters':["kə́'","k̀ʌ'","ḱ'","ɔ́'","ù'","ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"kɔŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"]},

	{'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':["noun","adjective","verb"], 'name':"tɔŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"]},

	{'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"pɔŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"]},
	
	{'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"kɔŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"]},
	
	{'masters':["də́'","d̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"dɔŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"]},

     {'masters':["ə́ŋ'","ə̀"],'masterType':["noun","adjective","verb"], 'name':"ŋɔŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"] , 'plurality':"Singular",'person':["third"]},
	 
	{'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"mɔŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"] , 'example' : "h'wuni ó h'wun ɔ'tʌ́hdi mə́'lemre mɔŋ"},
	
	{'masters':["ɛ́'","ɛ̀'"],'masterType':["noun","adjective","verb"], 'name':"yaŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"]},

	{'masters':["rə́'","r̀ʌ'","ró'"],'masterType':["noun","adjective","verb"], 'name':"raŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"]},
	
	{'masters':["nə́'","ǹʌ'"],'masterType':["noun","adjective","verb"], 'name':"naŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"]},

	{'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':["noun","adjective","verb"], 'name':"taŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"]},

	{'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"paŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"]},
	
	{'masters':["də́'","d̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"daŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"]},

     {'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋaŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"] , 'plurality':"Singular",'person':["third"]},
	 
	{'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"maŋ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounThirdPerson"], 'plurality':"Singular",'person':["third"] , 'example' : "h'wuni ó h'wun ɔ'tʌ́hdi mə́'lemre mɔŋ"},
	
 {'masters':["ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ɪŋi", 'type':["hypotheticalAddressive"], 'plurality':"singular",'person':["third"]},
 {'masters':["ɛ́'","ɛ̀'"],'masterType':["noun","adjective","verb"], 'name':"ʌyi", 'type':["hypotheticalAddressive"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["rə́'","r̀ʌ'","ró'"],'masterType':["noun","adjective","verb"], 'name':"ʌri", 'type':["hypotheticalAddressive"], 'plurality':"singular",'person':["third"]},
 {'masters':["nə́'","ǹʌ'"],'masterType':["noun","adjective","verb"], 'name':"ɪni", 'type':["hypotheticalAddressive"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["kə́'","k̀ʌ'","ḱ'"],'masterType':["noun","adjective","verb"], 'name':"ʌki", 'type':["hypotheticalAddressive"], 'plurality':"singular",'person':["third"]},
 {'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':["noun","adjective","verb"], 'name':"ʌti", 'type':["hypotheticalAddressive"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"ʌpi", 'type':["hypotheticalAddressive"], 'plurality':"singular",'person':["third"]},
 {'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ʌŋi", 'type':["hypotheticalAddressive"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["də́'","d̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"ʌdi", 'type':["hypotheticalAddressive"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"ɱmi", 'type':["hypotheticalAddressive"], 'plurality':"Plural",'person':["third"], 'example':" alih rəs mə́'soy mʌ'hbi ɱmi mʌ'finɔ"},
 
 {'masters':["ù'","ɔ́'"],'masterType':["noun","adjective","verb"], 'name':"waci", 'type':["relapsatives"], 'plurality':"Plural",'person':["third"]},

	{'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋaci", 'type':["relapsatives"], 'plurality':"Plural",'person':["third"]},
	
	{'masters':["ɛ́'","ɛ̀'"],'masterType':["noun","adjective","verb"], 'name':"yaci", 'type':["relapsatives"], 'plurality':"Plural",'person':["third"]},

	{'masters':["rə́'","r̀ʌ'","ró'"],'masterType':["noun","adjective","verb"], 'name':"rəci", 'type':["relapsatives"], 'plurality':"Plural",'person':["third"]},
	
	{'masters':["nə́'","ǹʌ'"],'masterType':["noun","adjective","verb"], 'name':"naci", 'type':["relapsatives"], 'plurality':"Plural",'person':["third"]},
	
	{'masters':["kə́'","k̀ʌ'","ḱ'"],'masterType':["noun","adjective","verb"], 'name':"kaci", 'type':["relapsatives"], 'plurality':"Plural",'person':["third"]},

	{'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':["noun","adjective","verb"], 'name':"taci", 'type':["relapsatives"], 'plurality':"Plural",'person':["third"]},

	{'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"paci", 'type':["relapsatives"], 'plurality':"Plural",'person':["third"]},
	
	{'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"pəci", 'type':["relapsatives"], 'plurality':"Plural",'person':["third"]},
	
	{'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋaci", 'type':["relapsatives"], 'plurality':"Plural",'person':["third"]},
	
	{'masters':["də́'","d̀ʌ'","dó'"],'masterType':["noun","adjective","verb"], 'name':"dəci", 'type':["relapsatives"], 'plurality':"Plural",'person':["third"]},

	{'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"maci", 'type':["relapsatives"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋa'", 'type':["simoultaniousalState","subjectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ɔ́'","ù'","'əŋ"],'masterType':["noun","adjective","verb"], 'name':"kɔnɔ'", 'type':["simoultaniousalState","subjectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ɔ́'","ù'","'əŋ"],'masterType':["noun","adjective","verb"], 'name':"kɔ̄n'", 'type':["simoultaniousalState","subjectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ɔ́'","ù'","'əŋ"],'masterType':["noun","adjective","verb"], 'name':"kɔ̄ŋ'", 'type':["simoultaniousalState","subjectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋə'", 'type':["simoultaniousalState","subjectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ɛ́'","ɛ̀'"],'masterType':["noun","adjective","verb"], 'name':"yɛ'", 'type':["simoultaniousalState","subjectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["rə́'","r̀ʌ'","ró'"],'masterType':["noun","adjective","verb"], 'name':"rə'", 'type':["simoultaniousalState","subjectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["nə́'","ǹʌ'"],'masterType':["noun","adjective","verb"], 'name':"nə'", 'type':["simoultaniousalState","subjectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["kə́'","k̀ʌ'","ḱ'"],'masterType':["noun","adjective","verb"], 'name':"kə'", 'type':["simoultaniousalState","subjectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':["noun","adjective","verb"], 'name':"tə'", 'type':["simoultaniousalState","subjectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"pə'", 'type':["simoultaniousalState","subjectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋə'", 'type':["simoultaniousalState","subjectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["də́'","d̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"də'", 'type':["simoultaniousalState","subjectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"mə'", 'type':["simoultaniousalState","subjectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋɛ̄ŋ", 'type':["simoultaniousalState","objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋāŋ", 'type':["simoultaniousalState","objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ɔ́'","ù'","'əŋ"],'masterType':["noun","adjective","verb"], 'name':"kɔnɔ̄ŋ", 'type':["simoultaniousalState","objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋə̄ŋ", 'type':["simoultaniousalState","objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ɛ́'","ɛ̀'"],'masterType':["noun","adjective","verb"], 'name':"yɛ̄ŋ", 'type':["simoultaniousalState","objectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["rə́'","r̀ʌ'","ró'"],'masterType':["noun","adjective","verb"], 'name':"rə̄ŋ", 'type':["simoultaniousalState","objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["nə́'","ǹʌ'"],'masterType':["noun","adjective","verb"], 'name':"nə̄ŋ", 'type':["simoultaniousalState","objectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["kə́'","k̀ʌ'","ḱ'"],'masterType':["noun","adjective","verb"], 'name':"kə̄ŋ", 'type':["simoultaniousalState","objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':["noun","adjective","verb"], 'name':"tə̄ŋ", 'type':["simoultaniousalState","objectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"pə̄ŋ", 'type':["simoultaniousalState","objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋə̄ŋ", 'type':["simoultaniousalState","objectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':[],'masterType':[], 'name':"cɛ̄ŋ", 'type':["simoultaniousalState","objectAccusational","infinitive"], 'plurality':"Plural",'person':["third"], 'exp' : "taci cɛ̄ŋ"},
 
 {'masters':["də́'","d̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"də̄ŋ", 'type':["simoultaniousalState","objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"mə̄ŋ", 'type':["simoultaniousalState","objectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋaiyɛŋ", 'type':["explanatoryState","objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋəiyɛŋ", 'type':["explanatoryState","objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ɛ́'","ɛ̀'"],'masterType':["noun","adjective","verb"], 'name':"yɛiyɛŋ", 'type':["explanatoryState","objectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["rə́'","r̀ʌ'","ró'"],'masterType':["noun","adjective","verb"], 'name':"rəiyɛŋ", 'type':["explanatoryState","objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["nə́'","ǹʌ'"],'masterType':["noun","adjective","verb"], 'name':"nəiyɛŋ", 'type':["explanatoryState","objectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["kə́'","k̀ʌ'","ḱ'"],'masterType':["noun","adjective","verb"], 'name':"kəiyɛŋ", 'type':["explanatoryState","objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':["noun","adjective","verb"], 'name':"təiyɛŋ", 'type':["explanatoryState","objectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"pəiyɛŋ", 'type':["explanatoryState","objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋəiyɛŋ", 'type':["explanatoryState","objectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["də́'","d̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"dəiyɛŋ", 'type':["explanatoryState","objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"məiyɛŋ", 'type':["explanatoryState","objectAccusational"], 'plurality':"Plural",'person':["third"]},
 
 {'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋa", 'type':["objectAccusational"], 'plurality':"singular",'person':["third"]},
 
 {'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"ŋā", 'type':["objectAccusational"], 'plurality':"singular",'person':["third"]},
 {'masters':["ró'"],'masterType':["noun","adjective","verb"], 'name':"ru'h", 'type':["objectAccusational","locational"], 'plurality':"singular",'person':["third"]},
 {'masters':["dó'"],'masterType':["noun","adjective","verb"], 'name':"du'h", 'type':["objectAccusational","locational"], 'plurality':"singular",'person':["third"]},
 
 ];
 
 var temneIndependent_dependentAdjectives=[
	{'masters':["ù'","ɔ́'","kə́'","k̀ʌ'","ḱ'"],'masterType':["noun","adjective","verb"], 'name':"'hkə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"], 'example':"ɔ́'wan 'hkə mu"},

	{'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"'ha", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural","objectivalPronounThirdPerson"]},
	
	{'masters':["ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"'hə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},
	
	{'masters':["ɛ́'","ɛ̀'"],'masterType':["noun","adjective","verb"], 'name':"'hɛ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},

	{'masters':["rə́'","r̀ʌ'","ró'","nɔ́'"],'masterType':["noun","adjective","verb"], 'name':"'hrə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},
	
	{'masters':["nə́'","ǹʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hnə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},

	{'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':["noun","adjective","verb"], 'name':"'htə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},

	{'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hpə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},
	
	{'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"'hŋə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},
	
	{'masters':["də́'","d̀ʌ'","dó'","d̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hdə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},

	{'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hmə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"], 'example' : "mə́'lemre 'hmə mu"},
	
	{'masters':["ù'","ɔ́'"],'masterType':["noun","adjective","verb"], 'name':"'hɔkə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"] , 'example':"ɔ́'waθ 'hɔkə mu"},

	{'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"'haŋə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural","objectivalPronounThirdPerson"]},
	
	{'masters':["ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"'həŋə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},
	
	{'masters':["ɛ́'","ɛ̀'"],'masterType':["noun","adjective","verb"], 'name':"'hɛyɛ", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},

	{'masters':["rə́'","r̀ʌ'","ró'"],'masterType':["noun","adjective","verb"], 'name':"'hərə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},
	
	{'masters':["nə́'","ǹʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hənə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},

	{'masters':["kə́'","k̀ʌ'","ḱ'"],'masterType':["noun","adjective","verb"], 'name':"'həkə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},

	{'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':["noun","adjective","verb"], 'name':"'hətə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},

	{'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"'həpə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},
	
	{'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"'həŋə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},
	
	{'masters':["də́'","d̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hədə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},

	{'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"'həmə", 'type':["objectivalPronounPosessives","objectivalPronounSingular","objectivalPronounFirstPerson","objectivalPronounSecondPerson","objectivalPronounPlural"]},
	
	{'masters':["ù'","ɔ́'","kə́'","k̀ʌ'","ḱ'"],'masterType':["noun","adjective","verb"], 'name':"'hkʌ", 'type':["objectivalPronounPosessives","objectivalPronounPlural","objectivalPronounThirdPerson"]},
	
	{'masters':["ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"'hɪ", 'type':["objectivalPronounPosessives","objectivalPronounPlural","objectivalPronounThirdPerson"]},
	
	{'masters':["ɛ́'","ɛ̀'"],'masterType':["noun","adjective","verb"], 'name':"'hi", 'type':["objectivalPronounPosessives","objectivalPronounPlural","objectivalPronounThirdPerson"]},

	{'masters':["rə́'","r̀ʌ'","ró'"],'masterType':["noun","adjective","verb"], 'name':"'hrʌ", 'type':["objectivalPronounPosessives","objectivalPronounPlural","objectivalPronounThirdPerson"]},
	
	{'masters':["nə́'","ǹʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hnʌ", 'type':["objectivalPronounPosessives","objectivalPronounPlural","objectivalPronounThirdPerson"]},

	{'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':["noun","adjective","verb"], 'name':"'htʌ", 'type':["objectivalPronounPosessives","objectivalPronounPlural","objectivalPronounThirdPerson"]},

	{'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hpʌ", 'type':["objectivalPronounPosessives","objectivalPronounPlural","objectivalPronounThirdPerson"]},
	
	{'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"'hkʌ", 'type':["objectivalPronounPosessives","objectivalPronounPlural","objectivalPronounThirdPerson"]},
	
	{'masters':["də́'","d̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hdʌ", 'type':["objectivalPronounPosessives","objectivalPronounPlural","objectivalPronounThirdPerson"]},

	{'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hmʌ", 'type':["objectivalPronounPosessives","objectivalPronounPlural","objectivalPronounThirdPerson"], 'example' :"mə́'lembre 'hmʌ ŋaŋ"},

	{'masters':["ù'","ɔ́'","kə́'","k̀ʌ'","ḱ'"],'masterType':["noun","adjective","verb"], 'name':"'hka", 'type':["infinitivalPosessives"],'example': "ɔ́'wan 'hka ruru'əŋ"  },

	{'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"'hŋa", 'type':["infinitivalPosessives"]},
	
	{'masters':["ɛ́'","ɛ̀'"],'masterType':["noun","adjective","verb"], 'name':"'hya", 'type':["infinitivalPosessives"]},

	{'masters':["rə́'","r̀ʌ'","ró'"],'masterType':["noun","adjective","verb"], 'name':"'hra", 'type':["infinitivalPosessives"]},
	
	{'masters':["nə́'","ǹʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hna", 'type':["infinitivalPosessives"]},

	{'masters':["tə́'","t̀ʌ'","t́'","t'"],'masterType':["noun","adjective","verb"], 'name':"'hta", 'type':["infinitivalPosessives"]},

	{'masters':["pə́'","p̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hpa", 'type':["infinitivalPosessives"]},
	
	{'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'"],'masterType':["noun","adjective","verb"], 'name':"'hŋa", 'type':["infinitivalPosessives"]},
	
	{'masters':["də́'","d̀ʌ'","dó'","d̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hda", 'type':["infinitivalPosessives"]},

	{'masters':["mə́'","m̀ʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hma", 'type':["infinitivalPosessives"]},
	
	{'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'", "ɛ́'","ɛ̀'","aŋ'","a'", "ɛ'"],'masterType':["noun","adjective","verb"], 'name':"'hyɛrʌŋ", 'type':["numerical"]},
	
	{'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'", "ɛ́'","ɛ̀'","aŋ'","a'", "ɛ'"],'masterType':["noun","adjective","verb"], 'name':"'hyaɪlɛ", 'type':["numerical"]},
	
	{'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'","aŋ'","a'"],'masterType':["noun","adjective","verb"], 'name':"'htamaθukin", 'type':["numerical"]},
	
	{'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'","aŋ'","a'"],'masterType':["noun","adjective","verb"], 'name':"'htamaθuyɛrʌŋ", 'type':["numerical"]},
	
	{'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'","aŋ'","a'"],'masterType':["noun","adjective","verb"], 'name':"'htamaθusas", 'type':["numerical"]},
	
	{'masters':["ɔ́'","áŋ'","à'","cə́'","c̀ʌ'","ə́ŋ'","ə̀'","aŋ'","a'"],'masterType':["noun","adjective","verb"], 'name':"'htamaθuyaɪlɛ", 'type':["numerical"]},
	
	{'masters':["ə́ŋ'","ə̀'","əŋ'","ə'"],'masterType':["noun","adjective","verb"], 'name':"'hŋin", 'type':["numerical"]},
	
	{'masters':["rə́'","r̀ʌ'","rə'","rʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hrin", 'type':["numerical"]},
	
	{'masters':["nə́'","ǹʌ'","nə'","nʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hnin", 'type':["numerical"]},
	
	{'masters':["nə́'","ǹʌ'","nə'","nʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hnɛrʌŋ", 'type':["numerical"]},
	
	{'masters':["kə́'","k̀ʌ'","ḱ'","kə'","kʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hkin", 'type':["numerical"]},
	
	{'masters':["tə́'","t̀ʌ'","t́'","t'","tə'","tʌ'"],'masterType':["noun","adjective","verb"], 'name':"'htin", 'type':["numerical"]},

	{'masters':["tə́'","t̀ʌ'","t́'","t'","tə'","tʌ'"],'masterType':["noun","adjective","verb"], 'name':"'htʌrʌŋ", 'type':["numerical"]},
	
	{'masters':["tə́'","t̀ʌ'","t́'","t'","tə'","tʌ'"],'masterType':["noun","adjective","verb"], 'name':"'htaɪlɛ", 'type':["numerical"]},

	{'masters':["pə́'","p̀ʌ'","pə'","pʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hpiŋ", 'type':["numerical"]},
	
	{'masters':["pə́'","p̀ʌ'","pə'","pʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hpirʌŋ", 'type':["numerical"]},
	
	{'masters':["pə́'","p̀ʌ'","pə'","pʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hpaɪlɛ", 'type':["numerical"]},
	
	{'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'","cə'","cʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hŋin", 'type':["numerical"]},
	
	{'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'","cə'","cʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hpʌrʌŋ", 'type':["numerical"]},
	
	{'masters':["cə́'","c̀ʌ'","ə́ŋ'","ə̀'","cə'","cʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hpaɪlɛ", 'type':["numerical"]},
	
	{'masters':["də́'","d̀ʌ'","də'","dʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hdim", 'type':["numerical"]},

	{'masters':["mə́'","m̀ʌ'","mə'","mʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hmin", 'type':["numerical"]},
	
	{'masters':["mə́'","m̀ʌ'","mə'","mʌ'"],'masterType':["noun","adjective","verb"], 'name':"'hmərʌŋ", 'type':["numerical"]},
	
 ];
 
 var conjunctions=[
 "yih","yɛh", "θah", "kɛrɛh", "pepih",
 "alirəs", "mɔh","mɔ̄h", "was","mə̄h","kəbih", "tah","kaɪkah","ɔwah","salatah","kʌpah", "kəh","kah","kəməh","cɛnih","alih","ɛntih","yəh","sap","beθeh","θas", "yiɪkah","βeŋ", "hāŋ","θaβeh", "konih","tɛɪtɛnɛh","nʌsəh"
 ];
 
var independentAdjectives=[];
var verbsHates=["kɔ̄n","kɔ̄ŋ","θā́"];
var adjectivesHates=["pó","θá","yɛ́","hɛ́"];
var interjections=["ciy", "/!/w̄","bōh","βoh"];
var greetings=["ʂɛnɛh","sɛkɛh","panɛmoh","piyarih","mamuh","θoɪθoh"];
var responses=["ādeh","ɪkoh","iyoh","momoh", "marih","nāyēh","nāh","āŋ"];
var questionatives=["koh", "toh","nɛh","mɔlɔh","iyah", "kɛnɛh","dekeh","rekeh","yoh", "takoyah"];
var loneFunctionatives=["yaθih","rəs","kɛh", "θāh","bah","təh","ŋah","ɪgɛh", "βɛt","kkr:","tkr:","kkr:", "mah","θonɔh","bioh","mə̄dɔh","ɪnaŋ","iyāh", "ɛŋ"];
 
 var temnePrepositions=[
 {'name':"nɔyɛŋ", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters },
 {'name':"nɔŋ", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters },
 {'name':"doyɛŋ", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters },
 {'name':"yəh", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters},
 {'name':"mɔyɛŋ", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters },
 {'name':"yɛŋ", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters },
 {'name':"yeθeŋ", 'phoneticHate':[{'name':null , 'tolaranceLevel': null}], 'phoneticPreference':allTemneLetters },
 ];
 
 var temneVowels=["a","e","i","o","u","ɔ","ɛ","ʌ","ə"];
 var temneAccentedVowels=["á","é","í","ó","ú","ɔ́","ɛ́","ʌ́","ə́"];
  
class Word{
	
	constructor(string) {
		
		this.letters = string;
		this.highlightColour="";
		this.morphemes= new Morpheme(this);
		this.giveHighlightColour();
	
	
  }
  
  partOfSpeech(){
	  
	  var temp=this.letters.replace("’","'"); temp=temp.replace("‘","'");
	  temp=replaceAllDisturbances(temp);
	  var temp2=temp;
	  temp2=temp.substring(temp.indexOf("'"),temp.length);

	  if( (getIndicesOf("'",temp)).length >1 ||(temp.indexOf("''") >-1) || (!this.isLoneLetter().buulean && (temp2.indexOf("̀") > -1  &&  temp2.indexOf("h̀") < 0)  && temp2.indexOf("'") > -1 )){
		  
		 this.highlightColour="#ff3300";
		 return "N/A"; 
		  
	  }
	  
	  temp2=temp;
	  temp=temp.substring(0,temp.indexOf("'")+1);
	  //check for which class
	  for(var u=0;u<partsOfSpeech.length;u++){
		  
		  //so that adjective and verb dont clash
		if( temp.indexOf("'")>-1 && ((temp2.indexOf("'h")==-1 || temp2.indexOf("'h́")>-1 ) && this.hasCorrectAffixi())){
			
			//console.log(this.hasCorrectAffixi());
			//console.log("(partOfSpeech)Enter:_"+temp +"_comparedTo_"+partsOfSpeech[u].definiteSingular+"_typeof partsOfSpeech_"+(typeof partsOfSpeech[u].nounType !== 'undefined')+"_match?_"+ (temp==partsOfSpeech[u].definiteSingular));
			
			//console.log((indexOfAnyOfTheseThings(temp2,partsOfSpeech[u].phoneticPreference)) +"_"+temp2+"_"+(!indexOfAnyOfTheseThings_toleranceLevel_PhoneticHateVersion(temp2,partsOfSpeech[u].phoneticHate,partsOfSpeech[u].toleranceLevel)));

			if( indexOfAnyOfTheseThings(temp2,partsOfSpeech[u].phoneticPreference) && 
				!indexOfAnyOfTheseThings_toleranceLevel_PhoneticHateVersion(temp2,partsOfSpeech[u].phoneticHate,partsOfSpeech[u].toleranceLevel)){ 
			
			//console.log("good spelling_"+ temp2);
			
			//console.log(partsOfSpeech[u].indefiniteSingular,(temp==partsOfSpeech[u].indefiniteSingular && typeof partsOfSpeech[u].nounType !== 'undefined'));
			if(temp==partsOfSpeech[u].definiteSingular && typeof partsOfSpeech[u].nounType !== 'undefined' ){
				//console.log("good spelling_"+ temp2);
			this.highlightColour="#99ffcc";
				return "PartOfSpeech:_"+partsOfSpeech[u].partOfSpeech+"\n_nounType:_"+partsOfSpeech[u].nounType+"\n_Cardinality:_"+partsOfSpeech[u].cardinality+"\n_PhoneticPreference:_"+partsOfSpeech[u].phoneticPreference+"\n_(definiteSingular):_("+partsOfSpeech[u].definiteSingular+")\n_indefiniteSingular:_"+partsOfSpeech[u].indefiniteSingular+"\n_definitePlural:_"+partsOfSpeech[u].definitePlural+"\n_indefinitePlural:_"+partsOfSpeech[u].indefinitePlural;
		  
		}else if(temp==partsOfSpeech[u].indefiniteSingular && typeof partsOfSpeech[u].nounType !== 'undefined'){
             this.highlightColour="#99ffcc";
          return "PartOfSpeech:_"+partsOfSpeech[u].partOfSpeech+"\n_nounType:_"+partsOfSpeech[u].nounType+"\n_Cardinality:_"+partsOfSpeech[u].cardinality+"\n_PhoneticPreference:_"+partsOfSpeech[u].phoneticPreference+"\n_definiteSingular:_"+partsOfSpeech[u].definiteSingular+"\n_(indefiniteSingular):_("+partsOfSpeech[u].indefiniteSingular+")\n_definitePlural:_"+partsOfSpeech[u].definitePlural+"\n_indefinitePlural:_"+partsOfSpeech[u].indefinitePlural;
		  
		}else if(temp==partsOfSpeech[u].definitePlural && typeof partsOfSpeech[u].nounType !== 'undefined'){
			this.highlightColour="#99ffcc";
          return "PartOfSpeech:_"+partsOfSpeech[u].partOfSpeech+"\n_nounType:_"+partsOfSpeech[u].nounType+"\n_Cardinality:_"+partsOfSpeech[u].cardinality+"\n_PhoneticPreference:_"+partsOfSpeech[u].phoneticPreference+"\n_definiteSingular:_"+partsOfSpeech[u].definiteSingular+"\n_indefiniteSingular:_"+partsOfSpeech[u].indefiniteSingular+"\n_(definitePlural):_("+partsOfSpeech[u].definitePlural+")\n_indefinitePlural:_"+partsOfSpeech[u].indefinitePlural;
		  
		}else if(temp==partsOfSpeech[u].indefinitePlural && typeof partsOfSpeech[u].nounType !== 'undefined'){
			this.highlightColour="#99ffcc";
          return "PartOfSpeech:_"+partsOfSpeech[u].partOfSpeech+"\n_nounType:_"+partsOfSpeech[u].nounType+"\n_Cardinality:_"+partsOfSpeech[u].cardinality+"\n_PhoneticPreference:_"+partsOfSpeech[u].phoneticPreference+"\n_definiteSingular:_"+partsOfSpeech[u].definiteSingular+"\n_indefiniteSingular:_"+partsOfSpeech[u].indefiniteSingular+"\n_definitePlural:_"+partsOfSpeech[u].definitePlural+"\n_(indefinitePlural):_("+partsOfSpeech[u].indefinitePlural+")";
		  
		  //check for pronounverbs
		}else if((temp==partsOfSpeech[u].definiteSingularPronounForm || includesPronoun(temp) )&& !indexOfAnyOfTheseThings(temp2,verbsHates)){
			
			//console.log(" Class one1_"+temp);
			
			if(this.letters.indexOf("́")> -1 && (this.isPrefix().buulean || this.isSuffix().buulean)){
				
				this.highlightColour="#9999ff";
          return "PartOfSpeech:_verb";
				
			}else{
				
				this.highlightColour="#9999ff";
          return "PartOfSpeech:_verb";
				
			}

		  
		  
		 
		}else if((temp==partsOfSpeech[u].indefiniteSingularPronounForm || includesPronoun(temp) ) && !indexOfAnyOfTheseThings(temp2,verbsHates)){
			
			//console.log("Class one2");
		
			if(this.letters.indexOf("́")> -1 && (this.isPrefix().buulean || this.isSuffix().buulean)){
				
				this.highlightColour="#9999ff";
          return "PartOfSpeech:_verb";
				
			}else{
				
				this.highlightColour="#9999ff";
          return "PartOfSpeech:_verb";
				
			}
		  
		  
		  
		}else if((temp==partsOfSpeech[u].definitePluralPronounForm || includesPronoun(temp) ) && !indexOfAnyOfTheseThings(temp2,verbsHates)){
			//console.log("Class one3");
			if(this.letters.indexOf("́")> -1 && (this.isPrefix().buulean || this.isSuffix().buulean)){
				
				this.highlightColour="#9999ff";
          return "PartOfSpeech:_verb";
				
			}else{
				
				this.highlightColour="#9999ff";
          return "PartOfSpeech:_verb";
				
			}

		  
		  
		 
		}else if((temp==partsOfSpeech[u].indefinitePluralPronounForm || includesPronoun(temp) ) && !indexOfAnyOfTheseThings(temp2,verbsHates)){
		
			if(this.letters.indexOf("́")> -1 && (this.isPrefix().buulean || this.isSuffix().buulean)){
				
				this.highlightColour="#9999ff";
          return "PartOfSpeech:_verb";
				
			}else{
				
				this.highlightColour="#9999ff";
          return "PartOfSpeech:_verb";
				
			}
		  
		  
		//check for class verb  
		}else if( temp.indexOf("u'") ==-1 && (temp==partsOfSpeech[u].definiteSingular|| includesPronoun(temp) )&& (typeof partsOfSpeech[u].verbType !== 'undefined') && !indexOfAnyOfTheseThings(temp2,verbsHates)){
			
			
			//console.log("Class one");
			if(this.letters.indexOf("́")> -1 && (this.isPrefix().buulean || this.isSuffix().buulean)){
				
				this.highlightColour="#9999ff";
          return "PartOfSpeech:_"+partsOfSpeech[u].partOfSpeech+"\n_verbType:_"+partsOfSpeech[u].verbType+"\n_Cardinality:_"+partsOfSpeech[u].cardinality+"\n_PhoneticPreference:_"+partsOfSpeech[u].phoneticPreference+"\n_definiteSingular:_"+partsOfSpeech[u].definiteSingular+"\n_indefiniteSingular:_"+partsOfSpeech[u].indefiniteSingular+"\n_definitePlural:_"+partsOfSpeech[u].definitePlural+"\n_indefinitePlural:_"+partsOfSpeech[u].indefinitePlural;
				
			}else{
				
				this.highlightColour="#9999ff";
				return "PartOfSpeech:_"+partsOfSpeech[u].partOfSpeech+"\n_verbType:_"+partsOfSpeech[u].verbType+"\n_Cardinality:_"+partsOfSpeech[u].cardinality+"\n_PhoneticPreference:_"+partsOfSpeech[u].phoneticPreference+"\n_definiteSingular:_"+partsOfSpeech[u].definiteSingular+"\n_indefiniteSingular:_"+partsOfSpeech[u].indefiniteSingular+"\n_definitePlural:_"+partsOfSpeech[u].definitePlural+"\n_indefinitePlural:_"+partsOfSpeech[u].indefinitePlural;
				
			}

		  
		  
		 
		}else if( temp.indexOf("u'") ==-1 && (temp==partsOfSpeech[u].indefiniteSingular || includesPronoun(temp) )&& (typeof partsOfSpeech[u].verbType !== 'undefined') && !indexOfAnyOfTheseThings(temp2,verbsHates)){
			
			//console.log("Class two");
			this.highlightColour="#9999ff";
			return "PartOfSpeech:_"+partsOfSpeech[u].partOfSpeech+"\n_verbType:_"+partsOfSpeech[u].verbType+"\n_Cardinality:_"+partsOfSpeech[u].cardinality+"\n_PhoneticPreference:_"+partsOfSpeech[u].phoneticPreference+"\n_definiteSingular:_"+partsOfSpeech[u].definiteSingular+"\n_indefiniteSingular:_"+partsOfSpeech[u].indefiniteSingular+"\n_definitePlural:_"+partsOfSpeech[u].definitePlural+"\n_indefinitePlural:_"+partsOfSpeech[u].indefinitePlural;
		  
		  
		  
		}else if( temp.indexOf("u'") ==-1 && (temp==partsOfSpeech[u].definitePlural || includesPronoun(temp) )&& (typeof partsOfSpeech[u].verbType !== 'undefined') && !indexOfAnyOfTheseThings(temp2,verbsHates)){
			//console.log("Class three");
			
			if(this.letters.indexOf("́")> -1 && (this.isPrefix().buulean || this.isSuffix().buulean)){
				
				this.highlightColour="#9999ff";
				return "PartOfSpeech:_"+partsOfSpeech[u].partOfSpeech+"\n_verbType:_"+partsOfSpeech[u].verbType+"\n_Cardinality:_"+partsOfSpeech[u].cardinality+"\n_PhoneticPreference:_"+partsOfSpeech[u].phoneticPreference+"\n_definiteSingular:_"+partsOfSpeech[u].definiteSingular+"\n_indefiniteSingular:_"+partsOfSpeech[u].indefiniteSingular+"\n_definitePlural:_"+partsOfSpeech[u].definitePlural+"\n_indefinitePlural:_"+partsOfSpeech[u].indefinitePlural;
				
			}else{
				
				this.highlightColour="#9999ff";
          return "PartOfSpeech:_"+partsOfSpeech[u].partOfSpeech+"\n_verbType:_"+partsOfSpeech[u].verbType+"\n_Cardinality:_"+partsOfSpeech[u].cardinality+"\n_PhoneticPreference:_"+partsOfSpeech[u].phoneticPreference+"\n_definiteSingular:_"+partsOfSpeech[u].definiteSingular+"\n_indefiniteSingular:_"+partsOfSpeech[u].indefiniteSingular+"\n_definitePlural:_"+partsOfSpeech[u].definitePlural+"\n_indefinitePlural:_"+partsOfSpeech[u].indefinitePlural;
				
			}

		  
		  
		 
		}else if( temp.indexOf("u'") ==-1 && (temp==partsOfSpeech[u].indefinitePlural || includesPronoun(temp) )&& (typeof partsOfSpeech[u].verbType !== 'undefined') && !indexOfAnyOfTheseThings(temp2,verbsHates)){
			//console.log("Class 4");
			this.highlightColour="#9999ff";
          return "PartOfSpeech:_"+partsOfSpeech[u].partOfSpeech+"\n_verbType:_"+partsOfSpeech[u].verbType+"\n_Cardinality:_"+partsOfSpeech[u].cardinality+"\n_PhoneticPreference:_"+partsOfSpeech[u].phoneticPreference+"\n_definiteSingular:_"+partsOfSpeech[u].definiteSingular+"\n_indefiniteSingular:_"+partsOfSpeech[u].indefiniteSingular+"\n_definitePlural:_"+partsOfSpeech[u].definitePlural+"\n_indefinitePlural:_"+partsOfSpeech[u].indefinitePlural;
		  
		  
		  //check for classless
		}else if( (temp==partsOfSpeech[u].definiteSingular && typeof partsOfSpeech[u].type !=='undefined')){
			this.highlightColour="#0000ff";
          return "PartOfSpeech:_"+partsOfSpeech[u].partOfSpeech+"\n_Type:_"+partsOfSpeech[u].type+"\n_Cardinality:_"+partsOfSpeech[u].cardinality+"\n_PhoneticPreference:_"+partsOfSpeech[u].phoneticPreference+"\n_definiteSingular:_"+partsOfSpeech[u].definiteSingular+"\n_indefiniteSingular:_"+partsOfSpeech[u].indefiniteSingular+"\n_definitePlural:_"+partsOfSpeech[u].definitePlural+"\n_indefinitePlural:_"+partsOfSpeech[u].indefinitePlural;
		  
		  //check for post nouns
		}else if( u<postPartsOfSpeech.length){
			var temp3=temp;
			temp=temp2.substring(temp2.indexOf("'"),temp2.length);
			
			//console.log("(partOfSpeech)Enter:_"+temp +"_comparedTo_"+postPartsOfSpeech[u].definiteSingular+"_pronoun?_"+includesPronoun(temp));
			
			if((temp==postPartsOfSpeech[u].definiteSingular) && typeof partsOfSpeech[u].nounType !== 'undefined'){
				this.highlightColour="#99ffcc";
			  return "PartOfSpeech:_"+postPartsOfSpeech[u].partOfSpeech+"\n_NounTypeType:_"+postPartsOfSpeech[u].nounType+"\n_Cardinality:_"+postPartsOfSpeech[u].cardinality+"\n_PhoneticPreference:_"+postPartsOfSpeech[u].phoneticPreference+"\n_definiteSingular:_"+postPartsOfSpeech[u].definiteSingular+"\n_indefiniteSingular:_"+postPartsOfSpeech[u].indefiniteSingular+"\n_definitePlural:_"+postPartsOfSpeech[u].definitePlural+"\n_indefinitePlural:_"+postPartsOfSpeech[u].indefinitePlural;
		  
		}
		
		temp=temp3;
		
		}	
		
		}else{ /*console.log("bad Spelling_"+temp2);*/}
		
		}			
		  
	  }
	 
	  //if not a class which type of lone word
	  if(this.isIndependentPronoun().buulean || this.isDependentPronoun().buulean){
		  this.highlightColour="#66ff66";
		  return "Pronoun";
	  }else if(this.isAdjective().buulean){
		  this.highlightColour="#999966";
		  return "Adjective";
	  }else if(this.isConjunction().buulean){
		  this.highlightColour="#ccff33";
		  return "Conjunction";
	  }else if(this.isLonePrefix().buulean){
		  this.highlightColour="#cc33ff";
		  return "LonePrefix";
	  }else if(this.isLoneSuffix().buulean){
		  this.highlightColour="#993366";
		  return "LoneSuffix";
	  }else if(this.isInterjection().buulean){
		  this.highlightColour="#cc6600";
		  return "Interjection";
	  }else if(this.isLoneLetter().buulean){
		  this.highlightColour="#669999";
		  return "LoneLetter";
	  }else if(this.isIndependentAdjective().buulean){
		  
		  this.highlightColour="#ff99ff";
		  return "Independent Adjective";
		  
	  }else if(this.isGreeting().buulean){
		  this.highlightColour="#666633";
		  return "Greeting";
		  
	  }else if(this.isLoneFunctionative().buulean){
		  this.highlightColour="#ffff99";
		  return "lone Functionative";
		  
	  }else if(this.isResponse().buulean){
		  this.highlightColour="#6396f3";
		  return "Response";
		  
	  }else if(this.isQuestionative().buulean){
		  this.highlightColour="#ff9966";
		  return "Questionative";
	  }else if(this.isLocationalPreposition().buulean){
		  this.highlightColour="#669900";
		  return "LocationalPreposition";
	  }else if(this.isClasslessProperNoun().buulean){
		  this.highlightColour="#99ffcc";
		  return "ClasslessProperNoun";
	  }else if(this.letters.indexOf("'") == 0 && this.hasCorrectAffixi() && (this.letters.indexOf("̀") == -1) ){
		  this.highlightColour="#9999ff";
		  return "Verb";
	  }else{
	  this.highlightColour="#ff3300";
	 return "N/A";
	 
	  }
	  
  }
  
  isConjunction(){
	 var temp=this.letters;
	  temp=replaceAllDisturbances(temp);
	  temp=temp.replace("‘","'");
	for(var r=0;r<conjunctions.length;r++){
		
		//dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{return {'buulean':false, 'value':[]};}
		
		if(temp==conjunctions[r]){return {'buulean':true, 'value':[conjunctions[r]]};}
		 
	 } 
	 
	 return {'buulean':false, 'value':[]};
	 
  }
  
  isPronoun(){
	  var temp=this.letters;
	  temp=replaceAllDisturbances(temp);
	  if(temp.indexOf("'")>-1){temp=temp.substring(0,temp.indexOf("'")+1);}
	 for(var r=0;r<temneIndependentPronouns.length;r++){
		 //dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{return {'buulean':false, 'value':[]};}
		 
		//console.log(temp+"_compared to_"+temneIndependentPronouns[r].name);
		if(temp==temneIndependentPronouns[r].name){ return {'buulean':true, 'value':temneIndependentPronouns[r]};}
		 
	 } 
	 
	 for(var q=0;q<temneIndependentPronouns.length;q++){
		 //dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{return {'buulean':false, 'value':[]};}
		 
		//console.log(temp+"_compared to_"+temneIndependentPronouns[r].name);
		if(temp==temneDependentPronouns[q].name){   return {'buulean':true, 'value':temneDependentPronouns[q]};}
		 
	 } 
	 
	 return {'buulean':false, 'value':[]};
	 
  }
  
  isDependentPronoun(){
	  var temp=this.letters;
	  temp=replaceAllDisturbances(temp);
	  
	 for(var r=0;r<temneDependentPronouns.length;r++){
		 //dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{return {'buulean':false, 'value':[]};}
		//console.log(temp+"_compared to_"+temneDependentPronouns[r].name);
		if(temp==temneDependentPronouns[r].name){   return {'buulean':true, 'value':temneDependentPronouns[r]};}
		 
	 } 
	 
	 return {'buulean':false, 'value':[]};
	 
  }
  
  isIndependentPronoun(){
	  var temp=this.letters;
	  temp=replaceAllDisturbances(temp);

	 for(var r=0;r<temneIndependentPronouns.length;r++){
		 //dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{return {'buulean':false, 'value':[]};}
		//console.log(temp+"_compared to_"+temneIndependentPronouns[r].name);
		if(temp==temneIndependentPronouns[r].name){   return {'buulean':true, 'value':temneIndependentPronouns[r]};}
		 
	 } 
	 
	 return {'buulean':false, 'value':[]};
	 
  }
  
  isAdjective(){
	  var temp=this.letters.replace("’","'");
	  temp=replaceAllDisturbances(temp);
	  var temp2;
	  
	  if(isAMemberOfTemneAlphabet(temp) && this.hasCorrectAffixi() && !indexOfAnyOfTheseThings(temp,adjectivesHates)){}else{return {'buulean':false, 'value':[]};}
	  
	  //a dependent adjective
	  if(indexOfAnyOfTheseThings_forTemneIndependent_dependentAdjectives(temp, temneIndependent_dependentAdjectives)){
		
		if(temp.indexOf("'")>-1){temp2=temp.substring(0,temp.indexOf("'")+1);}
		if(isAMemberOfTemneAlphabet(temp) && Word.isIndependent_dependentAdjectives( temp.substring(temp.indexOf("'"),temp.length) ).buulean){
			
			if(this.isPronoun().buulean){
			
				if(multipleThingsizIndexOf(Word.isIndependent_dependentAdjectives( temp.substring(temp.indexOf("'"),temp.length) ).value.masters , temp2).length > 0 ){
			
					return {'buulean':true, 'value':[temp]};
					
				}else{
					
					return {'buulean':false, 'value':[]};
				}
			 
		 }
		}
			
		  
	  }
	  
	 //an attached adjective preceded by an indefinite 
	for(var z=0;z<partsOfSpeech.length;z++){
		//console.log(temp+"_comparedTo_"+partsOfSpeech[z].indefinitePlural +"_same?_"+( temp.indexOf(partsOfSpeech[z].indefinitePlural)==0 ));
		//dont bother with foriegn letters
		
		
		if(( temp.indexOf(partsOfSpeech[z].indefiniteSingularPronounForm)== 0 || temp.indexOf(partsOfSpeech[z].indefinitePluralPronounForm)== 0 ) && temp.indexOf("'h")>-1 && (temp.indexOf("́")>temp.indexOf("'h") || temp.indexOf("́")==-1 ) && (temp.indexOf("̀")>temp.indexOf("'h") || temp.indexOf("̀")==-1)){
			//console.log("guuuuuu1");
		return {'buulean':true, 'value':[temp]};
	}
		
	}  
	
	//an attached adjective preceded by a Definite 
	for(var z=0;z<partsOfSpeech.length;z++){
		//console.log(temp+"_comparedTo_"+partsOfSpeech[z].definiteSingular +"_same?_"+( temp.indexOf(partsOfSpeech[z].definiteSingular)==0 ));
		//dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{return {'buulean':false, 'value':[]};}
		
		if(( temp.indexOf(partsOfSpeech[z].definiteSingularPronounForm)== 0 || temp.indexOf(partsOfSpeech[z].definitePluralPronounForm)== 0  ) && temp.indexOf("'h")>-1 && (temp.indexOf("̀")>temp.indexOf("'h") || temp.indexOf("̀")==-1)){
			//console.log("guuuuuu2");
		return {'buulean':true, 'value':[temp]};
	}
		
	}
	
	//an attached adjective preceded by a pronoun
	
	//console.log("guuuuuu3_"+ (includesPronoun(temp)) );
	if( (includesPronoun(temp))&& (temp.indexOf(includesWhichPronoun(temp).name) < temp.indexOf("'h") ) && temp.indexOf("'h")>-1 && (temp.indexOf("́")>temp.indexOf("'h") || temp.indexOf("́")==-1 ) && (temp.indexOf("̀")>temp.indexOf("'h") || temp.indexOf("̀")==-1)){
		
		return {'buulean':true, 'value':[temp]};
	}
		
	
	
	//pure adjectives
	if(temp.indexOf("'h")==0 && (temp.indexOf("́")>temp.indexOf("'h") || temp.indexOf("́")==-1 ) && (temp.indexOf("̀")>temp.indexOf("'h") || temp.indexOf("̀")==-1)){
		//console.log("guuuuuu4");
		return {'buulean':true, 'value':[temp]};
	}
	
		return {'buulean':false, 'value':[]};

	
  }
  
  isIndependent_dependentAdjectives(){
	  var temp=this.letters;
	  temp=replaceAllDisturbances(temp);
	 for(var r=0;r<temneIndependent_dependentAdjectives.length;r++){
		 //dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{return {'buulean':false, 'value':[]};}
		//console.log(temp+"_compared to_"+temneIndependentPronouns[r].name);
		if(temp==temneIndependent_dependentAdjectives[r].name){   return {'buulean':true, 'value':temneIndependent_dependentAdjectives[r]};}
		 
	 } 
	 
	 return {'buulean':false, 'value':[]};
	 
  }
  
  static isIndependent_dependentAdjectives(input){
	  var temp=input;
	  temp=replaceAllDisturbances(temp);
	 for(var r=0;r<temneIndependent_dependentAdjectives.length;r++){
		 //dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{return {'buulean':false, 'value':[]};}
		//console.log(temp+"_compared to_"+temneIndependentPronouns[r].name);
		if(temp==temneIndependent_dependentAdjectives[r].name){   return {'buulean':true, 'value':temneIndependent_dependentAdjectives[r]};}
		 
	 } 
	 
	 return {'buulean':false, 'value':[]};
	 
  }
  
  isLonePrefix(){
	var temp=this.letters.replace("’","'");
	temp=replaceAllDisturbances(temp);
	var temp2= temp.replace("h́","");//make sure the sounded h isnt the one providing the acent
	//console.log("(isLonePrefix)Enter:_"+temp);
	if(temp.indexOf("h")>-1 && temp.indexOf("́")> -1 && (temp.indexOf("h")>temp.indexOf("́")) && (temp.indexOf("'")== -1) && temp2.indexOf("́") > -1 && temp.indexOf("h")==temp.length-1 ){
		return {'buulean':true, 'value':[temp]};
	}else{
		return {'buulean':false, 'value':[]};

	}		  
  }
  
  isPrefix(){
	var temp=this.letters.replace("’","'");
	temp=replaceAllDisturbances(temp);
    var temp2= temp.replace("h́","");//make sure the sounded h isnt the one providing the acent
	if(temp.indexOf("h")>-1 && temp.indexOf("́")>-1 && (temp.indexOf("h")>temp.indexOf("́")) && (temp.indexOf("'")<temp.indexOf("́")) && (temp.indexOf("'h")==-1 || temp.indexOf("'h́")> -1 || temp.indexOf("'h̀")> -1) && temp2.indexOf("́") > -1 && temp.indexOf("h")==0 ){
		return {'buulean':true, 'value':[temp]};
	}else{
		return {'buulean':false, 'value':[]};

	}		  
  }
  
  isLoneSuffix(){
	  
	  var temp=this.letters.replace("’","'");
	  temp=replaceAllDisturbances(temp);
	  var temp2= temp.replace("h́","");//make sure the sounded h isnt the one providing the acent 
	if(temp.indexOf("h")>-1 && temp.indexOf("h")<temp.indexOf("́") && temp.indexOf("'")== -1 && temp2.indexOf("́") > -1 && temp.indexOf("h")==0 ){
		return {'buulean':true, 'value':[temp]};
	}else{
		return {'buulean':false, 'value':[]};

	}	
	  
  }
  
  isSuffix(){
	  
	  var temp=this.letters.replace("’","'");
	  temp=replaceAllDisturbances(temp);
	 var temp2= temp.replace("h́","");//make sure the sounded h isnt the one providing the acent
	if(temp.indexOf("h")>-1 && temp.indexOf("h")<temp.indexOf("́") && (temp.indexOf("'")<temp.indexOf("́")) && (temp.indexOf("'h")==-1 || temp.indexOf("'h́")> -1 || temp.indexOf("'h̀")> -1) && temp2.indexOf("́") > -1 ){
		return {'buulean':true, 'value':[temp]};
	}else{
		return {'buulean':false, 'value':[]};

	}	
	  
  }
  
  isInterjection(){
		var temp=this.letters.replace("’","'");
		temp=replaceAllDisturbances(temp);
		var temp2=this.letters;
		
    for(var r=0;r<interjections.length;r++){
		//dont bother with foriegn letters
		
		if(isAMemberOfTemneAlphabet(temp)){}else{return {'buulean':false, 'value':[]};}
		
		if(temp==interjections[r] ){
			//console.log(temp+"_comparedTo_"+interjections[r]+"_from_"+temp2);
			if(temp2.indexOf(temp+",")){
	
				return {'buulean':true, 'value':interjections[r]};
				
			}
			
			}
		 
	 }    
        	 
	if( (temp.indexOf("!") > -1)){
		return {'buulean':true, 'value':[temp]};
	
	}else{
		return {'buulean':false, 'value':[]};

	}	
	  

	 
  }
 
  isLoneLetter(){
	 var temp=this.letters.replace("’","'");
	 temp=replaceAllDisturbances(temp);
	 var temp2= temp.substring(1,temp.length);
	 //console.log(temp2);
	 //console.log(!isAMemberOfTemneAlphabet(temp2));
	if(temp.indexOf("̀")>-1 && !isAMemberOfTemneAlphabet(temp2) && temp.length>1 ){
		return {'buulean':true, 'value':[temp]};
	}else{
		return {'buulean':false, 'value':[]};

	}	
	   
  }
  
  isIndependentAdjective(){
	  var temp=this.letters;
	 temp=replaceAllDisturbances(temp);
	for(var r=0;r<independentAdjectives.length;r++){
		//dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{return {'buulean':false, 'value':[]};}
		if(temp==independentAdjectives[r]){return {'buulean':true, 'value':independentAdjectives[r]};}
		 
	 } 
	 
	 return {'buulean':false, 'value':[]};
	 
  }
  
  isGreeting(){
	 var temp=this.letters;
	 temp=replaceAllDisturbances(temp); 
	for(var r=0;r<greetings.length;r++){
		//dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{return {'buulean':false, 'value':[]};}
		
		if(temp==greetings[r]){return {'buulean':true, 'value':greetings[r]};}
		 
	 } 
	 
	 return {'buulean':false, 'value':[]};
	 
  }
  
  isResponse(){
	var temp=this.letters;
	 temp=replaceAllDisturbances(temp); 
	for(var r=0;r<responses.length;r++){
		//dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{return {'buulean':false, 'value':[]};}
		
		if(temp==responses[r]){return {'buulean':true, 'value':responses[r]};}
		 
	 } 
	 
	 return {'buulean':false, 'value':[]};
	 
  }
  
  isLoneFunctionative(){
	 var temp=this.letters;
	 temp=replaceAllDisturbances(temp); 
	 
	for(var r=0;r<loneFunctionatives.length;r++){
		//dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{return {'buulean':false, 'value':[]};}
		
		//console.log(temp+"_comparedTo_"+loneFunctionatives[r]);
		if(temp==loneFunctionatives[r]){return {'buulean':true, 'value':loneFunctionatives[r]};}
		 
	 } 
	 
	 return {'buulean':false, 'value':[]};
	 
  }
  
  isQuestionative(){
	 var temp=this.letters;
	 temp=replaceAllDisturbancesMinusQuestionMark(temp);
	for(var r=0;r<questionatives.length;r++){
		//dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{return {'buulean':false, 'value':[]};}
		
		if(temp==questionatives[r]){return {'buulean':true, 'value':questionatives[r]};}
		 
	 } 
	 
	 return {'buulean':false, 'value':[]};
	 
  } 
  
  isLocationalPreposition(){
	 var temp=this.letters;
	 temp=temp.replace("?",""); temp=replaceAllDisturbances(temp);
	for(var r=0;r<temnePrepositions.length;r++){
		//dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{  return {'buulean':false, 'value':[]}; }
		//console.log(temp+"_comparedTo_"+temnePrepositions[r]);
		if(temp==temnePrepositions[r].name){return {'buulean':true, 'value':temnePrepositions[r]};}
		 
	 } 
	 
	 return {'buulean':false, 'value':[]};
	 
  }
  
  isClasslessProperNoun(){
	 var temp=this.letters;
	 temp=temp.replace("?",""); temp=replaceAllDisturbances(temp);
	
		//dont bother with foriegn letters
		if(isAMemberOfTemneAlphabet(temp)){}else{ return {'buulean':false, 'value':[]};}
		//console.log(temp.indexOf("̀")==1 && temp.indexOf("'")==-1);
		if(temp.indexOf("̀")==1 && temp.indexOf("'")==-1){return {'buulean':true, 'value':"ClasslessProperNoun"};}
		 
	
	 
	 return {'buulean':false, 'value':[]};
	 
  }
  
  giveHighlightColour(){
	  
	  this.partOfSpeech=this.partOfSpeech();
	  
  }	
  
  highlightColourFunction(preceder){
	//console.log("preceder_"+preceder.words()[0].letters.indexOf("'"));
	//console.log(preceder);
	//console.log("this_"+this.letters);
	var trackOfUnderlings=0;
	
	 if(this.isDependentPronoun().buulean && preceder.words()[0].letters.indexOf("'") > 0 && preceder.words()[0].letters.indexOf("tʌkʌ'") == -1 && preceder.words()[0].letters.indexOf("k'") == -1 && preceder.words()[0].letters.indexOf("ḱ'") == -1){
		//console.log("masterType_"+this.isDependentPronoun().value.masterType);
		//console.log("partOfSpeech_"+preceder.words()[0].partOfSpeech);
		 //console.log(includesWhichPronoun( preceder.words()[0].letters ));
		 if(indexOfAnyOfTheseThings(preceder.words()[0].partOfSpeech,this.isDependentPronoun().value.masterType)){
			//console.log("masters_"+this.isDependentPronoun().value.masters);
			//console.log("getPartOfSpeechClass_"+preceder.words()[0].getPartOfSpeechClass());
			if(multipleThingsizIndexOf(this.isDependentPronoun().value.masters, preceder.words()[0].getPartOfSpeechClass()).length > 0){
			 return this.highlightColour;
			 
		 }else if( (includesWhichPronoun( preceder.words()[0].letters ) != null) && indexOfAnyOfTheseThings_forIndependentPronouns(includesWhichPronoun( preceder.words()[0].letters ).name,temneIndependentPronouns) ){
			 //console.log("getPartOfSpeechClass_"+preceder.words()[0].getPartOfSpeechClass());
			 return this.highlightColour;
		 }else{
			 console.log("");
			 return "red";
		 } 
			  
		 }
		 
		 
	 } 
	 
	 
	 if(this.isIndependent_dependentAdjectives().buulean && preceder.words()[0].letters.indexOf("'") > 0 && preceder.words()[0].letters.indexOf("tʌkʌ'") == -1 && preceder.words()[0].letters.indexOf("k'") == -1 && preceder.words()[0].letters.indexOf("ḱ'") == -1 ){
		 
		 //console.log(multipleThingsizIndexOf(this.isIndependent_dependentAdjectives().value.masterType, preceder.words()[0].partOfSpeech).length);
		 
		 
			 
		if(indexOfAnyOfTheseThings( preceder.words()[0].partOfSpeech, this.isIndependent_dependentAdjectives().value.masterType ) > 0){
			
			for(var bndex=0; bndex< (this.isIndependent_dependentAdjectives().value.masters).length; bndex++){
				
				trackOfUnderlings+= multipleThingsizIndexOf(collectUnderlings(this.isIndependent_dependentAdjectives().value.masters[bndex] ), replaceAllDisturbances(preceder.words()[0].letters).substring(0,replaceAllDisturbances(preceder.words()[0].letters).indexOf("'")+1)).length;
			
			}
			
			trackOfUnderlings+= multipleThingsizIndexOf(this.isIndependent_dependentAdjectives().value.masters, replaceAllDisturbances(preceder.words()[0].letters).substring(0,replaceAllDisturbances(preceder.words()[0].letters).indexOf("'")+1)).length;
			
			if(trackOfUnderlings>0){
			
			 
				return this.highlightColour;
			 
		 }else{
			 //console.log("huru ", replaceAllDisturbances(preceder.words()[0].letters).substring(0,replaceAllDisturbances(preceder.words()[0].letters).indexOf("'")+1));
			 return "red";
			 
		 } 
			 
			 
		 }
		 
		
		 
	 } 
	  
	 return this.highlightColour; 
  }	
 
  getPartOfSpeechClass(){
	  //console.log(this);
	  var temp=this.partOfSpeech;
	  if(temp.indexOf("nounType:")> -1){
		
		for(var i=0;i<partsOfSpeech.length;i++){
			
			if(this.letters.indexOf(partsOfSpeech[i].definiteSingular)>-1){ return partsOfSpeech[i].definiteSingular;}
			if(this.letters.indexOf(partsOfSpeech[i].indefiniteSingular)>-1){ 
				return partsOfSpeech[i].indefiniteSingular ;}
			if(this.letters.indexOf(partsOfSpeech[i].definitePlural)>-1){ return partsOfSpeech[i].definitePlural;}
			if(this.letters.indexOf(partsOfSpeech[i].indefinitePlural)>-1){ return partsOfSpeech[i].indefinitePlural;}
			
		}
	}else{ 
		//console.log("input was not a  Front noun "+ this);
		}	
	
		if(temp.indexOf("postNoun")> -1){
		
		for(var i=0;i<postPartsOfSpeech.length;i++){
			//console.log(postPartsOfSpeech[i].definiteSingular);
			if(this.letters.indexOf(postPartsOfSpeech[i].definiteSingular)>-1){ return postPartsOfSpeech[i].definiteSingular;}
			if(this.letters.indexOf(postPartsOfSpeech[i].indefiniteSingular)>-1){ 
				return postPartsOfSpeech[i].indefiniteSingular ;}
			if(this.letters.indexOf(postPartsOfSpeech[i].definitePlural)>-1){ return postPartsOfSpeech[i].definitePlural;}
			if(this.letters.indexOf(postPartsOfSpeech[i].indefinitePlural)>-1){ return postPartsOfSpeech[i].indefinitePlural;}
			
		}
		
		} else{ 
			//console.log("input was not a postNoun "+ this);
			} 
	  
	   
  }

  hasCorrectAffixi(){
	  
	  var temp=this.letters;
	  var one=false;
	  var two=false;
	  temp=temp.replace("h́","");
	  temp=temp.replace("h̀","");
	  temp=temp.replace("'h","'");
	  temp=temp.replace("h'","'");
	  temp=temp.replace("h̄","");
	  temp=temp.replace("̄","");
	  
	  if(temp.indexOf("h")>-1){
		   
		if(this.morphemes.morphemes.length == (getIndicesOf("h",temp,false)).length+1 ){// plust 1 cus the first two index in morphemes.morphemes are for part of speech and the root
		
		one=true;
		}
		
		if( indexOfAnyOfTheseThings( (this.morphemes.identifyRoot()).slice(-1) , temneVowels)  && temp.indexOf("hyɛ́") == -1 ){
			
			two=true;
			
		}else if( !indexOfAnyOfTheseThings( (this.morphemes.identifyRoot()).slice(-1) , temneVowels)  && temp.indexOf("hɛ́") == -1 ){
			
			two=true;
		
		}  
		  
		  
	  }else{ return true;}
	  

	if(!(one && two)){
		//console.log("");
		}
	
	return one && two;
 }
	
}

class Utterance {
	
  constructor(utter) {
    this.id = utter.id;
    this.context = utter.innerText;
  }
  
  type(){
	  var temp1;
	  
	if(this.context.indexOf("-")>-1){
		
        temp1=this.context.indexOf("-q");
		
		if(this.context.indexOf("-q")> -1 && ((temp1+4)<this.context.length)){
			
			return "repeatCompound";
			
		}else if(this.context.indexOf("-q")>-1){
			
			return "repeatSimple";
			
		}else{
			
			return "compound";
			
		}

	}else{

		return "simple";

	}		
	  
  }
  
  content(){
	  
	  return this.context;
	  
  }
  
  words(){
	 var output=[]; 
	 var temp=replaceAllDisturbances(this.context);
	 //console.log("(word)Enter:"+ this.content()+"_type_"+this.type());
	if (this.type()=="compound"){
		
        output=temp; 
		output=replaceAllDisturbances(output);
		output=output.substring(output.indexOf("'")+1,output.length); 
		output=output.split("-");
		//console.log("before_"+output);
		
		for(var i=0; i<output.length;i++){
			//normal coumpound
			if(temp.indexOf("'")> -1 && !indexOfAnyOfTheseThings_forPartsOfSpeech(temp,postPartsOfSpeech) ){
			
				output[i]=temp.substring(0,temp.indexOf("'")+1)+output[i];			
			//these others are for postClass compunds	
			}else if(temp.indexOf("'")> -1 && !indexOfAnyOfTheseThings_forPartsOfSpeech(output[i],postPartsOfSpeech)){
				//console.log("sump");
				output[i]= output[i] + temp.substring(temp.indexOf("'"),temp.length);
				
			}else if(temp.indexOf("'")> -1){
				//console.log("sumpn");
				output[i]= output[i];
			}
			
			
		}
		
		//console.log("After_"+output);

	}else if(this.type()=="simple"){
		
		output[0]=temp;
		
	}else if(this.type()=="repeatSimple"){
		
		output[0]=temp.substring(0,temp.indexOf("-")) + temp.substring(temp.lastIndexOf("q")+1,temp.length);
		
	}else if(this.type()=="repeatCompound"){
		
		output=temp.split("-"); 
		
		for(var o=1;o<output.length;o++){
			
			
				
			if(output[o].indexOf("q")>-1 && output.length-1 != 0){
				
			output[o]=temp.substring(0,temp.indexOf("'")+1)+ output[o-1].substring(temp.indexOf("'")+1,output[o-1].length) +output[o].substring(1,output[o].length);	
				
			}else{
				
				output[o]=temp.substring(0,temp.indexOf("'")+1)+output[o];
				
			}
				
		
			
			
		}
	}

    //makes all the outputs word objects
	
	for(var e=0;e<output.length;e++){
		
	  	output[e]=new Word(output[e]);
		
	}
     
    //console.log("(word)Leave:"+ output);	 
	return output;  
  }
  
}

class Morpheme{
	

  constructor(word) {
	  
	  if(typeof(word) == "object" && word.constructor.name =="Word"){
		this.Word=word;  
		//console.log(word);  
		this.word = word.letters;
		this.morphemes=[];  
		this.identifyMorphemes();
		//console.log(this);
	  }else{
		  
		  console.log("input was not an instance of Word :");
		  console.log("Class constructor_"+word.constructor.name);
		  console.log("typeof_"+typeof(word));
		  console.log(word);
		  
	  }
	  
	  
    
  }	
  
  identifyMorphemes(){
	  
	  this.morphemes.push({'root' : this.identifyRoot()});
	  var affixi=this.getAffixi();
	  
	  for(var q=0;q<affixi.length;q++){
		  
		  this.morphemes.push({'affix' : affixi[q]});
		  
	  }
  }
  
  getAffixi(){
	  
	  
	  
	  return (this.identifyPrefixi()).concat(this.identifySuffixi());
	  
	  
	  
	  
  }
  
  identifyPrefixi(){
	  
	var input=this.word; 
	var temp;
	var temp2;
	var indicisOfH=getIndicesOf("h", temp, false);
	var outputs =[];
	var infinityStopper=0;
	var index=0;//keeptrack of output
	var index2=0;//keep track of indicis of h
	var previousIndex=1;
	temp=replaceAllDisturbances(input);
	if(temp.indexOf("'") > -1){
	  temp=temp.substring(temp.indexOf("'"),temp.length);
	  temp=temp.replace("'h","'");
		while( (temp.indexOf("́") > -1 || temp.indexOf("́") > -1 ) && infinityStopper<1000){
			
			indicisOfH=getIndicesOf("h", temp, false);
			temp2=temp.substring(1,indicisOfH[0]+1);
			//console.log(temp2);
			
			if(temp.indexOf("h́") != indicisOfH[0] && temp.indexOf("h̀") != indicisOfH[0] && temp2.indexOf("́") >-1){
				
				outputs[index]=temp2;
				temp=temp.replace(outputs[index],"");
					
					
			}else if(temp2.indexOf("́") ==-1){
				
				return outputs;
				
			}else if( temp.indexOf("h́") == indicisOfH[indicisOfH.length] || temp.indexOf("h̀") == indicisOfH[indicisOfH.length] && indicisOfH.length >1 ){
					
					temp2=temp.substring(indicisOfH[1],temp.length);
					outputs[index]=temp2;
					temp=temp.replace(outputs[index],"");
					
				}
			//console.log(infinityStopper);
			
			
			index++;
			infinityStopper++;
		}  
		  
	  }
	  
	  
	  for(var ip=0;ip<outputs.length;ip++){
		  temp=outputs[ip].replace("̄","");
		  //make sure the closet yowel to the h is the one with the accent
		  //make sure the closest letter to the h is the one with the accent
		  
		  if(indexOfAnyOfTheseThings(temp,temneVowels)){
		
			 if( (!((temp.indexOf(getNearestVowelToTheLeft(temp,"h").letter + "́") > -1)))){
				//console.log(getNearestVowelToTheLeft(temp,"h").letter + "́" ); 
				//console.log(outputs[ip]);  
				outputs[ip]=null;  
				  
			  }
	
				if( temp.indexOf(getNearestVowelToTheLeft(temp,"h").letter+ "́")  != getNearestVowelToTheLeft(temp,"h").location ){
					//console.log(temp.indexOf(getNearestVowelToTheLeft(temp,"h").letter + "́"),temp.indexOf(getNearestVowelToTheLeft(temp,"h").letter) );
					outputs[ip]=null; 
					
				}  
				  
				  
		  }else{
				  
				if( (!((temp.indexOf(getNearestLetterToTheLeft(temp,"h").letter+ "́") > -1)))
					 ) {
					
					//console.log(outputs[ip]);  
					outputs[ip]=null;  
				  
			  }
			  
			  if( temp.indexOf(getNearestLetterToTheLeft(temp,"h").letter) != temp.indexOf(getNearestLetterToTheLeft(temp,"h").letter+ "́") ){
				  
				  outputs[ip]=null;
				  
			  }
				  
				  
			  }
			 
	  }
  	  
	  outputs=outputs.filter(function(el) { return el; });
	  
	  return outputs;
	 

}
 
  identifySuffixi(){
	 
	 var prefixes= this.identifyPrefixi();
	 var temp;
	 var temp2;
	 var index2;
	 var index=0;
	 var indicisOfH;
	 var results=[];
	 var infinityStopper=0;
	 temp=replaceAllDisturbances(this.word);
	 if(temp.indexOf("'") > -1){
	 
		 temp=temp.substring(temp.indexOf("'"),temp.length);
		 temp=temp.replace("'h","'");//take care of adjectives
		 for(var i=0; i< prefixes.length;i++){
			 
			temp=temp.replace(prefixes[i],""); 
			 
		 }
		 //console.log(temp);
		 
		while( (temp.indexOf("́") > -1 || temp.indexOf("́") > -1 ) && infinityStopper<1000){
			
			indicisOfH=getIndicesOf("h", temp, false);
			
			temp2=temp.substring(indicisOfH[indicisOfH.length-1],temp.length);
			
			if(temp.indexOf("h́") != indicisOfH[indicisOfH.length-1] && temp.indexOf("h̀") != indicisOfH[indicisOfH.length-1] && temp2.indexOf("́") >-1){
				
				results[index]=temp2;
				//console.log(indicisOfH);
				temp=temp.replace(results[index],"");	
				//console.log(temp);	
			}else if(temp2.indexOf("́") ==-1){
				
				return results;
				
			}else if( (temp.indexOf("h́") == indicisOfH[indicisOfH.length-1] || temp.indexOf("h̀") == indicisOfH[indicisOfH.length-1] ) && 
					(indicisOfH.length-2 >0)  ){
				
				temp2=temp.substring(indicisOfH[indicisOfH.length-2],temp.length);
				results[index]=temp2;
				temp=temp.replace(results[index],"");
				
				
			}
			
			//console.log(infinityStopper);
			
			
			index++;
			infinityStopper++;
		}  
		
		  
	  }
	  
	  
	  for(var ip=0;ip<results.length;ip++){
		  temp=results[ip].replace("̄","");
		  //make sure the closet yowel to the h is the one with the accent
		  //make sure the closest letter to the h is the one with the accent
		  //console.log("hey");
		  if(indexOfAnyOfTheseThings(temp,temneVowels)){
			 //console.log(getNearestVowelToTheRight(temp,"h").letter);
			 if( ( !(temp.indexOf(getNearestVowelToTheRight(temp,"h").letter + "́" ) > -1))){
				//console.log(getNearestVowelToTheRight(temp,"h").letter + "́",temp.indexOf(getNearestVowelToTheRight(temp,"h").letter, temp.indexOf(getNearestVowelToTheRight(temp,"h").letter + "́" ) )); 
				//console.log(results[ip]);  
				results[ip]=null;  
				  
			  }
				if(temp.indexOf(getNearestVowelToTheRight(temp,"h").letter + "́" )!=temp.indexOf(getNearestVowelToTheRight(temp,"h").letter	)){
					results[ip]=null;
				}  
				  
				  
		  }else{
				//console.log(results,getNearestLetterToTheRight(temp,"h"));  
				if( !((temp.indexOf(getNearestLetterToTheRight(temp,"h").letter + "́" ) > -1) )){
					
					//console.log(results[ip]);  
					results[ip]=null;  
				  
			  }
				if(temp.indexOf(getNearestLetterToTheRight(temp,"h").letter + "́" ) != temp.indexOf(getNearestLetterToTheRight(temp,"h").letter )){
					results[ip]=null; 
				}  
				  
			  }
			 
	  }
	  
	  
	  //console.log(temp);
	  
	  results=results.filter(function(el) { return el; });
	  
	  return results;
	 
	 
 }	

  identifyRoot(){
	
	var temp=this.word;
	var affixi=this.getAffixi();
	for(var z=0;z<affixi.length;z++){
		
		temp=temp.replace(affixi[z],"");
		
	}
	
	return temp;
	
} 
	
}



/*

/*
 editorContent.addEventListener('keyup', event => {
	 
	 if (event.code === 'Space') {
    
		var utterances=identifyUtterances(editorContent.innerText);
		utterances=reattachUtterances(utterances);
		editorContent.innerHTML=utterances;
		setEndOfContenteditable(editorContent);
		
		
		glyphs=createUtterances(document.getElementsByClassName("utterance"));
		
		colourCoder(glyphs,2);
	
		//console.log(glyphs[0].words()[0].partOfSpeech());
	
	
  }
	 
 
  
})

*/


function showPartOfSpeech(span){
	//console.log(span);
	var box=document.getElementById("hoverBox");
	box.style.visibility="visible";
	
	//var competingPartsOfSpeech1=createUtterancesFromWord(span)[0];
	var competingPartsOfSpeech2=createUtterancesFromWord(span)[0].words();
	//console.log(competingPartsOfSpeech2);
	if((competingPartsOfSpeech2[competingPartsOfSpeech2.length-1].partOfSpeech).indexOf("interjection") > -1){
		box.innerText=competingPartsOfSpeech2[competingPartsOfSpeech2.length-1].partOfSpeech;
	}else{
	box.innerText=competingPartsOfSpeech2[0].partOfSpeech;
	//box.innerText=competingPartsOfSpeech1.type();
	}
}

function hidePartOfSpeech(){
	
	var box=document.getElementById("hoverBox");
	box.style.visibility="hidden";
	box.innerText="";
	
	
}
  
 function isAMemberOfTemneAlphabet(text){
//if there is even a single letter of temne true is returned
  //console.log ("(isAMemberOfTemneAlphabet)enter : "+text);

	var alphabet=["a","m","n","s","e","r","ŋ","ɪ","i","j","θ","t","o","b","d","ɱ","u","l","β","f","ɔ","k","w","x","ɛ","z","c","g",
                "ʌ","y","p","ʂ","ə","h́","ʒ","v","h","-" ];

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

   //console.log ("(isAMemberOfTemneAlphabet)Leave : True "+text +"\n_Length: "+letters);

   return true;

  }else{

   //console.log ("(isAMemberOfTemneAlphabet)Leave : False "+text+"\n_Length: "+letters);

   return false;

  }



}

function colourCoder(array,level){
	//console.log("(colourCoder) Enter:_"+array);
	colourCode=level;
	if(array.constructor != Array){
		console.log("colourCoder input is not an array");
		return;
		
	}
	
	for(var p=0;p<array.length;p++){
		
		if( isAMemberOfTemneAlphabet(array[p].words()[0].letters) ){

		if(p>0){
			
			document.getElementById(array[p].id).style.backgroundColor=array[p].words()[0].highlightColourFunction(array[p-1]);;
			//console.log(array[p],array[p].words()[0]);
			
		}else{
		
			document.getElementById(array[p].id).style.backgroundColor=array[p].words()[0].highlightColour;
		
		}
	
		}
	}
}

function someOtherMethod(){
	
	
}

function identifyUtterances(words){
	
	
	words=words.split(/(\s+)/);
	//console.log("(IdentifyUtterances) Enter:_"+words);
	words2=[...words];
	var temp="gae";
	var temp2=editorContent.innerHTML;
	//console.log("(IdentifyUtterances) temp2:_"+temp2);
	var temp3="";
	
	for(var i=0;i<words.length;i++){
	
		if(  isAMemberOfTemneAlphabet(words[i]) ){
		
			words[i]="<span class='utterance' id='span"+i+"' onmouseenter='pageIndex.showPartOfSpeech(this)' onmouseleave='pageIndex.hidePartOfSpeech(this)'>"+words[i]+"</span>";
			
		
		}
		
		if(temp2.indexOf("<div") >-1 && temp2.indexOf("<div") <temp2.indexOf(words2[i]) || temp2.indexOf("<br") >-1 && temp2.indexOf("<br") <temp2.indexOf(words2[i]) || temp2.indexOf("</p>") >-1 && temp2.indexOf("</p>") <temp2.indexOf(words2[i])){
			
			words[i]="<br>"+words[i];	
			
		}
		temp2=temp2.substring(temp2.indexOf(words2[i]) + words2[i].length, temp2.length );
		//console.log("(IdentifyUtterances) temp2:_"+temp2);
	}
	
  
	//console.log("(IdentifyUtterance) Leave:_"+words);
	
	return words;
}

function identifyUtterancesSpeechToTextVersion(words){
	
	//console.log("(IdentifyUtterance) Enter:_"+words);
	words=words.split(/(\s+)/);
	
	for(var i=0;i<words.length;i++){
	
		if( isAMemberOfTemneAlphabet(words[i]) ){
		
			words[i]="<span class='utterance' id='span"+i+"'>"+words[i]+"</span>";
		
		}
	
	}
	
  
	//console.log("(IdentifyUtterance) Leave:_"+words);
	
	return words;
}

function createUtterances(elements){
	//console.log("(createUtterances)Enter:_"+elements+"_instanceOF_"+);
	output=[];
	
	if(!HTMLCollection.prototype.isPrototypeOf(elements) ){
		console.log("createUtterances input is not an HTML array");
		return;
		
	}else{
		
		
		var arr = Array.from(elements);
		elements=arr;
		
	}
	
	for(var w=0;w<elements.length;w++){
		
		output[w]=new Utterance(elements[w]);
	}
	//console.log(output);
	
	return output;
}

function createUtterancesFromWord(element){
	//console.log("(createUtterancesFromWord)Enter:_"+element+"_instanceOF_");
	output=[];
	var elements;
	
	if(!(typeof(element) != 'undefined' && element != null) ){
		console.log("createUtterances input is not a string");
		return;
		
	}else{
		
		
		elements=[element];
		
	}
	//console.log("Array_"+elements);
	for(var w=0;w<elements.length;w++){
		
		output[w]=new Utterance(elements[w]);
	}
	//console.log(output);
	return output;
}
 
function reattachUtterances(words){
	//console.log("(reattachUtterances) Enter:_",words);
	var text="";
	
	if(words.constructor != Array){
		console.log("reattachUtterances input is not an array");
		return;
		
	}
	console.log(words.indexOf("↵"));
	for(var q=0;q<words.length; q++){
		
		//console.log(words[q].search(/\u21B5/));
		/*
		console.log(String.constructor);
		console.log("_ \n_");
		if(("_"+words[q]+"_") == "_\n_" || ("_"+words[q]+"_") == "_ \n_" || ("_"+words[q]+"_") == "_  \n_" ){
			console.log("yessss");
			words[q]="<br>";
		}
		
   */
		if(q<words.length-1){
		
		 text+=words[q]+"";
		
		}else{
		
		 text+=words[q];	
		
		}
  
   }
	
	
	return text;
}

function includesPronoun(input){
	
	var temp=input;
	var temp2=temp.split("");
	
	var temp3;
	  temp=replaceAllDisturbances(temp);
	  
	  if( ( temp.indexOf("́") > -1 ) && (temp.indexOf("́") < temp.indexOf("'") ) ){return false;}
	  
	  if( ( temp.indexOf("̀") > -1 ) && (temp.indexOf("̀") < temp.indexOf("'") ) ){return false;}
	  
	  
	 for(var r=0;r<temneIndependentPronouns.length;r++){
		//console.log(temp+"_independent compared to_"+temneIndependentPronouns[r].name);
		temp3=temneIndependentPronouns[r].type.toString();
		if(temp.indexOf(temneIndependentPronouns[r].name)> -1 && temp.indexOf(temneIndependentPronouns[r].name)==0 && temp3.indexOf("objective")==-1){ /*console.log("ping1");*/  return true;
		
		}else if(temp.indexOf(temneIndependentPronouns[r].name)> -1 && temp2[temp.indexOf(temneIndependentPronouns[r].name)-1] == /(\s+)/ && temp3.indexOf("objective")==-1){
			
			/*console.log("ping1");*/ return true;
			
			
		}
		 
	 }
	 

    for(var p=0;p<temneDependentPronouns.length;p++){
		
		temp3=temneDependentPronouns[p].type.toString();
		//console.log(temp+"_Dependent compared to_",temneDependentPronouns[p].name,temp.indexOf(temneDependentPronouns[p].name));
		if(temp.indexOf(temneDependentPronouns[p].name)> -1 && temp.indexOf(temneDependentPronouns[p].name)==0 && temp3.indexOf("objective")==-1){  /*console.log("ping1");*/ return true;}
		 
	 }	 
	 
	 for(var q=0;q<partsOfSpeech.length;q++){
		 //for irregular pronoun form
		//console.log(temp+"_compared to_"+temneIndependentPronouns[r].name);
		if( (temp.indexOf(partsOfSpeech[q].definiteSingularPronounForm)> -1 || temp.indexOf(partsOfSpeech[q].definitePluralPronounForm)> -1) && (temp.indexOf(partsOfSpeech[q].definiteSingularPronounForm)== 0 || temp.indexOf(partsOfSpeech[q].definitePluralPronounForm)==0)){  /*console.log("ping1");*/ return true;}
		 
	 }	 
	 //console.log(temp,( temp.indexOf("̀") > -1 ));
	 return false;
	
	
}


function includesWhichPronoun(input){
	
	var temp=input;
	  temp=replaceAllDisturbances(temp);
	 for(var r=0;r<temneIndependentPronouns.length;r++){
		//console.log(temp+"_compared to_"+temneIndependentPronouns[r].name);
		if( temp.indexOf(temneIndependentPronouns[r].name)==0 && temp.indexOf(temneIndependentPronouns[r].name)> -1 && (multipleThingsizIndexOf(temneIndependentPronouns[r].type,"subject"))){   return temneIndependentPronouns[r];}
		 
	 }
    for(var p=0;p<temneDependentPronouns.length;p++){
		//console.log(temp+"_compared to_"+temneDependentPronouns[p].name);
		if( temp.indexOf(temneDependentPronouns[p].name)==0 && (multipleThingsizIndexOf(temneDependentPronouns[p].type,"subject"))){   return temneDependentPronouns[p];}
		 
	 }	 
	 
	  for(var q=0;q<partsOfSpeech.length;q++){
		//console.log(temp+"_compared to_"+temneIndependentPronouns[r].name);
		if( temp.indexOf(partsOfSpeech[q].definiteSingularPronounForm)==0 && temp.indexOf(partsOfSpeech[q].definiteSingularPronounForm)> -1 ){   return {'name' : partsOfSpeech[q].definiteSingularPronounForm, 'type': ["definiteSingularPronounForm"] };
		 
	 }
	  }
	 for(var q=0;q<partsOfSpeech.length;q++){
		//console.log(temp+"_compared to_"+temneIndependentPronouns[r].name);
		if( temp.indexOf(partsOfSpeech[q].definitePluralPronounForm)==0 && temp.indexOf(partsOfSpeech[q].definitePluralPronounForm)> -1){   return {'name' : partsOfSpeech[q].definitePluralPronounForm , 'type' :["definitePluralPronounForm"]};
		 
	 }
	 } 
	 return null;
	
	
}

function replaceAllDisturbances(text){
	
	var disturbancesArray=["?",")","(",",",";",":",".","/"];
	
	for(var i=0;i<disturbancesArray.length;i++){
		
		text=text.replace(disturbancesArray[i],"");
		
	}
	
	//replace all wrong '
	
	disturbancesArray=["‘","’"];
	
	for(var i=0;i<disturbancesArray.length;i++){
		
		text=text.replace(disturbancesArray[i],"'");
		
	}
	
	text=text.replace(/(^\s+|\s+$)/g, "");
	
	return text;
	
}

function replaceAllDisturbancesMinusQuestionMark(text){
	
	var disturbancesArray=[")","(",",",";",":",".","/"];
	
	for(var i=0;i<disturbancesArray.length;i++){
		
		text=text.replace(disturbancesArray[i],"");
		
	}
	
	//replace all wrong '
	
	disturbancesArray=["‘","’"];
	
	for(var i=0;i<disturbancesArray.length;i++){
		
		text=text.replace(disturbancesArray[i],"'");
		
	}
	
	text=text.replace(/(^\s+|\s+$)/g, "");
	
	return text;
	
}

function indexOfMultipleThings_forPartsOfSpeech(string,array){
	
	//console.log("(indexOfMultipleThings_forPartsOfSpeech) Enter:_"+array);
	var outputs=[];
	
	if(array.constructor != Array){
		console.log("indexOfMultipleThings_forPartsOfSpeech input is not an array");
		return;
		
	}
	
	for(var b=0;b<array.length;b++){
		
		if(string.indexOf(array[b].definiteSingular)> -1){ outputs.push(string.indexOf(array[b].definiteSingular)); }
		
	}
	//console.log("(indexOfMultipleThings_forPartsOfSpeech) Leave:_"+outputs);
	return outputs;
}

function indexOfMultipleThings_forIndependentPronouns(string,array){
	
	//console.log("(indexOfMultipleThings_forIndependentPronouns) Enter:_"+array);
	var outputs=[];
	
	if(array.constructor != Array){
		console.log("indexOfMultipleThings_forIndependentPronouns input is not an array");
		return;
		
	}
	
	for(var b=0;b<array.length;b++){
		
		if(string.indexOf(array[b].name)> -1){ outputs.push(string.indexOf(array[b].name)); }
		
	}
	//console.log("(indexOfMultipleThings_forIndependentPronouns) Leave:_"+outputs);
	return outputs;
}

function indexOfMultipleThings_forTemneIndependent_dependentAdjectives(string,array){
	
	//console.log("(indexOfMultipleThings_forTemneIndependent_dependentAdjectives) Enter:_"+array);
	var outputs=[];
	
	if(array.constructor != Array){
		console.log("indexOfMultipleThings_forIndependentPronouns input is not an array");
		return;
		
	}
	
	for(var b=0;b<array.length;b++){
		
		if(string.indexOf(array[b].name)> -1){ outputs.push(string.indexOf(array[b].name)); }
		
	}
	//console.log("(indexOfMultipleThings_forTemneIndependent_dependentAdjectives) Leave:_"+outputs);
	return outputs;
}

function indexOfMultipleThings(string,array){
	//does the sting containAnyOf thhe Things In the array
	//console.log("(indexOfMultipleThings) Enter:_"+array);
	var outputs=[];
	
	if(array.constructor != Array){
		console.log("indexOfMultipleThings input is not an array");
		return;
		
	}
	
	for(var b=0;b<array.length;b++){
		
		if(string.indexOf(array[b]) > -1){ outputs.push(string.indexOf(array[b])); }
		
	}
	//console.log("(indexOfMultipleThings) Leave:_"+outputs);
	return outputs;
}

function multipleThingsizIndexOf(array,string){
	//see if any of the indexs in the array have the string
	//console.log("(multipleThingsizIndexOf) Enter:_"+string);
	//console.log(array);
	var outputs=[];
	
	if(array.constructor != Array){
		//console.log("indexOfMultipleThings input is not an array");
		return;
		
	}
	
	for(var b=0;b<array.length;b++){
		
		if(array[b].indexOf(string) > -1){ outputs.push(array[b]); }
		
	}
	//console.log("(multipleThingsizIndexOf) Leave:_");
	//console.log(outputs);
	return outputs;
}

function indexOfAnyOfTheseThings_forPartsOfSpeech(string,array){
	
	//console.log("(indexOfAnyOfTheseThings_forPartsOfSpeech) Enter:_"+array);
	
	if(array.constructor != Array){
		console.log("indexOfAnyOfTheseThings_forPartsOfSpeech input is not an array");
		return;
		
	}
	
	if(indexOfMultipleThings_forPartsOfSpeech(string,array).length > 0){
		//console.log("(indexOfAnyOfTheseThings_forPartsOfSpeech) Leave:_true");
		return true;
		
	}else{
		//console.log("(indexOfAnyOfTheseThings_forPartsOfSpeech) Leave:_false");
		return false;
		
	}
	
}

function indexOfAnyOfTheseThings_forIndependentPronouns(string,array){
	
	//console.log("(indexOfAnyOfTheseThings_forIndependentPronouns) Enter:_"+array);
	
	if(array.constructor != Array){
		console.log("indexOfAnyOfTheseThings_forIndependentPronouns input is not an array");
		return;
		
	}
	
	if(indexOfMultipleThings_forIndependentPronouns(string,array).length > 0){
		//console.log("(indexOfAnyOfTheseThings_forIndependentPronouns) Leave:_true");
		return true;
		
	}else{
		//console.log("(indexOfAnyOfTheseThings_forIndependentPronouns) Leave:_false");
		return false;
		
	}
	
}

function indexOfAnyOfTheseThings_forTemneIndependent_dependentAdjectives(string,array){
	
	//console.log("(indexOfAnyOfTheseThings_forIndependentPronouns) Enter:_"+array);
	
	if(array.constructor != Array){
		console.log("indexOfAnyOfTheseThings_forIndependentPronouns input is not an array");
		return;
		
	}
	
	if(indexOfMultipleThings_forTemneIndependent_dependentAdjectives(string,array).length > 0){
		//console.log("(indexOfAnyOfTheseThings_forIndependentPronouns) Leave:_true");
		return true;
		
	}else{
		//console.log("(indexOfAnyOfTheseThings_forIndependentPronouns) Leave:_false");
		return false;
		
	}
	
}

function indexOfAnyOfTheseThings(string,array){
	//does the sting containAnyOf thhe Things In the array
	//console.log("(indexOfAnyOfTheseThings) Enter:_"+array);
	
	if(array.constructor != Array){
		//console.log("indexOfAnyOfTheseThings input is not an array");
		return;
		
	}
	
	if(indexOfMultipleThings(string,array).length > 0){
		//console.log("(indexOfAnyOfTheseThings) Leave:_true");
		return true;
		
	}else{
		//console.log("(indexOfAnyOfTheseThings) Leave:_false");
		return false;
		
	}
	
}

function indexOfAnyOfTheseThings_toleranceLevel(string,array,tolerance){
	
	//console.log("(indexOfAnyOfTheseThings_toleranceLevel) Enter:_"+array);
	
	if(array.constructor != Array){
		console.log("indexOfAnyOfTheseThings_toleranceLevel input is not an array");
		return;
		
	}
	
	if(indexOfMultipleThings_everyInstance(string,array).length > tolerance){
		//console.log("(indexOfAnyOfTheseThings_toleranceLevel) Leave:_true");
		return true;
		
	}else{
		//console.log("(indexOfAnyOfTheseThings_toleranceLevel) Leave:_false");
		return false;
		
	}
	
}

function indexOfAnyOfTheseThings_toleranceLevel_PhoneticHateVersion(string,array,tolerance){
	
	if(array.constructor != Array){
		console.log("indexOfAnyOfTheseThings_toleranceLevel_PhoneticHateVersion input is not an array");
		return;
		
	}
	
	for(var e=0;e<array.length;e++){
		//console.log("(indexOfAnyOfTheseThings_toleranceLevel_PhoneticHateVersion) Enter:_"+array[e].name+"_tolerance_"+array[e].tolaranceLevel);
		
		if(getIndicesOf(array[e].name,string, false).length > array[e].tolaranceLevel){
			//console.log("(howMany_IndexOfAnyOfTheseThings_toleranceLevel_PhoneticHateVersion) Leave:_true");
			return true;
		
		}
	}
	
	//console.log("(howMany_IndexOfAnyOfTheseThings_toleranceLevel_PhoneticHateVersion) Leave:_false");
		return false;
	
}

function getIndicesOf(searchStr, str, caseSensitive) {
	
	if(searchStr== null || str== null){ return 0;}
	
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

function collectUnderlings(master){
	
	//console.log("(collectUnderlings) Enter:_");
	//console.log(master);
	var output=[];
	
	for(var p=0;p<temneDependentPronouns.length;p++){
		for(var f=0;f<temneDependentPronouns[p].masters.length;f++){
			
			//console.log("(collectUnderlings) during:_"+temneDependentPronouns[p].masters[f]);
			if(master==temneDependentPronouns[p].masters[f]){output.push(temneDependentPronouns[p].name)}
		
		}
	}
	
	for(var p=0;p<temneIndependent_dependentAdjectives.length;p++){
		for(var f=0;f<temneIndependent_dependentAdjectives[p].masters.length;f++){
			
			//console.log("(collectUnderlings) during:_"+temneIndependent_dependentAdjectives[p].masters[f]);
			if(master==temneIndependent_dependentAdjectives[p].masters[f]){output.push(temneIndependent_dependentAdjectives[p].name)}
		
		}
	}
	
	//console.log("(collectUnderlings) Leave:_");
	//console.log(output);
	return output;
}

function clearAllSpaceUtterancesInArray(arr){
	//console.log("(clearAllSpaceUtterancesInArray) Enter:_");
	//console.log(arr);
    var output=[];
	
	for(var i=0;i<arr.length;i++){
		
		if(isAMemberOfTemneAlphabet(arr[i].context) && arr[i].context!= null && arr[i].context!= ""){
			//console.log("(clearAllSpaceUtterancesInArray) during:_")
			//console.log(arr[i]);
			output.push(arr[i]);
			
		}
		
	}
	//console.log("(clearAllSpaceUtterancesInArray) Leave:_");
	//console.log(output);
	return output;
	
}

function getNearestVowelToTheRight(string,mainLetter){
		
		var temp=string.substring(string.indexOf(mainLetter),string.length);
		var compareLetter=temp.split("");
		
		for(var i=0;i<compareLetter.length;i++){
			
			if(indexOfAnyOfTheseThings(compareLetter[i],temneVowels)){
				
				return {'letter':compareLetter[i], 'location' : i};
				
			}	
			
		}
		
		return null;
		
}

function getNearestVowelToTheLeft(string,mainLetter){
		
		var temp=string.substring(0,string.indexOf(mainLetter));
		var compareLetter=temp.split("");
		
		for(var i=compareLetter.length-1;i>-1;i--){
			
			if(indexOfAnyOfTheseThings(compareLetter[i],temneVowels)){
				//console.log(compareLetter[i], i);
				return {'letter':compareLetter[i], 'location' : i};
				
			}else{
				
				
			}	
			
		}
		
		return null;
		
}

function getNearestLetterToTheRight(string,mainLetter){
		
		var temp=string.substring(string.indexOf(mainLetter),string.length);
		var compareLetter=temp.split("");
		
		for(var i=1;i<compareLetter.length;i++){
			
			if(indexOfAnyOfTheseThings(compareLetter[i],allTemneLetters)){
				
				return {'letter':compareLetter[i], 'location' : i};
				
			}	
			
		}
		
		return null;
		
		
}

function getNearestLetterToTheLeft(string,mainLetter){
		
		var temp=string.substring(0,string.indexOf(mainLetter));
		var compareLetter=temp.split("");
		
		for(var i=compareLetter.length-2;i>-1;i--){
			
			if(indexOfAnyOfTheseThings(compareLetter[i],allTemneLetters)){
				
				return {'letter':compareLetter[i], 'location' : i};
				
			}else{
				
				
			}	
			
		}
		
		return null;
		
}

function hasPrefix(){
	
	
	
	
}

function hasSuffix(){
	
	
	
	
}

return {
	
  	identifyUtterances: identifyUtterances,
  	reattachUtterances: reattachUtterances,
  	colourCoder: colourCoder,
  	createUtterances : createUtterances,
	identifyUtterancesSpeechToTextVersion : identifyUtterancesSpeechToTextVersion,
	hidePartOfSpeech : hidePartOfSpeech,
	showPartOfSpeech : showPartOfSpeech
  }


})();












