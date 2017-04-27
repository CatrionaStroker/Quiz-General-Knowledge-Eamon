
var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC,choiceD, correct=0, name = 0; 

		
var questions=
[
	[' Which US state is named on the label of a Jack Daniels bottle?', "Texas", "Flordia", "Alaska", "Tennessee","D"],
	[' A phlebotomist extracts what from the human body?',"Bone Marrow","Teeth","Blood","Organs","C"],
	[' What is the female equivalent of polygyny?', "Polyandry", "Polyindry","Folyandry","Polyandie", "A"],
	[' How many feet are there in a fathom?', "Five","Six","Seven","Eight","B"],
	[' Granadilla is another name for which fruit?', "Orange","Apple","Grape-fruit","Passion-fruit","D"],
	[' Nariyal is the Indian term for which nut?', "Bombay Nuts","Walnuts","Cashews Nuts","Coconut","D"],
	[' Who was president of Vietnam from 1945-54?',"Trần Đại Quang","Nguyen Minh Triet","Tran Duc Luong", "Ho Chi Min","D"],
	[' In which county of the UK is Bramber Castle?', "Cambridgeshire","Devon","Staffordshire ","West Sussex","D"],
	[' What type of animal was inside Sputnik 2 when launched into orbit in 1957?', "Mouse","Cat","Dog","Pig","C"],
	[' Who was the eldest of the Marx Brothers?', "Harpo","Chico","Zeppo","Gummo","B"],
	['What type of creature is a dugite?', "Snake" ,"Deer","Frog","Goat","A"],
	['What are the first names of English novelist G K Chesterton?', "Gerard Keith","Gary King","Gilbert Keith","George Keith","C"],
	['In computing what does DMA normally stand for?', "Direct Memory Access" ,"Direct Market Access","Dallas Museum of Art","Direct Marketing Association","A"],
	['Who painted The Water Lily Pool?', "Leonardo da Vinci","Claude Monet","Michelangelo Buonarroti","Donatello","B"],
	['Which vitamin is also known as pantothenic acid?', "B8","B7","B5","B9","C"],
	['A couple celebrating their crystal wedding anniversary have been married for how many years?', "Twelve","Ten","Fifteen","Twenty","C"],
	['The song Luck be a Lady features in which musical?', "Grease","Annie","Guys and Dolls","Hairspray","C"],
	['In the city of Manchester (England) the Irk and Medlock join which river?', "Irwell","Tame","Medlock","Irk","A"],
	['What type of animal is a Kolinsky?', "Spider","Weasel","Hamster","Snake","B"],
	['Who wrote the book Catch-22?', "Paul Smith","Barack Obama","Daniel Rowling","Joseph Heller","D"]
	
];




function _(x)
{ 
    return document.getElementById(x);
} 

	// Answers as a precentage	
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;
}

function renderQuestion()
{ 
    test = _("test"); 
    if(pos >= questions.length) 
    {  
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct (" +percent() + "%)</h2><button onclick='Print()'>Print result</button><button onclick='Solution()'>Solution</button";
		

        _("test_status").innerHTML += "Well Done! :) ";
        pos = 0;
        correct = 0; 
        return false; 
    } 

    var bar=document.getElementById("progressBar");

    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
   

    bar.value = (pos+1);

    question = questions[pos][0];
    choiceA = questions[pos][1]; 
    choiceB = questions[pos][2]; 
    choiceC = questions[pos][3]; 
	choiceD = questions[pos][4]; 
    test.innerHTML = "<h3>"+question+"</h3>"; 
    test.innerHTML += "<input type='radio' name='choices' value='A' checked> "+choiceA+"<br>"; 
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+choiceB+"<br>"; 
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+choiceC+"<br>"; 
	test.innerHTML += "<input type='radio' name='choices' value='D'> "+choiceD+"<br><br>"; 
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button><br>";
	
} 

	// Check Answer	
		
function checkAnswer()
{ 
    choices = document.getElementsByName("choices"); 
    for(var i=0; i<choices.length; i++)
    { 
        if(choices[i].checked) 
        { 
            choice = choices[i].value; 
        }
    } 
    if(choice == questions[pos][5])
    { 
        
        correct++;
    }
    else
    {
        
    } 
    pos++; 
    
    renderQuestion(); 
	
    
}



// Print final page in quiz which shows result
function Print() {
    window.print();
}


function Solution(){
        window.location='Solution.html';
    }

window.addEventListener("load", renderQuestion, false);