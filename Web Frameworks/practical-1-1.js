function validate()
{
        let Name=document.forms["myForm"]["Name"];
        
        if ( Name.value== "" || Name.value.length==0) 
        {
            alert("Enter Name First");
            Name.focus();
        }
        else
        {
            if (!/^[a-zA-Z]*$/g.test(Name.value)) {
                alert("Invalid Name");
                Name.focus();
            }
            else
            {
                alert("Name is Valid");
            }
        }
        let age=document.forms["myForm"]["age"];
        if(age.value=="")
        {
            alert("Enter age First");
        }
        else
        {
            if(age.value<18 || age.value>50)
        {
            alert("Age is Invalid");
        }
        else
        {
            alert("Age is Valid");
        }
        }
        
}
