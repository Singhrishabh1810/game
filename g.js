guess=prompt("Enter a number");
if ((guess>=1)&&(guess<100)){
var message=document.getElementById("msg");
for (i=0;i<=4;i++){
var result= Math.floor(Math.random()*100)+1 +"<br>";
document.write(result); }
if (guess==result){
   alert("I guessed it :D");
}}
 else{
    alert("invalid value");
 }
 
 