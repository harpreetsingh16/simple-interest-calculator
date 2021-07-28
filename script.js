function compute()
{
    p = document.getElementById("principal").value;
 
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    
    var i = (p*r*y)/100;
    document.getElementById("result").innerHTML = "if you deposit "+p+"  <br/>interest rate is: "+r+"%  <br/> you will receive an amount of "+ i+"<br/> in the year "+y; 
    
    
    
}

function change(x){
  
    document.getElementById("slider_value").innerHTML=x;
  
}

function amount()
{
    p = document.getElementById("principal").value;
  if(p<=0)
    {
      window.alert("don't put zero or negative value");
      
    }
    document.getElementById("principal").focus();
}    