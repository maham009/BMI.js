function bmi()
{
let height= +document.querySelector("#ht").value;
let weight= +document.querySelector("#wt").value;
let res= weight/(height*height);
alert(res);
if(res==18.5 || res==24.5)
{
alert("your healthy");
}
else if(res>24.5)
{
  alert("your overweight") ; 
}
else if (res<18.5)
  {
    alert ("your underweight");
  }

}



  