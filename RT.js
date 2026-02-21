/* Mobile Menu */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/* Background Image Slider */
const hero = document.querySelector(".hero");
const images = [
  "image20.jpeg",
  "luxurysuite.webp",
  "spagheti.jpeg"
];

let index = 0;

function changeBackground() {
  hero.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1)%images.length;
}

changeBackground();
setInterval(changeBackground, 3000);

/* Scroll Animation */
/*const animatedSections = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
  animatedSections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      section.classList.add("show");
    }
  });
});*/

const observer = new  IntersectionObserver((entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add("show");}
});
},{
  threshold:0.2
});
document.querySelectorAll(".animate")
.forEach((section)=>{observer.observe(section)});



/*-----BOOKING-FORM---*/
emailjs.init("tAHqzDZVWZAq_IFRN")
document.querySelector(".booking-form")
.addEventListener("submit",(e)=>{
  e.preventDefault();
  let name = document.getElementById("name").value
  let datein = document.getElementById("checkin").value
   let dateout = document.getElementById("checkout").value
  let adults = document.getElementById("adults").value
  let child = document.getElementById("children").value
  let room = document.getElementById("roomtype").value
  let email = document.getElementById("email").value
  let number = document.getElementById("number").value
  console.log({name,datein,dateout,adults,child,room,email,number});

  let phoneNumber = "256759258767";
  let message = `I HAVE BOOKED
  name:${name}
  checkin:${datein}
  checkout:${dateout}
  adults:${adults}
  chlidren:${child}
  room:${room}
  email:${email}
  number:${number}
  
  `
  let url ="https://wa.me/" + phoneNumber +"?text=" + encodeURIComponent(message);
  console.log(url);
 window.open(url,"_blank");
 alert('Whatssap will open please review the messages and tap "send button"')
 e.target.reset();
 });

