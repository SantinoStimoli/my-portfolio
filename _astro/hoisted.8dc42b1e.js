import"./hoisted.ccb172af.js";import"https://unpkg.com/boxicons@2.1.4/dist/boxicons.js";const l=document.getElementById("start"),t=document.getElementById("bg-pic"),n=t?.clientHeight??0,o=t?.clientWidth??0;l?.addEventListener("mousemove",e=>{const{x:s,y:i}=e,a=(s-o/2)/o*-3,r=`
    perspective(500px)
    scale(1)
    rotateX(${(i-n/2)/n*-3}deg)
    rotateY(${a}deg)
    `;t!==null&&(t.style.transform=r),t!==null&&(t.style.transition="")});l?.addEventListener("mouseleave",e=>{const s=`
    perspective(500px)
    scale(1)
    rotateX(0deg)
    rotateY(0deg)
    `;t!==null&&(t.style.transform=s),t!==null&&(t.style.transition="all 200ms")});const c=document.getElementsByClassName("project-card");Array.from(c).forEach(e=>{e.addEventListener("mouseenter",s=>{e.classList.add("visible-links")}),e.addEventListener("mouseleave",()=>{e.classList.remove("visible-links")})});
