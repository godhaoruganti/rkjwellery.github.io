 let btn=document.getElementById("btn")
console.log(btn);

btn.onmouseover=function(e){
    console.log(e);
    let section=document.getElementById("section-app")
    console.log(section);

    let display=section.classList.toggle("true")
     if(display)
     {
        section.style.height="0px"
        section.style.transition="ease all 2s"
        section.style.visibility="visible"
     }else{
         section.style.height="320px"
        // section.style.display="none"
        section.style.overflow="hidden"    
    }
 }



 let div=document.getElementById("div1")
 console.log(div1);

//  div.onmouseover=function(){
//      let section=document.getElementsById("section-app")
//      console.log(section);
//      // section.style.height="400px"
//     //  section.style.height="5px"
//     // div.style.transform="translateY(-440px)"
//      section.style.transition="ease all 1s"
//  }
//  if(display){
//        div.style.overflow="hidden"

//  }else{
//     div.style.visibility="hidden"
//  }
 

 //2nd java-script

 let btn2=document.getElementById("btn1")
console.log(btn2);

btn2.onmouseover=function(e){
    console.log(e);
    let section1=document.getElementById("section-app1")
    console.log(section1);

    let display=section1.classList.toggle("true")
     if(display)
     {
        //  section.style.transform="translateY(-440px)"
        section1.style.height="0px"
        section1.style.transition="ease all 2s"
        section1.style.visibility="visible"
     }else{
         // section.style.transform="translateY(2px)"
         section1.style.height="320px"
        // section.style.display="none"
        section1.style.overflow="hidden"
        
          
    }
 }
// 3rd java-script

let btn3=document.getElementById("3btn")
console.log(btn3);

btn3.onmouseover=function(e){
    console.log(e);
    let section2=document.getElementById("section-app2")
    console.log(section2);

    let display=section2.classList.toggle("true")
     if(display)
     {
        //  section.style.transform="translateY(-440px)"
        section2.style.height="0px"
        section2.style.transition="ease all 2s"
        section2.style.visibility="visible"
     }else{
         // section.style.transform="translateY(2px)"
         section2.style.height="330px"
        // section.style.display="none"
        section2.style.overflow="hidden"
        
          
    }
 }

 //4th collections java-script
 let btncoll=document.getElementById("4btn")
console.log(btncoll);

btncoll.onmouseover=function(e){
    console.log(e);
    let section3=document.getElementById("section-app3")
    console.log(section3);

    let display=section3.classList.toggle("true")
     if(display)
     {
        //  section.style.transform="translateY(-440px)"
        section3.style.height="0px"
        section3.style.transition="ease all 2s"
        section3.style.visibility="visible"
     }else{
         // section.style.transform="translateY(2px)"
         section3.style.height="500px"
        // section.style.display="none"
        section3.style.overflow="hidden"
        
          
    }
 }
