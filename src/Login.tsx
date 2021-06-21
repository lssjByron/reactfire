import {useAuth} from 'reactfire';
import React from "react";
import './App.css';

/*
*Function: Login
*Return: HTML
*About: The Login page of the website, this will be the first thing new users will see.
*This is where users are created in database (firebase authentication),
*users can login or create a new user by entering the email and password fields
*and pressing login or create account
*/
function Login() {
  const auth = useAuth();


  const handleSubmit = async (_event) =>{
	  _event.preventDefault();

    try{
      const {email,password} = _event.target.elements;
      if (_event.nativeEvent.submitter?.name === "createAccount"){
         await auth.createUserWithEmailAndPassword(email.value,password.value)
         alert("Account Created");
         return;
      }

		  const resp = await auth.signInWithEmailAndPassword(email.value, password.value);
		  alert("Logged In: " + resp?.user?.email);
	  } catch(e) {
		  alert("ERROR: " + e.message);
	  }
  };

  const btn = document.getElementById("loginBtn")!;
  if(btn){
  btn.innerText  = "Login";
}
  return (
    <div style={{padding: 20}}>
    	<form onSubmit={handleSubmit}>
    	  <input type="text" name="email" placeholder="email" style={{display: "block", margin:12, width: 220}}/>
    	  <input type="password" name="password" placeholder="password" style={{display: "block", margin:12, width: 220}}/>
    	  <button type="submit" name="login" style={{margin:12}}>LOGIN</button>
        <button type="submit" name="createAccount" style={{margin:12}}>CREATE ACCOUNT</button>
    	</form>
	</div>
  );
}

export default Login;
