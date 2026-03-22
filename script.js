const h= document.getElementsByTagName('h1');
h[0].style.color='green';


const lovely=document.getElementsByClassName('love');
for(const love of lovely){
    love.style.color='green';
}


let colors=['red','blue','cyan','magenta','yellow','orange','purple','pink','brown','gray'];

const bttn2=document.getElementById('btn2');
bttn2.style.backgroundColor='cyan';
bttn2.style.padding='20px';
bttn2.style.fontWeight='bold';
bttn2.style.borderRadius='10px';
const boddy=document.querySelector('body');

bttn2.addEventListener('click',()=>{
    bttn2.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
    boddy.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
})
