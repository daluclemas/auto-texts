const container=document.querySelector('.container');
let text='this is my florin project';
let index=0;

const display=()=>{
 container.innerText=text.slice(0,index).toUpperCase();
 index++;
 if(index > text.length){
     index=0;
 }
 

}

setInterval(display,100);