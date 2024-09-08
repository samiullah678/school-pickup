document.addEventListener('DOMContentLoaded',()=>{
    const selected=document.getElementById('countrycode');
    const phoneinput=document.getElementById('phonenumberinn');
    phoneinput.value=selected.value;
    selected.addEventListener('change',()=>{
        phoneinput.value=selected.value;
    })
});
const emptyname=document.getElementById('emptyname');
const form=document.getElementById('myform');
const nameinput=document.getElementById('nameinput');
const schoolinput=document.getElementById('schoolinput');
const emptyschool=document.getElementById('emptyschool');
const emailinput=document.getElementById('emailinput');
const emptyemail=document.getElementById('emptyemail');
const phoneinput=document.getElementById('phonenumberinn');
const emptyphonenumber=document.getElementById('emptyphonenumber');
const optionbutton=document.getElementById('options');
const removebar=document.getElementById('removebar');
const topbar=document.getElementById('optionresponsive');
optionbutton.addEventListener('click',()=>{
    topbar.style.display='block';
});
removebar.addEventListener('click',()=>{
    topbar.style.display='none';
})



form.addEventListener('submit',(event)=>{

if(nameinput.value===''){
    event.preventDefault();
    emptyname.style.display='flex';
}
else{
    emptyname.style.display='none';
}
if(schoolinput.value===''){
    event.preventDefault();
    emptyschool.style.display='flex';
}
else{
    emptyschool.style.display='none';
}
if(emailinput.value===''){
    event.preventDefault();
    emptyemail.style.display='flex';
}
else{
    emptyemail.style.display='none';
}
if(phoneinput.value.length<'8'){
    event.preventDefault();
    emptyphonenumber.style.display='flex';
}
else{
    emptyphonenumber.style.display='none';
}
});
