import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 APNA CONFIG YAHA DAAL
const firebaseConfig = {
  apiKey: "AIzaSyBgYqgf6CxCPDj5eOtrjlK7Jvolg6gr2x8",
  authDomain: "p1andey.firebaseapp.com",
  projectId: "p1andey",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔥 SHOW SERVICES
async function loadServices(){
  const querySnapshot = await getDocs(collection(db, "services"));
  const list = document.getElementById("services");

  querySnapshot.forEach(doc => {
    let li = document.createElement("li");
    li.innerText = doc.data().name;
    list.appendChild(li);
  });
}
loadServices();

// ✨ PARTICLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r:2,
    dx:Math.random()-0.5,
    dy:Math.random()-0.5
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();

    p.x+=p.dx;
    p.y+=p.dy;
  });

  requestAnimationFrame(animate);
}
animate();
