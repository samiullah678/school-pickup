document.addEventListener("DOMContentLoaded", () => {
  const optionsButton = document.getElementById("options");
  const toggleMenu = document.getElementById("togglmenu");
  const cross = document.getElementById("crossicon");
  const Header = document.getElementById("header-container");
  const body = document.getElementsByTagName("body");
  const moon = document.getElementById("moonicon");
  const list = document.querySelectorAll(".menu li a");
  const newmoon = document.getElementById("newmoon");
  const newmenu = document.querySelectorAll(".newmenu li a");
  const tooglemenu = document.getElementById("togglmenu");
  const sun = document.getElementById("sun");
  const newsun = document.getElementById("newsun");
  const sectiontext = document.getElementById("text");
  const sectiontext2 = document.getElementById("text1");
  const sectiontext3 = document.getElementById("text2");
  const sectiontext4 = document.getElementById("text3");
  const cardpara = document.querySelectorAll(".firstrow p");
  const cardheading = document.querySelectorAll(".firstrow h2");
  const cardmain = document.getElementById("cardmainheading");
  const mobile1 = document.getElementById("ndpara");
  const mobile2 = document.getElementById("rdpara");
  const mobilelist = document.querySelectorAll(".list li");
  const last = document.getElementById("last");
  const lastp2 = document.getElementById("p2");
  const lastupdate = document.getElementById("updates");
  const lastp1 = document.getElementById("nump1");
  const lastp3 = document.getElementById("nump2");
  const apps= document.getElementById('apps');
  const mobile=document.getElementById('mobile');
  const and= document.getElementById('and');
  const childsecurity=document.getElementById('childsecurity');
  const secoonlast=document.getElementById('secondlastmanage');
  const secoonlastp=document.getElementById('secondlastp');
  const footer=document.getElementById('footermanage');
  const footer1=document.getElementById('footermanage1');
  const footer2=document.getElementById('footermanage2');

  optionsButton.addEventListener("click", () => {
    toggleMenu.classList.toggle("active");
  });
  cross.addEventListener("click", () => {
    toggleMenu.classList.remove("active");
    Header.style.diplay = "flex";
  });
  moon.addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(51, 50, 50)";
    sun.style.color = "white";
    moon.style.display = "none";
    sun.style.display = "block";
    sun.style.marginTop = "10px";
    sun.style.marginLeft = "5px";
    sectiontext.style.color = "white";
    sectiontext2.style.color = "white";
    sectiontext3.style.color = "white";
    sectiontext4.style.color = "white";
    cardmain.style.color = "white";
    mobile1.style.color = "white";
    mobile2.style.color = "white";
    last.style.backgroundColor = "rgb(51, 50, 50)";
    lastp2.style.color = "white";
    lastupdate.style.color = "white";
    lastp1.style.color = "white";
    lastp3.style.color = "white";
    apps.style.backgroundColor='rgb(51, 50, 50)'
    mobile.style.color='white';
    and.style.color='white'
    childsecurity.style.color='white';
secoonlast.style.backgroundColor='rgb(51, 50, 50)';
secoonlastp.style.color='white';
footer1.style.color='white';
footer2.style.color='white';
footer.style.color='white';

    mobilelist.forEach((li) => {
      li.style.color = "white";
    });
    cardpara.forEach((p) => {
      p.style.color = "white";
    });
    cardheading.forEach((h) => {
      h.style.color = "white";
    });
    Header.style.backgroundColor = "rgb(31, 30, 30)";

    list.forEach((item) => {
      item.style.color = "white";
      item.onmouseover = () => {
        item.style.color = "orange";
      };
      item.onmouseout = () => {
        item.style.color = "white";
      };
    });
  });
  newmoon.addEventListener("click", () => {
    
    last.style.backgroundColor = "rgb(51, 50, 50)";
    lastp2.style.color = "white";
    lastupdate.style.color = "white";
    lastp1.style.color = "white";
    lastp3.style.color = "white";
    document.body.style.backgroundColor = "rgb(51, 50, 50)";
    tooglemenu.style.backgroundColor = "rgb(31, 30, 30)";
    tooglemenu.style.border = "none";
    newsun.style.display = "block";
    newsun.style.color = "white";
    newmoon.style.display = "none";
    apps.style.backgroundColor='rgb(51, 50, 50)'
    mobile.style.color='white';
    and.style.color='white'
    childsecurity.style.color='white';
 
    newmenu.forEach((item) => {
      item.style.color = "white";
      item.onmouseover = () => {
        item.style.color = "orange";
      };
      item.onmouseout = () => {
        item.style.color = "white";
      };
    });
  });
  sun.addEventListener("click", () => {
    sectiontext.style.color = "black";
    sectiontext2.style.color = "black";
    sectiontext3.style.color = "black";
    sectiontext4.style.color = "black";
    cardmain.style.color = "black";
    mobile1.style.color = "black";
    mobile2.style.color = "black";
    document.body.style.backgroundColor = "white";
    moon.style.display = "block";
    sun.style.display = "none";
    last.style.backgroundColor = "white";
    lastp2.style.color = "black";
    lastupdate.style.color = "black";
    lastp1.style.color = "black";
    lastp3.style.color = "black";
    apps.style.backgroundColor='white'
    mobile.style.color='black';
    and.style.color='black'
    childsecurity.style.color='black';
    secoonlast.style.backgroundColor='white'
secoonlastp.style.color='black';
footer.style.color='black';
footer1.style.color='black';
footer2.style.color='black';
footer.style.color='black';
    
    Header.style.backgroundColor = "white";
    cardpara.forEach((p) => {
        p.style.color = "black";
      });
      cardheading.forEach((h) => {
        h.style.color = "black";
      });
    list.forEach((item) => {
      item.style.color = "black";
      item.onmouseover = () => {
        item.style.color = "orange";
      };
      item.onmouseout = () => {
        item.style.color = "black";
      };
    });
  });
  newsun.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    tooglemenu.style.backgroundColor = "white";
    tooglemenu.style.border = "none";
    newsun.style.display = "none";
    newmoon.style.display = "block";
    childsecurity.style.color='white';
    newmenu.forEach((item) => {
      item.style.color = "rgb(40, 39, 39)";
      item.onmouseover = () => {
        item.style.color = "orange";
      };
      item.onmouseout = () => {
        item.style.color = "rgb(40, 39, 39)";
      };
    });
  });
});
