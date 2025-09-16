// -------------------- ROADMAP --------------------
const roadmapData = [
  { phase: "Phase 1 – MVP", features: ["Home Feed", "Circles", "Marketplace", "Academics Hub", "Notifications", "Offline Mode"] },
  { phase: "Phase 2 – Student Upgrade", features: ["Chat Lite", "Stories", "Voice Notes", "Profile Badges"] },
  { phase: "Phase 3 – WhatsApp Features", features: ["Broadcast Channels", "Marketplace Quick Chat", "Media Library", "Push Notifications"] },
  { phase: "Phase 4 – Future Pro", features: ["Voice + Video Calls", "AI Study Assistant", "Encryption", "Portal Integration"] }
];

const roadmapContainer = document.querySelector('.roadmap-container');

roadmapData.forEach((item,index)=>{
  const phaseEl = document.createElement('div'); phaseEl.className='phase';
  const circle = document.createElement('div'); circle.className='phase-circle'; circle.textContent=index+1;
  const card = document.createElement('div'); card.className='phase-card';
  card.innerHTML = `<h3>${item.phase}</h3><ul>${item.features.map(f=>`<li>${f}</li>`).join('')}</ul>`;
  circle.addEventListener('click',()=>{ card.classList.toggle('expanded'); });
  phaseEl.appendChild(circle); phaseEl.appendChild(card); roadmapContainer.appendChild(phaseEl);

  // GSAP Animations
  gsap.from(circle,{ scrollTrigger:{ trigger: circle, start:"top 80%" }, y:-50, opacity:0, duration:0.8, ease:"bounce.out" });
  gsap.from(card,{ scrollTrigger:{ trigger: card, start:"top 80%" }, x:-50, opacity:0, duration:0.8, delay:0.2, ease:"power2.out" });
});

// -------------------- FLOWCHART --------------------
const flowchartData = [
  {name:"Home Feed", features:["Announcements","Trending Carousel","Drag & Drop"]},
  {name:"Circles", features:["Group posts","Files","Events","Members"]},
  {name:"Marketplace", features:["Student-to-student services","Chat placeholder"]},
  {name:"Academics Hub", features:["Past questions","Notes","Tutors"]},
  {name:"Notifications", features:["Snackbars","GSAP Animations"]},
  {name:"Chat Lite", features:["1:1 messaging","Group chat","Text + Image"]},
  {name:"Stories / Campus Status", features:["Clubs & department posts","Study updates","Moments"]}
];

const flowchartContainer = document.querySelector('.flowchart-container');

flowchartData.forEach(node=>{
  const nodeEl=document.createElement('div'); nodeEl.className='node';
  nodeEl.innerHTML=`<strong>${node.name}</strong><div class="node-tooltip"><ul>${node.features.map(f=>`<li>${f}</li>`).join('')}</ul></div>`;
  nodeEl.addEventListener('click',()=>{ nodeEl.classList.toggle('show-tooltip'); });
  flowchartContainer.appendChild(nodeEl);
});

// -------------------- FEATURE TABLE --------------------
const featureTableData = [
  {feature:"Home Feed", status:"MVP", description:"Announcements, Carousel, Drag & Drop"},
  {feature:"Circles", status:"MVP", description:"Group posts, files, events"},
  {feature:"Marketplace", status:"MVP", description:"Student services, chat placeholder"},
  {feature:"Academics Hub", status:"MVP", description:"Past questions, notes, tutors"},
  {feature:"Chat Lite", status:"Phase 2", description:"1:1 & group messaging"},
  {feature:"Stories / Campus Status", status:"Phase 2", description:"Student stories, events"},
  {feature:"Voice Notes", status:"Phase 2", description:"Record & share inside Circles"}
];

const tableContainer = document.querySelector('.table-container');
const table = document.createElement('table');
table.innerHTML=`<thead><tr><th>Feature</th><th>Status</th><th>Description</th></tr></thead>
<tbody>${featureTableData.map(f=>`<tr><td>${f.feature}</td><td>${f.status}</td><td>${f.description}</td></tr>`).join('')}</tbody>`;
tableContainer.appendChild(table);
