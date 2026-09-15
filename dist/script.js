(() => {
"use strict";
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const external=(url,label)=>'<a href="'+url+'" target="_blank" rel="noopener noreferrer">'+label+' ↗</a>';
const repos={
legal:"https://github.com/Praveenraj1618/Mini-Proj",
vton:"https://github.com/Praveenraj1618/Virtual-Try-on",
itms:"https://github.com/Praveenraj1618/Integrated-Track-Monitoring-System",
speech:"https://github.com/Praveenraj1618/Speech_to_Sign"
};
const projects={
legal:{
index:"01",title:"Legal AI",subtitle:"Contract intelligence built around retrievable evidence.",status:"Academic prototype",
problem:"Finding the right clause is only half the work. A contract review tool also needs traceable sources, document isolation, and a way to evaluate retrieval quality.",
approach:"Chunk readable contract pages, retrieve with BM25 and dense embeddings, fuse ranks with RRF, and optionally rerank with a cross-encoder. Return evidence to document review, comparison, and question-answering views.",
evidence:"A committed five-stage ablation compares 42 answerable queries on one contract. Reranking raises Recall@1 from 69.0% to 84.5%; mean latency rises from 15.62 ms to 477.28 ms.",
outcome:"An evidence-backed contract review prototype, with a measured choice between broader retrieval coverage and better top-result ranking.",
scope:"Historical repository benchmark, not a fresh evaluation. Retrieval metrics do not establish generated-answer quality or legal correctness.",
stack:["Python JSON API","LangChain","ChromaDB","BM25","Sentence Transformers","RRF","Cross-encoder","HTML / JavaScript UI"],
links:()=>external(repos.legal,"Source code")+external(repos.legal+"/blob/main/docs/ablation_study.md","Recorded benchmark")+external(repos.legal+"/blob/main/backend/benchmark_dataset.json","Evaluation queries"),
exploreLabel:"Compare retrieval"
},
vton:{
index:"02",title:"Virtual Try-On",subtitle:"A 3D fitting studio and an evolving person-based AI workflow.",status:"In development",
problem:"A useful try-on experience needs to preserve the person while adapting clothing, avoid unwanted edits, and make failures easy to diagnose.",
approach:"The 3D studio uses procedural garments and approximate cloth relaxation. A separate FastAPI service uses SCHP/DensePose masking, CatVTON inference, and compositing back into the original photo.",
evidence:"The repository includes the studio, model adapter, mask diagnostics, asynchronous jobs, history, and image downloads. CPU tests cover image transforms, protected pixels, job recovery, and API behavior.",
outcome:"A working 3D prototype and an implemented upper-body photo try-on pipeline. The saved diagnostics support targeted improvements to sleeves, necklines, and clothing masks.",
scope:"The photo workflow currently targets shirts/T-shirts. GPU output quality and identity/garment fidelity still need real-image evaluation. Procedural outfit support in the 3D studio does not establish multi-outfit AI inference or physical fit accuracy.",
stack:["React","TypeScript","Three.js","FastAPI","PyTorch","CatVTON","SCHP","DensePose"],
links:()=>external(repos.vton,"Source code")+external(repos.vton+"/blob/main/backend/README.md","AI pipeline & diagnostics"),
exploreLabel:"Explore the pipeline"
},
itms:{
index:"03",title:"Integrated Track Monitoring System",subtitle:"Object detection for locating defects and supporting inspection review.",status:"Research prototype",
problem:"Track inspection needs defect categories and their locations in an image, with a clear path from detection output to human review.",
approach:"Adapt YOLOv8 to annotated railway images and save bounding-box predictions. A separate React dashboard explores detection details, maintenance tasks, and inspection workflows.",
evidence:"The repository contains training and inference scripts, a 15-class dataset configuration, saved annotated examples, and a review dashboard. These demonstrate implementation, not an independently reproduced field benchmark.",
outcome:"An image-detection workflow and a dashboard prototype that make the intended review process concrete.",
scope:"The Python workflow and dashboard run separately. Dashboard records and roles are simulated. A connecting inference API, live sensors, chainage mapping, and field validation remain future work.",
stack:["Python","Ultralytics YOLOv8","OpenCV","React","React Router","Tailwind CSS","Recharts"],
links:()=>external(repos.itms,"Source code")+external(repos.itms+"/blob/master/train_yolo.py","Training configuration")+external(repos.itms+"/blob/master/README.md","Implementation evidence"),
exploreLabel:"Explore confidence"
},
speech:{
index:"04",title:"Speech to Sign",subtitle:"From multilingual speech to a sequence of sign-language clips.",status:"Python prototype",
problem:"Spoken interfaces can create a communication barrier for sign-language users, especially across multiple spoken languages.",
approach:"Recognize English, Tamil, Telugu, or Hindi speech; translate into English; use spaCy lemmatization and token rules to form a simplified gloss; then look up word videos with letter-clip fallback.",
evidence:"The repository includes Streamlit, desktop and console interfaces, four input language choices, rule-based gloss logic, and sign video assets. Coverage follows the available word and letter clips.",
outcome:"An end-to-end communication prototype connecting speech recognition, language processing, and accessible visual playback.",
scope:"Simplified gloss is not complete Indian Sign Language grammar. Missing letter clips are skipped. Translation accuracy, signer comprehension, and complete vocabulary coverage have not been benchmarked.",
stack:["Python","SpeechRecognition","deep-translator","spaCy","Streamlit","OpenCV","PyAudio"],
links:()=>external(repos.speech,"Source code")+external(repos.speech+"/blob/main/streamlit_app.py","Processing pipeline")+external(repos.speech+"/blob/main/README.md","Project documentation"),
exploreLabel:"Follow a phrase"
}
};
const additions = {"agro": {"index": "03", "title": "AgroVision", "subtitle": "A two-stage system for locating crop regions and classifying disease.", "status": "Research prototype", "category": "vision", "domain": "VISION / AGRICULTURE", "summary": "Find the leaf. Understand the condition.", "shortProblem": "A crop photo can contain several regions and subtle signs of disease.", "shortApproach": "Use YOLO to locate candidate regions, then EfficientNet-B0 to classify each crop.", "problem": "Whole-image labels can miss where a plant condition appears. A useful crop-analysis interface needs region-level predictions across multiple crops.", "approach": "YOLO locates candidate regions. The API crops and resizes them to 224 × 224, uses EfficientNet-B0 for 15 crop/condition labels, and returns filtered bounding boxes to React.", "evidence": "The committed detector CSV records mAP@50 of 0.85019 and mAP@50–95 of 0.65742 at epoch 56. The repository includes inference, crop-preparation and classifier-training code.", "outcome": "An implemented image-to-results workflow across five crop families, connecting detection, fine-grained classification, and an interactive results interface.", "scope": "Recorded detector validation is not complete-pipeline accuracy. The classifier checkpoint must be supplied separately; the full inference chain was not rerun for this portfolio. Confidence and box area do not establish disease severity.", "stack": ["Python", "PyTorch", "YOLOv8", "EfficientNet-B0", "FastAPI", "React", "OpenCV"], "cardStack": ["PyTorch", "YOLOv8", "EfficientNet-B0", "FastAPI"], "cardEvidence": "Evidence: recorded detector validation", "repo": "Multi_Crop_Disease_Prediction", "sourcePaths": [["detection_code2/api.py", "Two-stage API"], ["detection_code2/runs/train/multi_crop_v2/results.csv", "Recorded training results"]], "exploreLabel": "Explore crop coverage"}, "company": {"index": "04", "title": "Company Lens", "subtitle": "Company intelligence across regional and global news, with sources intact.", "status": "Working application", "category": "generative language data", "domain": "AI APPLICATIONS / DATA ENGINEERING", "summary": "From scattered reporting to cited company context.", "shortProblem": "Relevant company updates are spread across languages, publishers, and repeated stories.", "shortApproach": "Collect and group coverage, preserve sources, and support cited retrieval with optional AI analysis.", "problem": "Following a company across regional and global reporting requires collection, deduplication, source tracking, and a way to distinguish evidence from generated analysis.", "approach": "Use scheduled RSS/Atom collection, company matching, story grouping, and durable storage. BM25 supports extractive retrieval; an optional model connection adds embeddings, translation, and synthesized answers.", "evidence": "The 7 September 2026 release report records 161 sources checked, 101 readable, and 52 unique records imported. A repeated sync inserted zero duplicates. The repository documents 33 automated tests passing in that release.", "outcome": "A company-monitoring workspace with background collection, evidence inspection, source-health visibility, and retrieval that remains usable without a model key.", "scope": "These are historical operational results, not current source health or AI accuracy. The small fictional retrieval fixture does not establish real-world answer quality. Model-enabled translation and semantic analysis require separate validation.", "stack": ["TypeScript", "React", "Cloudflare Workers", "SQLite / D1", "BM25", "RRF", "Zod", "RSS / Atom"], "cardStack": ["TypeScript", "React", "Cloudflare", "BM25"], "cardEvidence": "Evidence: documented collection and sync", "repo": "company-lens", "sourcePaths": [["docs/architecture.md", "Architecture"], ["docs/evaluation.md", "Recorded verification"]], "exploreLabel": "Explore the evidence flow"}, "waste": {"index": "08", "title": "WasteZero", "subtitle": "A full-stack platform for volunteer coordination and waste pickups.", "status": "Application prototype", "category": "software", "domain": "FULL-STACK / COMMUNITY TOOLS", "summary": "Bring opportunities, pickups, and people together.", "shortProblem": "Community initiatives need connected coordination and communication workflows.", "shortApproach": "Build role-based accounts, opportunity and pickup APIs, and Socket.IO messaging.", "problem": "Volunteer initiatives span multiple roles, opportunities, pickup schedules, and conversations. Isolated forms do not connect that work.", "approach": "Connect a React/TypeScript interface to Express APIs and MongoDB models. JWT-based authentication supports account workflows; Socket.IO handles messaging, typing, delivery, and read events.", "evidence": "The repository contains auth, opportunity, application, pickup, messaging, and reporting routes. The server wires Socket.IO to stored messages, delivery/read updates, and notifications.", "outcome": "A full-stack coordination prototype demonstrating database-backed workflows and real-time communication alongside my AI/ML projects.", "scope": "The frontend requires the API and MongoDB to exercise complete workflows. This portfolio review inspected implementation; it did not independently run an end-to-end deployment or security audit.", "stack": ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Socket.IO"], "cardStack": ["React", "Node.js", "MongoDB", "Socket.IO"], "cardEvidence": "Evidence: API, database and messaging code", "repo": "Waste-Zero", "sourcePaths": [["backend/server.js", "API & messaging server"], ["README.md", "Architecture & walkthrough"]], "exploreLabel": "Explore user workflows"}, "automation": {"index": "07", "title": "AI & Workflow Automation", "subtitle": "Client workflow automation and hospital booking tools built during my Marobust internship.", "status": "Client internship work", "category": "automation software", "domain": "WORKFLOW AUTOMATION / CLIENT DELIVERY", "summary": "Connect services. Simplify everyday operations.", "shortProblem": "Client teams need to coordinate appointments and repetitive tasks across services.", "shortApproach": "Build n8n workflows, third-party integrations, and Telegram-based appointment interactions.", "problem": "Manual coordination across booking systems, administrative tasks, and third-party services creates repetitive work for client teams.", "approach": "Designed and deployed n8n workflows across client projects. Built a hospital management and appointment booking platform with real-time slot availability, admin controls, and a Telegram bot for automated patient interactions.", "evidence": "My résumé records this work as Automation & Software Development Intern at Marobust Tech and Solutions, Salem, from December 2025 to January 2026. It describes delivery of the hospital platform and deployment of n8n workflows across multiple client projects.", "outcome": "Delivered client-facing booking software and connected automation workflows to reduce repetitive manual processes and support appointment interactions.", "scope": "Based on résumé-reported client delivery. The linked hospital repository provides related implementation context; it does not contain the client n8n workflows. No quantified time-saving or model-performance claim is made.", "stack": ["n8n", "Telegram bot", "Third-party integrations", "Workflow automation", "Hospital booking systems", "Admin interfaces"], "cardStack": ["n8n", "Telegram", "Service integrations", "Workflow automation"], "cardEvidence": "Evidence: résumé-documented client delivery", "repo": "Hospital-Appointment-System", "sourcePaths": [], "exploreLabel": "Explore the workflows"}};
Object.entries(additions).forEach(([id,p])=>{
 repos[id]="https://github.com/Praveenraj1618/"+p.repo;
 p.links=()=>external(repos[id],"Source code")+p.sourcePaths.map(([path,label])=>external(repos[id]+"/blob/main/"+path,label)).join("");
 projects[id]=p;
});
projects.automation.links=()=>external(repos.automation,"Related hospital platform source");
const ids=["legal","vton","agro","company","itms","speech","automation","waste"];
ids.forEach((id,i)=>projects[id].index=String(i+1).padStart(2,"0"));
const dialog=$("#project-dialog");
let currentProject="legal";
let trigger=null;
let activeFilter="all";
function filterProjects(filter){
activeFilter=filter;
let count=0;
$$(".filter").forEach(b=>{const selected=b.dataset.filter===filter;b.classList.toggle("active",selected);b.setAttribute("aria-pressed",String(selected));});
$$(".project-card").forEach(card=>{const visible=filter==="all"||card.dataset.category.split(" ").includes(filter);card.hidden=!visible;if(visible)count++;});
$("#project-count").textContent=count+" project"+(count===1?"":"s");
}
$$(".filter").forEach(b=>b.addEventListener("click",()=>filterProjects(b.dataset.filter)));
function overview(p){
return '<div class="case-grid"><div><h3>PROBLEM</h3><p>'+p.problem+'</p></div><div><h3>APPROACH</h3><p>'+p.approach+'</p></div><div style="grid-column:1/-1"><h3>EVIDENCE</h3><p>'+p.evidence+'</p></div><div class="outcome"><h3>OUTCOME</h3><p>'+p.outcome+'</p></div></div><div class="stack-block"><h3>STACK</h3><ul class="tags">'+p.stack.map(s=>'<li>'+s+'</li>').join("")+'</ul></div><p class="scope-note">'+p.scope+'</p><div class="source-links">'+p.links()+'</div>';
}
const benchmark=[
{name:"Dense only",r1:69,r5:95.2,mrr:.806,latency:15.62},
{name:"BM25 only",r1:78.6,r5:97.6,mrr:.875,latency:.29},
{name:"Hybrid union",r1:69,r5:100,mrr:.817,latency:15.33},
{name:"Hybrid + RRF",r1:81,r5:100,mrr:.884,latency:16.48},
{name:"Hybrid + reranker",r1:84.5,r5:95.2,mrr:.905,latency:477.28}
];
function legalExplorer(){
return '<div class="explore-heading"><div><h3>Quality has a cost. Explore the tradeoff.</h3><p>Recorded ablation · 42 answerable queries · one contract</p></div><select id="metric-select" aria-label="Retrieval metric"><option value="r1">Recall@1</option><option value="r5">Recall@5</option><option value="mrr">MRR</option><option value="latency">Mean latency</option></select></div><div id="metric-chart" class="metric-chart" aria-live="polite"></div><p id="metric-insight" class="explore-takeaway"></p><details class="data-details"><summary>View all recorded values</summary><div class="data-table-wrap"><table class="data-table"><caption class="eyebrow">Historical retrieval benchmark</caption><thead><tr><th scope="col">Pipeline</th><th scope="col">Recall@1</th><th scope="col">Recall@5</th><th scope="col">MRR</th><th scope="col">Latency</th></tr></thead><tbody>'+benchmark.map(r=>'<tr><th scope="row">'+r.name+'</th><td>'+r.r1.toFixed(1)+'%</td><td>'+r.r5.toFixed(1)+'%</td><td>'+r.mrr.toFixed(3)+'</td><td>'+r.latency.toFixed(2)+' ms</td></tr>').join("")+'</tbody></table></div></details><p class="scope-note">This explores stored benchmark values; no model runs here. Higher is better for retrieval metrics; lower is better for latency. The eight absence queries were excluded from retrieval metrics.</p><div class="source-links">'+projects.legal.links()+'</div>';
}
function updateMetric(){
const metric=$("#metric-select").value;
const max=metric==="latency"?500:metric==="mrr"?1:100;
const best=metric==="latency"?Math.min(...benchmark.map(r=>r[metric])):Math.max(...benchmark.map(r=>r[metric]));
const format=v=>metric==="latency"?v.toFixed(2)+" ms":metric==="mrr"?v.toFixed(3):v.toFixed(1)+"%";
$("#metric-chart").innerHTML=benchmark.map(r=>'<div class="metric-row '+(r[metric]===best?"highlight":"")+'"><span>'+r.name+'</span><div class="metric-track" aria-hidden="true"><div class="metric-fill" style="--value:'+Math.max(.6,r[metric]/max*100)+'%"></div></div><strong>'+format(r[metric])+'</strong></div>').join("");
const insights={
r1:"Reranking improves Recall@1 by 15.5 percentage points over dense search. It is the strongest top-result retriever in this recorded comparison.",
r5:"Hybrid union and Hybrid + RRF both reach 100.0% Recall@5 in this small benchmark. Adding the reranker reduces Recall@5 to 95.2%, despite improving Recall@1.",
mrr:"The reranker reaches 0.905 MRR, compared with 0.806 for dense search. Relevant evidence generally appears earlier in the ranked results.",
latency:"BM25 is fastest at 0.29 ms. Hybrid + RRF takes 16.48 ms; reranking takes 477.28 ms. The right configuration depends on the interaction’s latency budget."
};
$("#metric-insight").textContent=insights[metric];
}
const vtonSteps=[
{title:"1. Find the editable clothing region",copy:"Human parsing and DensePose guide the upper-body edit mask. Face, hair, and accessories are protected where segmentation identifies them correctly.",highlight:"#b7a0f0",label:"MASKING"},
{title:"2. Generate inside the clothing mask",copy:"CatVTON conditions generation on the person and garment images. A fixed seed and saved settings make visual comparisons more repeatable.",highlight:"#dbc4fa",label:"GENERATION"},
{title:"3. Restore the surrounding photo",copy:"The output is composited into the original-resolution image. Pixels outside the final edit mask are restored; mask errors still require inspection.",highlight:"#81dcc3",label:"COMPOSITING"}
];
function vtonExplorer(){
return '<div class="explore-heading"><div><h3>What changes — and what needs protection?</h3><p>Step through the implemented upper-body photo workflow.</p></div></div><div class="workflow-steps" role="group" aria-label="Try-on pipeline stage">'+["1 / Mask","2 / Generate","3 / Composite"].map((s,i)=>'<button data-vton-step="'+i+'" aria-pressed="'+(i===0)+'">'+s+'</button>').join("")+'</div><div id="vton-stage" class="workflow-demo" aria-live="polite"></div><p class="scope-note">The figure is a schematic of the editing boundary, not a real person or a generated try-on result. This portfolio does not run GPU inference. The separate 3D studio uses procedural garments and approximate cloth relaxation.</p><div class="source-links">'+projects.vton.links()+'</div>';
}
function setVtonStep(index){
const s=vtonSteps[index];
$$("[data-vton-step]").forEach(b=>b.setAttribute("aria-pressed",String(Number(b.dataset.vtonStep)===index)));
$("#vton-stage").innerHTML='<svg viewBox="0 0 130 180" aria-hidden="true"><rect x="2" y="2" width="126" height="176" rx="5" fill="#121d28" stroke="'+(index===2?"#81dcc3":"#3b4e64")+'"/><circle cx="65" cy="31" r="15" fill="#233a43" stroke="#81dcc3"/><path d="M47 53 Q65 45 83 53 L101 105 89 109 78 75 79 119 75 166 58 166 51 119 51 76 40 109 28 105Z" fill="#273140" stroke="#6d7f97"/><path d="M47 53 Q65 65 83 53 L93 90 82 94 78 78 79 111 51 111 51 79 46 94 36 90Z" fill="'+s.highlight+'" fill-opacity="'+(index===0?".2":".55")+'" stroke="'+s.highlight+'" '+(index===0?'stroke-dasharray="3 3"':"")+'/>'+(index===1?'<path d="M52 79 H78 M52 90 H78 M52 101 H78" stroke="#f5eafe" opacity=".6"/>':"")+'<text x="65" y="174" font-size="5" fill="#aec4d5" text-anchor="middle" font-family="monospace">'+s.label+'</text></svg><div><h4>'+s.title+'</h4><p>'+s.copy+'</p><p class="illustration">ILLUSTRATION · NO MODEL INFERENCE</p></div>';
}
const demoDetections=[{label:"Crack candidate",confidence:.91},{label:"Rail wear candidate",confidence:.76},{label:"Loose bolt candidate",confidence:.58},{label:"Surface defect candidate",confidence:.34}];
function itmsExplorer(){
return '<div class="explore-heading"><div><h3>What does a confidence threshold change?</h3><p>Filter a small, illustrative set of detection scores.</p></div></div><div class="threshold-controls"><label for="confidence">Minimum confidence <output id="threshold-value" for="confidence">0.50</output></label><input id="confidence" type="range" min="0" max="100" step="1" value="50"></div><div id="detection-results" aria-live="polite"><div id="demo-records" class="demo-records"></div><p id="demo-count" class="demo-count"></p></div><p class="explore-takeaway">Raising the threshold hides lower-confidence predictions. It can reduce false alarms while also missing real defects. Confidence does not measure defect severity.</p><details class="data-details"><summary>Earlier three-class experiment</summary><p style="margin-top:10px;color:#a8b8cb">Praveen’s earlier training log reports mAP@50 = 0.737 and mAP@50–95 = 0.629 across 982 images and 1,208 instances (crack, misalignment, obstruction). These are user-reported historical results from a different configuration, not scores for the repository’s 15-class model.</p></details><p class="scope-note">All four scores above are illustrative data created for this explainer. They are not model outputs, validation evidence, or live inspection results. There is no hardware or camera connection in this portfolio.</p><div class="source-links">'+projects.itms.links()+'</div>';
}
function updateConfidence(){
const threshold=Number($("#confidence").value)/100;
$("#threshold-value").value=threshold.toFixed(2);
const visible=demoDetections.filter(d=>d.confidence>=threshold);
$("#demo-records").innerHTML=visible.length?visible.map(d=>'<div class="demo-record"><span>'+d.label+'</span><b>'+d.confidence.toFixed(2)+'</b></div>').join(""):'<p class="demo-empty">No illustrative detections meet this threshold.</p>';
$("#demo-count").textContent=visible.length+" of 4 illustrative candidates retained";
}
const speechExamples=[
{input:"Hello, friend.",language:"English",translated:"Hello, friend.",gloss:["HELLO","FRIEND"],lookup:"For each gloss token, look for a matching lowercase word video. If it is missing, try the available letter clips."},
{input:"வணக்கம்",language:"Tamil",translated:"Hello.",gloss:["HELLO"],lookup:"Translation makes the downstream English-token lookup reusable across the supported input languages."},
{input:"नमस्ते",language:"Hindi",translated:"Hello.",gloss:["HELLO"],lookup:"Look for hello.mp4, then try the H · E · L · L · O letter clips if the word clip is unavailable."},
{input:"నమస్కారం",language:"Telugu",translated:"Hello.",gloss:["HELLO"],lookup:"Use the translated English token for clip lookup. Available files determine which clips can actually play."}
];
function speechExplorer(){
return '<div class="explore-heading"><div><h3>Follow a phrase through the system.</h3><p>A prepared walkthrough of recognition, gloss, and clip lookup.</p></div><select id="phrase-select" aria-label="Example phrase language">'+speechExamples.map((s,i)=>'<option value="'+i+'">'+s.language+' example</option>').join("")+'</select></div><div class="speech-sequence" id="speech-sequence" aria-live="polite"></div><p class="scope-note">Prepared examples, not live speech recognition or sign-language translation. No microphone is accessed. The gloss is deliberately simplified; full ISL grammar and comprehension require separate evaluation with sign-language users.</p><div class="source-links">'+projects.speech.links()+'</div>';
}
function setPhrase(){
const s=speechExamples[Number($("#phrase-select").value)];
$("#speech-sequence").innerHTML='<div class="speech-step"><span>01 / RECOGNIZE</span><p>'+s.input+'<small>'+s.language+' speech → recognized text</small></p></div><div class="speech-step"><span>02 / TRANSLATE</span><p>'+s.translated+'<small>English text for the NLP stage</small></p></div><div class="speech-step"><span>03 / GLOSS</span><p>'+s.gloss.map(t=>'<span class="gloss-token">'+t+'</span>').join("")+'<small>Token filtering and lemmatization; illustrative output</small></p></div><div class="speech-step"><span>04 / CLIP LOOKUP</span><p>'+s.lookup+'<small>Word video → letter fallback → skip missing letter clips</small></p></div>';
}

const cropCoverage={
 Banana:["Healthy","Sigatoka"],
 Chilli:["Healthy","Bacterial Spot","Leaf Curl"],
 Potato:["Healthy","Early Blight","Late Blight"],
 Rice:["Healthy","Bacterial Blight","Blast","Brownspot"],
 Tomato:["Healthy","Early Blight","Late Blight"]
};
function agroExplorer(){
 return '<div class="explore-heading"><div><h3>One detector. A specialist classifier.</h3><p>Explore the crop families and labels configured in the inference API.</p></div><select id="crop-select" aria-label="Crop family">'+Object.keys(cropCoverage).map(s=>'<option>'+s+'</option>').join("")+'</select></div><div class="explainer-flow"><div><span>01 / LOCATE</span><h4>YOLO candidate regions</h4><p>Find bounding boxes in the full image, then discard regions too small to classify.</p></div><div><span>02 / CLASSIFY</span><h4>EfficientNet-B0</h4><p>Resize each region to 224 × 224. Predict a crop/condition label from the 15-label output space.</p></div></div><div id="crop-coverage" class="coverage-panel" aria-live="polite"></div><p class="scope-note">This is the actual configured label inventory, not a diagnosis or live prediction. Detector misses never reach the classifier. The current API retains up to five results from the top-ranked crop family, so mixed-crop images have a limitation.</p><div class="source-links">'+projects.agro.links()+'</div>';
}
function updateCrop(){
 const crop=$("#crop-select").value;
 $("#crop-coverage").innerHTML='<span class="eyebrow">'+crop.toUpperCase()+' / '+cropCoverage[crop].length+' CONFIGURED LABELS</span><div class="coverage-tags">'+cropCoverage[crop].map(s=>'<span>'+s+'</span>').join("")+'</div><p>Each label combines the crop family with a condition. Healthy plants have explicit labels; no detection does not mean a plant is healthy.</p>';
}
const companyStages={
 collect:{title:"Collect with provenance",copy:"Read RSS/Atom sources, match watched companies, and keep original URLs, publication dates, collection dates, and source-health records.",evidence:"Recorded 7 September 2026 run: 161 sources checked; 101 readable and 60 unavailable. These are historical fetch outcomes."},
 group:{title:"Group repeated reporting",copy:"Normalize source URLs and conservatively group related stories while preserving the underlying articles. Repeated imports should not create duplicate records.",evidence:"Recorded release verification imported 52 unique records. A second sync inserted zero new records."},
 retrieve:{title:"Retrieve and show the source",copy:"Use BM25 to retrieve evidence. An optional model connection adds embeddings, rank fusion, translation, and generated answers; extractive search remains available without the key.",evidence:"Repository tests include retrieval, source handling, isolation, and sync. The 18-question fictional fixture is a smoke test, not real-world AI accuracy."}
};
function companyExplorer(){
 return '<div class="explore-heading"><div><h3>Useful context starts with dependable data.</h3><p>Follow the source-to-answer path and its recorded evidence.</p></div></div><div class="workflow-steps" role="group" aria-label="Company intelligence stage"><button data-company-stage="collect" aria-pressed="true">1 / Collect</button><button data-company-stage="group" aria-pressed="false">2 / Group</button><button data-company-stage="retrieve" aria-pressed="false">3 / Retrieve</button></div><div id="company-stage" class="coverage-panel" aria-live="polite"></div><p class="scope-note">This describes the implementation and a past verification run. It does not fetch live news or imply that every configured source is currently available.</p><div class="source-links">'+projects.company.links()+'</div>';
}
function setCompanyStage(key){
 const s=companyStages[key];
 $$("[data-company-stage]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.companyStage===key)));
 $("#company-stage").innerHTML='<h4>'+s.title+'</h4><p>'+s.copy+'</p><div class="stage-evidence"><span class="eyebrow">RECORDED EVIDENCE</span><p>'+s.evidence+'</p></div>';
}

const automationWorkflows={
 booking:{title:"Hospital appointment platform",copy:"Client-facing hospital management and appointment booking, with real-time slot availability and administrative controls.",steps:[["Patient booking","Help patients find available appointment slots and make a booking."],["Admin coordination","Provide staff with controls to manage the appointment workflow."],["Connected experience","Bring booking and management into one client-facing platform."]]},
 telegram:{title:"Telegram patient interactions",copy:"A Telegram bot supports automated patient interactions and appointment scheduling alongside the booking platform.",steps:[["Patient interaction","Accept appointment-related interactions through Telegram."],["Scheduling workflow","Connect the bot experience to the appointment process."],["Automation outcome","Reduce the need to coordinate every interaction manually."]]},
 n8n:{title:"n8n client workflow automations",copy:"Designed and deployed workflows across multiple client projects, integrating third-party services to remove repetitive manual tasks.",steps:[["Identify repetitive work","Define the client task and the services it touches."],["Connect services","Use n8n workflows to coordinate third-party integrations."],["Deliver the workflow","Deploy automation as part of the client application delivery."]]}
};
function automationExplorer(){
return '<div class="explore-heading"><div><h3>Automation connected to real client work.</h3><p>Marobust Tech and Solutions · Dec 2025–Jan 2026</p></div><select id="automation-select" aria-label="Automation workstream"><option value="n8n">n8n workflows</option><option value="booking">Hospital booking</option><option value="telegram">Telegram bot</option></select></div><div id="automation-workflow" class="role-journey" aria-live="polite"></div><p class="scope-note">A walkthrough of the work described in my résumé, not a live client integration. No client data, workflow credentials, or simulated performance figures are included.</p><div class="source-links">'+projects.automation.links()+'</div>';
}
function setAutomationWorkflow(){
const s=automationWorkflows[$("#automation-select").value];
$("#automation-workflow").innerHTML='<h4>'+s.title+'</h4><p class="automation-intro">'+s.copy+'</p>'+s.steps.map(([title,copy],i)=>'<div><span>0'+(i+1)+'</span><div><h5>'+title+'</h5><p>'+copy+'</p></div></div>').join("");
}

const wasteRoles={
 Volunteer:{title:"Find a way to contribute",steps:[["Discover opportunities","Browse opportunities and submit a participation application."],["Coordinate a pickup","Create or follow a pickup workflow in the shared platform."],["Stay in touch","Use messaging and notifications to coordinate participation."]]},
 NGO:{title:"Organize community work",steps:[["Create an opportunity","Describe the activity and invite participation."],["Manage participation","Review applications and coordinate opportunities and pickups."],["Communicate","Use stored messages and real-time delivery/read events."]]},
 Admin:{title:"Oversee platform activity",steps:[["Manage accounts","Use administrative account and role workflows."],["Review operations","Inspect participation and pickup information."],["Explore reporting","Use the implemented analytics and report routes and pages."]]}
};
function wasteExplorer(){
 return '<div class="explore-heading"><div><h3>One platform, different responsibilities.</h3><p>Explore the intended user journeys supported by the application.</p></div><select id="waste-role" aria-label="WasteZero user role">'+Object.keys(wasteRoles).map(s=>'<option>'+s+'</option>').join("")+'</select></div><div id="waste-journey" class="role-journey" aria-live="polite"></div><p class="scope-note">These are implementation-based workflow descriptions, not an active account demo. Database-backed execution needs MongoDB and the API. Role authorization and multi-user flows were not independently audited in this portfolio review.</p><div class="source-links">'+projects.waste.links()+'</div>';
}
function setWasteRole(){
 const s=wasteRoles[$("#waste-role").value];
 $("#waste-journey").innerHTML='<h4>'+s.title+'</h4>'+s.steps.map(([title,copy],i)=>'<div><span>0'+(i+1)+'</span><div><h5>'+title+'</h5><p>'+copy+'</p></div></div>').join("");
}

function selectTab(name,focus=false){
$$(".dialog-tabs button").forEach(b=>{const selected=b.dataset.tab===name;b.setAttribute("aria-selected",String(selected));b.tabIndex=selected?0:-1;if(selected&&focus)b.focus();});
$$(".tab-panel").forEach(p=>p.hidden=p.dataset.panel!==name);
}
function renderProject(id){
currentProject=id;
const p=projects[id];
$("#dialog-index").textContent="PROJECT / "+p.index+" — SELECTED WORK";
$("#dialog-position").textContent=p.index+" / "+String(ids.length).padStart(2,"0");
$("#dialog-content").innerHTML='<div class="dialog-heading"><h2 id="dialog-title">'+p.title+'</h2><p>'+p.subtitle+'</p><span class="stage">'+p.status+'</span></div><div class="dialog-tabs" role="tablist" aria-label="Project details"><button id="overview-tab" role="tab" aria-selected="true" aria-controls="overview-panel" data-tab="overview">Case study</button><button id="explore-tab" role="tab" aria-selected="false" aria-controls="explore-panel" tabindex="-1" data-tab="explore">'+p.exploreLabel+'</button></div><div class="tab-panel" id="overview-panel" role="tabpanel" aria-labelledby="overview-tab" data-panel="overview" tabindex="0">'+overview(p)+'</div><div class="tab-panel" id="explore-panel" role="tabpanel" aria-labelledby="explore-tab" data-panel="explore" hidden tabindex="0">'+({legal:legalExplorer,vton:vtonExplorer,itms:itmsExplorer,speech:speechExplorer,agro:agroExplorer,company:companyExplorer,automation:automationExplorer,waste:wasteExplorer}[id]())+'</div>';
$$(".dialog-tabs button").forEach(b=>{
b.addEventListener("click",()=>selectTab(b.dataset.tab));
b.addEventListener("keydown",e=>{
if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){
e.preventDefault();
selectTab(e.key==="Home"?"overview":e.key==="End"?"explore":b.dataset.tab==="overview"?"explore":"overview",true);
}
});
});
if(id==="legal"){$("#metric-select").addEventListener("change",updateMetric);updateMetric();}
if(id==="vton"){$$("[data-vton-step]").forEach(b=>b.addEventListener("click",()=>setVtonStep(Number(b.dataset.vtonStep))));setVtonStep(0);}
if(id==="itms"){$("#confidence").addEventListener("input",updateConfidence);updateConfidence();}
if(id==="speech"){$("#phrase-select").addEventListener("change",setPhrase);setPhrase();}

if(id==="agro"){$("#crop-select").addEventListener("change",updateCrop);updateCrop();}
if(id==="company"){$$("[data-company-stage]").forEach(b=>b.addEventListener("click",()=>setCompanyStage(b.dataset.companyStage)));setCompanyStage("collect");}
if(id==="automation"){$("#automation-select").addEventListener("change",setAutomationWorkflow);setAutomationWorkflow();}
if(id==="waste"){$("#waste-role").addEventListener("change",setWasteRole);setWasteRole();}

dialog.scrollTop=0;
}
function openProject(id,opener){
if(!projects[id])return;
trigger=opener||$("#project-"+id+" .open-project");
renderProject(id);
if(!dialog.open)dialog.showModal();
document.body.classList.add("modal-open");
$(".close-dialog").focus({preventScroll:true});
}
$$(".open-project").forEach(b=>b.addEventListener("click",()=>openProject(b.dataset.project,b)));
$(".close-dialog").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener("close",()=>{document.body.classList.remove("modal-open");if(trigger&&!trigger.closest("[hidden]"))trigger.focus({preventScroll:true});});
function adjacent(delta){const i=(ids.indexOf(currentProject)+delta+ids.length)%ids.length;renderProject(ids[i]);$(".close-dialog").focus({preventScroll:true});}
$("#next-project").addEventListener("click",()=>adjacent(1));
$("#previous-project").addEventListener("click",()=>adjacent(-1));
function revealHash(){
const id=location.hash.replace("#project-","");
if(!projects[id])return;
const card=$("#project-"+id);
if(card.hidden)filterProjects("all");
requestAnimationFrame(()=>{card.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth",block:"start"});card.classList.add("jump-highlight");setTimeout(()=>card.classList.remove("jump-highlight"),1300);});
}
$$("a[href^=\"#project-\"]").forEach(a=>a.addEventListener("click",()=>{const card=$(a.getAttribute("href"));if(card?.hidden)filterProjects("all");if(location.hash===a.getAttribute("href"))revealHash();}));
window.addEventListener("hashchange",revealHash);
if(location.hash)revealHash();
$("#copy-email").addEventListener("click",async()=>{
const email="praveenrajb1618@gmail.com";
try{
if(!navigator.clipboard)throw new Error("Clipboard unavailable");
await navigator.clipboard.writeText(email);
$("#copy-status").textContent="Email copied";
}catch(e){$("#copy-status").textContent=email;$("#copy-status").style.userSelect="all";}
});
document.documentElement.classList.add("js-ready");
})();