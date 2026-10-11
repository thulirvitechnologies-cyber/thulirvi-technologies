const menuToggle=document.getElementById('menuToggle');
const navMenu=document.getElementById('navMenu');
menuToggle.addEventListener('click',()=>{const open=navMenu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'✕':'☰';});
navMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navMenu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();
let activeFilter='all';
const search=document.getElementById('courseSearch');
const cards=[...document.querySelectorAll('.course-card')];
const empty=document.getElementById('emptyState');
function filterCourses(){const q=search.value.trim().toLowerCase();let shown=0;cards.forEach(card=>{const matchCat=activeFilter==='all'||card.dataset.category===activeFilter;const matchText=(card.dataset.name+' '+card.innerText).toLowerCase().includes(q);const show=matchCat&&matchText;card.hidden=!show;if(show)shown++;});empty.hidden=shown!==0;}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');activeFilter=btn.dataset.filter;filterCourses();}));
search.addEventListener('input',filterCourses);

