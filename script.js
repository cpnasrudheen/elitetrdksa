const slides=[
  ["assets/dry-food.jpg","DRY FOOD SUPPLY"],
  ["assets/packing.jpg","PACKING & PLASTIC"],
  ["assets/safety.jpg","SAFETY ITEMS"],
  ["assets/technology.jpg","TECHNOLOGY & CONNECTIVITY"],
  ["assets/frozen.jpg","FROZEN ITEMS"]
];
let current=0;
const heroImage=document.getElementById("heroImage");
const heroLabel=document.getElementById("heroLabel");
const dots=document.getElementById("dots");
function renderDots(){
  slides.forEach((_,i)=>{
    const b=document.createElement("button");
    b.setAttribute("aria-label","Show slide "+(i+1));
    b.onclick=()=>showSlide(i);
    dots.appendChild(b);
  });
}
function showSlide(i){
  current=(i+slides.length)%slides.length;
  heroImage.style.opacity="0";
  setTimeout(()=>{
    heroImage.src=slides[current][0];
    heroLabel.textContent=slides[current][1];
    heroImage.style.opacity="1";
  },160);
  [...dots.children].forEach((b,j)=>b.classList.toggle("active",j===current));
}
renderDots(); showSlide(0);
document.getElementById("prev").onclick=()=>showSlide(current-1);
document.getElementById("next").onclick=()=>showSlide(current+1);
setInterval(()=>showSlide(current+1),5000);

const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
menuBtn.onclick=()=>nav.classList.toggle("open");
nav.querySelectorAll("a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));

document.getElementById("quoteForm").addEventListener("submit",e=>{
  e.preventDefault();
  const f=new FormData(e.target);
  const text=`Hello Elite Horizon,\n\nName: ${f.get("name")}\nCompany: ${f.get("company")}\nPhone: ${f.get("phone")}\nEmail: ${f.get("email")}\nCategory: ${f.get("category")}\nRequirement: ${f.get("message")}`;
  window.open("https://wa.me/966540783355?text="+encodeURIComponent(text),"_blank");
});

/* Premium scroll reveal */
const premiumObserver=new IntersectionObserver(entries=>entries.forEach(e=>{
 if(e.isIntersecting){e.target.classList.add("visible");premiumObserver.unobserve(e.target)}
}),{threshold:.12,rootMargin:"0px 0px -45px 0px"});
document.querySelectorAll(".reveal").forEach(el=>premiumObserver.observe(el));
