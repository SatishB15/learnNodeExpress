function validate()
{
    let email=document.forms["myForm"]["Email"];
    let Regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.value.match(Regex)) 
        {
          alert("Valid email address!");
          email.focus();
      
        } else 
        {
      
          alert("Invalid email address!");
          email.focus();
          return false;
      
        }
      
}