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
  index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 3000);

/* Scroll Animation */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".animate")
  .forEach((section) => { observer.observe(section); });

/* ----- BOOKING FORM ----- */
document.querySelector(".booking-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    let name    = document.getElementById("name").value;
    let datein  = document.getElementById("checkin").value;
    let dateout = document.getElementById("checkout").value;
    let adults  = document.getElementById("adults").value;
    let child   = document.getElementById("children").value;
    let room    = document.getElementById("roomtype").value;
    let email   = document.getElementById("email").value;
    let number  = document.getElementById("number").value;

    // Basic validation
    if (!datein || !dateout) {
      alert("Please select both check-in and check-out dates.");
      return;
    }
    if (new Date(dateout) <= new Date(datein)) {
      alert("Check-out date must be after check-in date.");
      return;
    }
    if (!room) {
      alert("Please select a room type.");
      return;
    }

    console.log({ name, datein, dateout, adults, child, room, email, number });

    // WhatsApp message
    let phoneNumber = "256759258767";
    let message = `BOOKING REQUEST FROM RT HOTEL WEBSITE
-----------------------------------
Name: ${name}
Check-in: ${datein}
Check-out: ${dateout}
Adults: ${adults}
Children: ${child}
Room Type: ${room}
Email: ${email}
Phone: ${number}
-----------------------------------
Please confirm my reservation. Thank you!`;

    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");

    // Show success message
    const successMsg = document.getElementById("booking-success");
    successMsg.style.display = "block";
    successMsg.scrollIntoView({ behavior: "smooth", block: "center" });

    // Reset form after 4 seconds
    setTimeout(() => {
      e.target.reset();
      successMsg.style.display = "none";
    }, 4000);
  });