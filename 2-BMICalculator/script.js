const form=document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    const height =parseInt(document.querySelector("#height").value)
    const weight =parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#result");
    if(height==="" || height<0 || isNaN(height)){
        results.innerHTML="Please enter valid height values.";
    }
    else if(weight==="" || weight<0 || isNaN(weight)){
        results.innerHTML="Please enter valid weight values.";
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`Your BMI is ${bmi}.`;
    }
});