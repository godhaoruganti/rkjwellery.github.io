//wrong
//increment

let btn1=document.getElementById("btn1")
console.log(btn1);
btn1.addEventListener("click" , () => {
    let add=document.getElementById('add').value++
    //console.log(add);
})

//decreement

let sub=document.getElementById("sub")
console.log(sub);


sub.addEventListener("click", ()=>{
    let add=document.getElementById('add').value--
    console.log(add);
})

//add to cart

let add1=document.getElementById("add1")
console.log(add1);

add1.addEventListener("click",()=>{
    let add=document.getElementById('add').value
    console.log(add);
    let a=document.getElementById("b")
    console.log(a);
    a.style.border="2px solid"
    a.style.borderRadius="80%"
    a.style.height="20px"
    a.style.width="20px"
    a.style.textAlign="center"
    a.style.backgroundColor="red"
    a.innerHTML=add

})