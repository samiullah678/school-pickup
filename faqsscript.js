document.addEventListener('DOMContentLoaded',()=>{
    
    const button=document.querySelectorAll('.img');
    const button2=document.querySelectorAll('.i');
    const sidebar=document.getElementById('sidebar');
    const optionbutton=document.getElementById('options');
    const removesidebar=document.getElementById('removesidebar');
    optionbutton.addEventListener('click',()=>{
        sidebar.style.display='block';
    });
    removesidebar.addEventListener('click',()=>{
        sidebar.style.display='none';
    })

    
    button.forEach((b)=>{
        b.addEventListener('click',()=>{
     const targetpid=b.getAttribute('data-target');
    const targetbid=b.getAttribute('data-target2');
         const para=document.getElementById(targetpid);
         const minus=document.getElementById(targetbid);
         minus.style.display="block";
         b.style.display='none';
         console.log(para);
        para.style.display='block';
        
        });
    });
    button2.forEach((b2)=>{
        b2.addEventListener('click',()=>{
           const targetparaid= b2.getAttribute('data-target');
           const targetbid= b2.getAttribute('data-target2');
            const para=document.getElementById(targetparaid);
            const but=document.getElementById(targetbid);
            para.style.display='none';
             b2.style.display='none';
             but.style.display='block';
        });
    })



    })
   
