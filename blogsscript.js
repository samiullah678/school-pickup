document.addEventListener("DOMContentLoaded",()=>{
    const lastcard= document.getElementById('hidecard')
    const hidegrid=document.getElementById('hidegrid');
const buttonload=document.getElementById('loadmore');
buttonload.addEventListener('click',()=>{
    lastcard.style.display='block';
    hidegrid.style.display='grid';
});
const optionbutton=document.getElementById('optionbutton');
const removebar=document.getElementById('removebar');
const topbar=document.getElementById('topbar');
const lastsection=document.getElementById('lastsection');
optionbutton.addEventListener('click',()=>{
    topbar.style.display='block';
    lastsection.style.display='none';
   
});
removebar.addEventListener('click',()=>{
    topbar.style.display='none';
    lastsection.style.display='flex';
})



const pencil=document.getElementById('pencil');
const person=document.getElementById('person');
const radio=document.getElementById('radio');
const hand=document.getElementById('hand');
let noscroll=1540;
window.addEventListener('scroll',()=>{
    let scrolldown=window.scrollY;
    if(scrolldown>noscroll){
        pencil.style.transition='transform ease 1s';
        pencil.style.transform='translateX(-50px)';
        person.style.transition='transform ease 1s';
        person.style.transform='translateY(-50px)';
        radio.style.transition='transform ease 1s';
        radio.style.transform='translateX(-50px)';
        hand.style.transition='transform ease 1s';
        hand.style.transform='translateX(-50px)';
        // console.log(scrolldown,'scrollingdown');
    }
    else{
        pencil.style.transition='transform ease 1s';
        pencil.style.transform='translateX(40px)';
        person.style.transition='transform ease 1s';
        person.style.transform='translateY(40px)';
        radio.style.transition='transform ease 1s';
        radio.style.transform='translateX(40px)';
        hand.style.transition='transform ease 1s';
        hand.style.transform='translateX(40px)';
    }
    noscroll= scrolldown<=0 ? 0:scrolldown;
})

});