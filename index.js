
gem();




//container-fluid
var div1=document.createElement("div");
div1.setAttribute("class","container-fluid");
//heading
var head=document.createElement("h2");
head.innerHTML="LIC SCHEMES";

div1.appendChild(head);
document.body.appendChild(div1);


async function gem(){
    let ele=await fetch("https://api.mfapi.in/mf");
    let ele1=await ele.json();
    console.log(ele1);

for(var i=0;i<ele1.length;i++)
{
      //card
   var card=document.createElement("div");
   card.setAttribute("class","card");
   card.style.backgroundColor="	#dfcfbe";
   card.style.margin="10px";
   


   //card-header
   var card_header=document.createElement("div");
   card_header.setAttribute("class","card-header");
   card_header.innerHTML=`Scheme Code : : ${ele1[i].schemeCode}`;
   //card-body
   var car_body=document.createElement("div");
   car_body.setAttribute("class","card-body");
   //text para
   var para=document.createElement("p");
   para.setAttribute("class","card-text");
   para.innerHTML=`Scheme Name : ${ele1[i].schemeName}`;
   //appending all cards
   car_body.appendChild(para);
   card.appendChild(card_header);
   card.appendChild(car_body);
   document.body.appendChild(card);
}


}

