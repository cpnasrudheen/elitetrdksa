const header=document.getElementById("header"),nav=document.getElementById("nav"),menu=document.getElementById("menu");
window.addEventListener("scroll",()=>header.classList.toggle("compact",scrollY>30),{passive:true});
if(menu)menu.onclick=()=>nav.classList.toggle("open");
if(nav)nav.querySelectorAll("a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));

const slides=[
["assets/dry-food.jpg","Dry Food Supply"],
["assets/packing.jpg","Packing & Plastic"],
["assets/safety.jpg","Safety Items"],
["assets/technology.jpg","Technology & Connectivity"],
["assets/frozen.jpg","Frozen Items"]];
let current=0,timer;
const heroImage=document.getElementById("heroImage"),heroName=document.getElementById("heroName"),heroCount=document.getElementById("heroCount"),heroProgress=document.getElementById("heroProgress");
function showSlide(i){current=(i+slides.length)%slides.length;heroImage.style.opacity=0;setTimeout(()=>{heroImage.src=slides[current][0];heroName.textContent=slides[current][1];heroCount.textContent=`0${current+1} / 05`;heroProgress.style.width=`${(current+1)*20}%`;heroImage.style.opacity=1},150)}
function restart(){clearInterval(timer);timer=setInterval(()=>showSlide(current+1),5500)}
document.getElementById("prev").onclick=()=>{showSlide(current-1);restart()};document.getElementById("next").onclick=()=>{showSlide(current+1);restart()};showSlide(0);restart();

const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -40px"});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));

document.getElementById("quoteForm").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.target);const msg=`Hello Elite Horizon,\n\nName: ${f.get("name")}\nCompany: ${f.get("company")}\nPhone: ${f.get("phone")}\nCategory: ${f.get("category")}\nRequirement: ${f.get("message")}`;window.open("https://wa.me/966540783355?text="+encodeURIComponent(msg),"_blank")});
