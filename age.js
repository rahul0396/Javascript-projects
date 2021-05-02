// challenge 1: your age in days
 function clickme(){
     let birthyear= prompt("what is birthyear");
     let agedays= (2021- birthyear)*365;
     var h1=document.createElement("h1");
     var answer= document.createTextNode("You are"+" "+agedays+" "+"days old.");
    h1.setAttribute('id','agedays');
    h1.appendChild(answer);
    document.getElementById('ans').appendChild(h1);


 }

 function reset(){
document.getElementById('agedays').remove();
 }
 