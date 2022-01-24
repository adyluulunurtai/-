const btn = document.querySelector('button');

//btn.onclick = function(){
  //  alert("click");
//};
let i = 0;
const deleteElement = (e)=>{
    console.log(e.target);
    i++;
    if(i==1){
        btn.removeEventListener("click", deleteElement);
    }
};

btn.addEventListener('click', deleteElement);


const link = document.querySelector("a");
link.addEventListener("click", (event)=>{
    event.preventDefault();
    alert("aaa");
});