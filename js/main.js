
function askQuestions() {

	var firstName = prompt ('What is your first name?');
	var lastName = prompt ('What is your last name?');

	var fullName = firstName + ' ' + lastName;

	$('h2').text('Hello ' + fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('welcome, adult!');
	} else if (age >= 13) {
		console.log('Come back in a few years.');
	} else {
		console.log ('Go away child!');
	}

	if (firstName === 'General' && lastName !== 'Assembly') 
	{
		console.log('Greetings General!');
	}

	var faveColour = prompt ('What is your fav colour?').toLowerCase();
	if (faveColour == 'red' ||
	    faveColour == 'green' ||
	    faveColour == 'blue' ||
	    faveColour == 'yellow') {
		$('h1').css('color', faveColour);
	}

}


//when the page has loaded 
$ (function(){
	$('img').on ('click', askQuestions);


	//hide all the content
	$('h3').next().hide();


	//when the user clicks an h3
	$('h3').on('click',function () {
		//toggle the next element
		$(this).next().slideToggle(1000);

	});




});