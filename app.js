function newpizza(){
 var usgpizza=document.getElementById("input").value;
 console.log(usgpizza)
 var usgpizzadisplay=[];
 usgpizzadisplay.push("<div>"+usgpizza+"</div>");
 console.log(usgpizzadisplay);
 document.getElementById("mypizzacontent").innerHTML =usgpizzadisplay ;    
}