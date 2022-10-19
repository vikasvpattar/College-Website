

const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const number = document.getElementById('number');
const pucname = document.getElementById('pucname');
const pucpercentage = document.getElementById('pucpercentage');
const pucyear = document.getElementById('pucyear');
const sslcname = document.getElementById('sslcname');
const sslcpercentage = document.getElementById('sslcpercentage');
const sslcyear = document.getElementById('sslcyear');
const pucmarksfile = document.getElementById('pucmarksfile');
const sslcmarksfile = document.getElementById('sslcmarksfile');
const course = document.getElementById('course');
const declaration = document.getElementById('declaration');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const emailValue = email.value.trim();
	const numberValue = number.value.trim();
	const ageValue = age.value.trim();
	const pucnameValue = pucname.value.trim();
	const pucpercentageValue = pucpercentage.value.trim();
	const pucyearValue = pucyear.value.trim();
	const sslcnameValue = sslcname.value.trim();
	const sslcpercentageValue = sslcpercentage.value.trim();
	const sslcyearValue = sslcyear.value.trim();
	const pucmarksfileValue = pucmarksfile.value.trim();
	const sslcmarksfileValue = sslcmarksfile.value.trim();
	const declarationValue = declaration.value.trim();
	
	const courseValue = course.value.trim();
	if(fnameValue=== '') {
		setErrorFor(fname, 'first name cannot be blank');
	} else {
		setSuccessFor(fname);
	}
	if(lnameValue=== '') {
		setErrorFor(lname, 'last name cannot be blank');
	} else {
		setSuccessFor(lname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(numberValue === '') {
		setErrorFor(number, 'number cannot be blank');
	} else {
		setSuccessFor(number);
	}
	
	if(ageValue === '') {
		setErrorFor(age, 'age cannot be blank');
	}else if(ageValue<=17){
        setErrorFor(age, 'sorry you shold be above 17');
    }
      else{
		setSuccessFor(age);
	}

    if(pucnameValue=== '') {
		setErrorFor(pucname, 'college name cannot be blank');
	} else {
		setSuccessFor(pucname);
	}
    if(pucpercentageValue=== '') {
		setErrorFor(pucpercentage, 'puc marks cannot be blank');
	} else {
		setSuccessFor(pucpercentage);
	}
    if(pucyearValue=== '') {
		setErrorFor(pucyear, 'puc passing year cannot be blank');
	} else {
		setSuccessFor(pucyear);
	}
   if(sslcnameValue=== '') {
		setErrorFor(sslcname, 'school name cannot be blank');
	} else {
		setSuccessFor(sslcname);
	}
    if(sslcpercentageValue=== '') {
		setErrorFor(sslcpercentage, 'sslc marks cannot be blank');
	} else {
		setSuccessFor(sslcpercentage);
	}
    if(sslcyearValue=== '') {
		setErrorFor(sslcyear, 'sslc passing year cannot be blank');
	} else {
		setSuccessFor(sslcyear);
	}
    if(pucmarksfileValue=== '') {
		setErrorFor(pucmarksfile, 'sslc passing year cannot be blank');
	} else {
		setSuccessFor(pucmarksfile);
	}
    if(sslcmarksfileValue=== '') {
		setErrorFor(sslcmarksfile, 'sslc passing year cannot be blank');
	} else {
		setSuccessFor(sslcmarksfile);
	}
    if(courseValue=='choose a course') {
		setErrorFor(course, 'you have to select a course');
	} else {
		setSuccessFor(course);
	}
    if(!(declaration.checked)){
        setErrorFor(declaration, 'you have to declare');
    }else {
		setSuccessFor(declaration);
}
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
// const menu=document.querySelector(".nav_menu");
// const menubtn=document.querySelector("#menu_button");
// const closebtn=document.querySelector("#menu_close");

// menubtn.addEventListener('click', ()=>{
//     menu.style.display="flex";
//     closebtn.style.display="inline-block";
//     menubtn.style.display="none";
// })

// closebtn.addEventListener('click', ()=>{
//     menu.style.display="none";
//    closebtn.style.display="none";
//     menubtn.style.display="inline-block";
// });