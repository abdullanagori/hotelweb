const phone="919993112008";
const navToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
navToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

document.getElementById("year").textContent=new Date().getFullYear();

const photos=[
 "assets/hotel-photo-1.jpg","assets/hotel-photo-2.jpg","assets/hotel-photo-3.jpg",
 "assets/hotel-photo-4.jpg","assets/hotel-photo-5.jpg","assets/hotel-photo-6.jpg"
];
const lb=document.getElementById("lightbox"), lbImg=document.getElementById("lightboxImg");
let current=0;
function show(i){current=(i+photos.length)%photos.length;lbImg.src=photos[current];lb.classList.add("open");lb.setAttribute("aria-hidden","false")}
document.querySelectorAll(".gallery-item").forEach((item,i)=>item.addEventListener("click",()=>show(i)));
document.querySelector(".close").onclick=()=>{lb.classList.remove("open");lb.setAttribute("aria-hidden","true")};
document.querySelector(".prev").onclick=()=>show(current-1);
document.querySelector(".next").onclick=()=>show(current+1);
lb.addEventListener("click",e=>{if(e.target===lb)document.querySelector(".close").click()});
document.addEventListener("keydown",e=>{if(!lb.classList.contains("open"))return;if(e.key==="Escape")document.querySelector(".close").click();if(e.key==="ArrowLeft")show(current-1);if(e.key==="ArrowRight")show(current+1)});

document.getElementById("bookingForm").addEventListener("submit",e=>{
  e.preventDefault();
  const f=new FormData(e.target);
  const msg=`Hello Hotel Atishubh, I would like to make a booking request.%0A%0AName: ${f.get("name")}%0APhone: ${f.get("phone")}%0ACheck-in: ${f.get("checkin")}%0ACheck-out: ${f.get("checkout")}%0AGuests: ${f.get("guests")}%0ARoom: ${f.get("room")}%0ASpecial request: ${f.get("message")||"None"}`;
  window.open(`https://wa.me/${phone}?text=${msg}`,"_blank");
});
