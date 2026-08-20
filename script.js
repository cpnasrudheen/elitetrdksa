const slides=document.querySelectorAll('.slide');const dots=document.querySelectorAll('.dot');const prev=document.getElementById('prev');const next=document.getElementById('next');let current=0,timer;
function show(i){if(!slides.length)return;if(i>=slides.length)i=0;if(i<0)i=slides.length-1;current=i;slides.forEach((s,n)=>s.classList.toggle('active',n===current));dots.forEach((d,n)=>d.classList.toggle('active',n===current))}
function start(){clearInterval(timer);timer=setInterval(()=>show(current+1),4500)}
next?.addEventListener('click',()=>{show(current+1);start()});prev?.addEventListener('click',()=>{show(current-1);start()});dots.forEach((d,i)=>d.addEventListener('click',()=>{show(i);start()}));show(0);start();
const slider=document.querySelector('.hero-visual');slider?.addEventListener('mouseenter',()=>clearInterval(timer));slider?.addEventListener('mouseleave',start);
const menu=document.getElementById('menu'),mobile=document.getElementById('mobile');menu?.addEventListener('click',()=>mobile.classList.toggle('open'));mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
