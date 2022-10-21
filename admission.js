

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
	var validation = checkInputs();
	if (validation)
	swal("Successfully Registered!", "We will contact you shortly!", "success");
	else
	swal("Invalid input!", "please provide a valid input!", "error");
});

// const sendData=(sRate,count)=>{
// 	if(sRate===count){
// 		alert("successfull");
// 	}
// }


// const successMsg=()=>{
// 	let formCont=document.getElementsByClassName("form-control success");
// 	var count=formCont.length-1;
// 	for(var i=0;i<formCont.length;i++){
// 		if(formCont[i]==="form-control success"){
// 			var sRate=0+1;
// 			console.log(sRate);
// 			sendData(sRate,count);
// 		}else{
// 			return false;
// 		}
// 	}
// }

function checkInputs() {
	var isvalid = new Array();
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
	if (fnameValue === '') {
		setErrorFor(fname, 'first name cannot be blank');
		isvalid.push(false);

	} else {
		setSuccessFor(fname);
		isvalid.push(true);
	}
	if (lnameValue === '') {
		setErrorFor(lname, 'last name cannot be blank');
		isvalid.push(false);
	} else {
		setSuccessFor(lname);
		isvalid.push(true);
	}

	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		isvalid.push(false);
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		isvalid.push(false);
	} else {
		setSuccessFor(email);
		isvalid.push(true);
	}

	if (numberValue === '') {
		setErrorFor(number, 'number cannot be blank');
		isvalid.push(false);
	} else {
		setSuccessFor(number);
		isvalid.push(true);
	}

	if (ageValue === '') {
		setErrorFor(age, 'age cannot be blank');
		isvalid.push(false);
	} else if (ageValue <= 17) {
		setErrorFor(age, 'sorry you shold be above 17');
		isvalid.push(false);
	}
	else {
		setSuccessFor(age);
		isvalid.push(true);
	}

	if (pucnameValue === '') {
		setErrorFor(pucname, 'college name cannot be blank');
		isvalid.push(false);
	} else {
		setSuccessFor(pucname);
	}
	if (pucpercentageValue === '') {
		setErrorFor(pucpercentage, 'puc marks cannot be blank');
		isvalid.push(false);
	} else {
		setSuccessFor(pucpercentage);
		isvalid.push(true);
	}
	if (pucyearValue === '') {
		setErrorFor(pucyear, 'puc passing year cannot be blank');
		isvalid.push(false);
	} else {
		setSuccessFor(pucyear);
		isvalid.push(true);
	}
	if (sslcnameValue === '') {
		setErrorFor(sslcname, 'school name cannot be blank');
		isvalid.push(false);
	} else {
		setSuccessFor(sslcname);
		isvalid.push(true);
	}
	if (sslcpercentageValue === '') {
		setErrorFor(sslcpercentage, 'sslc marks cannot be blank');
		isvalid.push(false);
	} else {
		setSuccessFor(sslcpercentage);
		isvalid.push(true);
	}
	if (sslcyearValue === '') {
		setErrorFor(sslcyear, 'sslc passing year cannot be blank');
		isvalid.push(false);
	} else {
		setSuccessFor(sslcyear);
		isvalid.push(true);
	}
	if (pucmarksfileValue === '') {
		setErrorFor(pucmarksfile, 'sslc passing year cannot be blank');
		isvalid.push(false);
	} else {
		setSuccessFor(pucmarksfile);
		isvalid.push(true);
	}
	if (sslcmarksfileValue === '') {
		setErrorFor(sslcmarksfile, 'sslc passing year cannot be blank');
		isvalid.push(false);
	} else {
		setSuccessFor(sslcmarksfile);
		isvalid.push(true);
	}
	if (courseValue == 'choose a course') {
		setErrorFor(course, 'you have to select a course');
		isvalid.push(false);
	} else {
		setSuccessFor(course);
		isvalid.push(true);
	}
	if (!(declaration.checked)) {
		setErrorFor(declaration, 'you have to declare');
		isvalid.push(false);
	} else {
		setSuccessFor(declaration);
		isvalid.push(true);
	}
	if (isvalid.includes(false))
		return false;
	else
		return true;
	// successMsg();
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
