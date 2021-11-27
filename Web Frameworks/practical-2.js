function validate()
{
        let Name=document.forms["myForm"]["Name"];
        
        if ( Name.value== "" || Name.value.length==0) 
        {
            alert("Enter Name First");
            Name.focus();
        }

        let dob=document.forms["myForm"]["dob"];
        let date = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
        if (date.test(dob.value)) {
            alert("Date follows dd/mm/yy format");
        }
        else{
          alert("Invalid date format");
        }
        
        let doj=document.forms["myForm"]["doj"];
        let ndoj=new Date(doj.value.toString());
        let currentDate= new Date();
        if(ndoj.getDate()<currentDate.getDate())
        {
            alert("Joining date should be future date");
        }
        else
        {
            alert("Correct Date Selected");
        }

        let sal=document.forms["myForm"]["salary"];

        if(sal.value<1000 || sal.value>100000)
        {
            alert("Invalid Salary")
        }
        else
        {
            alert("Correct Salary");
        }
}
