let playerA = [];
let playerB = [];
let value;
let total = 0;
value = "X";
let button=0;
function result()
{
    if(document.getElementById(1).innerHTML=="X"&&document.getElementById(5).innerHTML=="X"&&document.getElementById(9).innerHTML=="X"||document.getElementById(1).innerHTML=="X"&&document.getElementById(2).innerHTML=="X"&&document.getElementById(3).innerHTML=="X"||
    document.getElementById(4).innerHTML=="X"&&document.getElementById(5).innerHTML=="X"&&document.getElementById(6).innerHTML=="X"||
    document.getElementById(7).innerHTML=="X"&&document.getElementById(8).innerHTML=="X"&&document.getElementById(9).innerHTML=="X"||
    document.getElementById(1).innerHTML=="X"&&document.getElementById(4).innerHTML=="X"&&document.getElementById(7).innerHTML=="X"||
    document.getElementById(2).innerHTML=="X"&&document.getElementById(5).innerHTML=="X"&&document.getElementById(8).innerHTML=="X"||
    document.getElementById(3).innerHTML=="X"&&document.getElementById(6).innerHTML=="X"&&document.getElementById(9).innerHTML=="X")
    {
        alert("player X wins")
        location.reload()
    }
    if(document.getElementById(1).innerHTML=="O"&&document.getElementById(5).innerHTML=="O"&&document.getElementById(9).innerHTML=="O"||document.getElementById(1).innerHTML=="O"&&document.getElementById(2).innerHTML=="O"&&document.getElementById(3).innerHTML=="O"||
document.getElementById(4).innerHTML=="O"&&document.getElementById(5).innerHTML=="O"&&document.getElementById(6).innerHTML=="O"||
document.getElementById(7).innerHTML=="O"&&document.getElementById(8).innerHTML=="O"&&document.getElementById(9).innerHTML=="O"||
document.getElementById(1).innerHTML=="O"&&document.getElementById(4).innerHTML=="O"&&document.getElementById(7).innerHTML=="O"||
document.getElementById(2).innerHTML=="O"&&document.getElementById(5).innerHTML=="O"&&document.getElementById(8).innerHTML=="O"||
document.getElementById(3).innerHTML=="O"&&document.getElementById(6).innerHTML=="O"&&document.getElementById(9).innerHTML=="O")
{
    alert("player O wins")
    location.reload()
}
if(total==9)
{
    alert("draw")
    location.reload()
}

}
function one()
{  
    
    if(button!=1)
    {
    if(value=="X")
    {
        value="O";
    }
    else{
        value ="X";
    }
    document.getElementById(1).innerHTML=value;
    
    total = total+1
   if(total >4)
   {
      result()
   }
}
button=1;
   
   
    
}
function two()
{   if(button!=2)
    {
    if(value=="X")
    {
        value="O";
    }
    else{
        value ="X";
    }
    document.getElementById(2).innerHTML=value;
    total = total+1
    if(total >4)
    {
       result()
    }
}
button=2;
}
function three()
{  if(button!=3)
    {
    if(value=="X")
    {
        value="O";
    }
    else{
        value ="X";
    }
    document.getElementById(3).innerHTML=value;

    total = total+1
    if(total >4)
    {
       result()
    }
}
button=3;
}
function four()
{  if(button!=4)
    {
    if(value=="X")
    {
        value="O";
    }
    else{
        value ="X";
    }
    document.getElementById(4).innerHTML=value;

    total = total+1
    if(total >4)
    {
       result()
    }
}
button=4;
}
function five()
{   if(button!=5)
    {
    if(value=="X")
    {
        value="O";
    }
    else{
        value ="X";
    }
    document.getElementById(5).innerHTML=value;
    total = total+1
    if(total >4)
    {
       result()
    }
}
button=5;
    
}
function six()
{  if(button!=6)
    {
    if(value=="X")
    {
        value="O";
    }
    else{
        value ="X";
    }
    document.getElementById(6).innerHTML=value;
    total = total+1
    if(total >4)
    {
       result()
    }
}
button=6;
    
}
function seven()
{  if(button!=7)
    {
    if(value=="X")
    {
        value="O";
    }
    else{
        value ="X";
    }
    document.getElementById(7).innerHTML=value;

    total = total+1
    if(total >4)
    {
       result()
    }
}
button =7;
}
function eight()
{   if(button!=8)
    {
    if(value=="X")
    {
        value="O";
    }
    else{
        value ="X";
    }
    document.getElementById(8).innerHTML=value;
    total = total+1
    if(total >4)
    {
       result()
    }
}
button=8;
}
function nine()
{  if(button!=9)
    {

    
    if(value=="X")
    {
        value="O";
    }
    else{
        value ="X";
    }
    document.getElementById(9).innerHTML=value;
    total = total+1
    if(total >4)
    {
       result()
    }
}
button=9;
    
}


console.log(playerA)



