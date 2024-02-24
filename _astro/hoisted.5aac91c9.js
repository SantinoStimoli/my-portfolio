import"https://unpkg.com/boxicons@2.1.4/dist/boxicons.js";const l=document.getElementById("start"),e=document.getElementById("bg-pic"),n=e?.clientHeight??0,o=e?.clientWidth??0;l?.addEventListener("mousemove",t=>{const{x:s,y:i}=t,c=(s-o/2)/o*-3,a=`
    perspective(500px)
    scale(1)
    rotateX(${(i-n/2)/n*-3}deg)
    rotateY(${c}deg)
    `;e!==null&&(e.style.transform=a)});const r=document.getElementsByClassName("project-card");Array.from(r).forEach(t=>{t.addEventListener("mouseenter",s=>{t.classList.add("visible-links")}),t.addEventListener("mouseleave",()=>{t.classList.remove("visible-links")})});
