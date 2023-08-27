document.getElementById('newRecord').addEventListener('keyup',function(event){
	event.preventDefault();
	
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;
	
  
	let nameError = document.getElementById('nameError');
	let emailError = document.getElementById('emailError');
	let messageError = document.getElementById('messageError');
  
	if(name == ''){
		nameError.innerHTML = 'Name is required';
	}else if(!name.match(/^[a-zA-Z]+$/)){
		nameError.innerHTML = 'Name must be a string';
	}else if (name.length < 3){
		nameError.innerHTML = 'Name must be at least 2 characters';
	}     
	else{
		nameError.innerHTML = '';
	}
  
	if(email == ''){
		emailError.innerHTML = 'Email is required';
	}else if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
		emailError.innerHTML = 'Email is invalid';
	}else{
		emailError.innerHTML = '';
	}

	if(message == ''){
		messageError.innerHTML = 'message is required';
	}
	else{
		messageError.innerHTML = '';
	}
  
   
  
  
  });


  
  
  