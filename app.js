
const toggle = document.querySelector('[data-toggle]');
toggle?.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', document.documentElement.classList.contains('light')?'light':'dark');
});
const saved = localStorage.getItem('theme'); if(saved==='light'){document.documentElement.classList.add('light')}

const defconState = { level: 3 };
function setDEFCON(lvl){
  defconState.level = Math.max(1, Math.min(5, lvl));
  document.querySelectorAll('[data-defcon]').forEach(el=>{
    el.setAttribute('data-defcon', String(defconState.level));
    const tag = el.querySelector('.tag strong');
    if(tag) tag.textContent = 'DEFCON ' + defconState.level;
  });
}
window.setDEFCON = setDEFCON;

document.querySelectorAll('[data-module]').forEach(tile=>{
  tile.addEventListener('click', ()=>{
    const m = tile.getAttribute('data-module');
    const out = document.querySelector('#module-output');
    if(!out) return;
    out.innerHTML = `<div class="notice"><strong>Module loaded:</strong> ${m}. Trust Score sync ready. (Simulated)</div>`;
  });
});

function shutdownRegion(label='Region'){
  const out = document.querySelector('#globe-output');
  if(!out) return;
  out.innerHTML = `<div class="notice"><strong>Action:</strong> Geo-fence applied to <span class="kbd">${label}</span>. Routes throttled + identity gates raised. (Simulated)</div>`;
}
window.shutdownRegion = shutdownRegion;
