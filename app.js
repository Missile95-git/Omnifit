// ── WORKOUT DATA ──────────────────────────────────────────────────────────────
const ROUTINE = {
  push: {
    label: 'Push',
    subtitle: 'Chest · Shoulders · Triceps',
    color: '#e8ff47',
    exercises: [
      { id:'bp',  name:'DB Bench Press',               equip:'Dumbbells + flat bench',    sets:4, reps:'8–10',  knee:'safe', note:'Use 10–12.5kg DBs. Press both up together, lower slow. Great chest builder.',                                                                                              video:'https://www.youtube.com/watch?v=VmB1G1K7v94' },
      { id:'cp',  name:'Chest Press Station',          equip:'Multi-station machine',     sets:3, reps:'10–12', knee:'safe', note:'Use pin number — note it each week to track progress.',                                                                                                                    video:'https://www.youtube.com/watch?v=xUm0BiZCX_I' },
      { id:'pf',  name:'Pec Fly Station',              equip:'Multi-station machine',     sets:3, reps:'12–15', knee:'safe', note:'Slow and controlled on the way back — feel the stretch.',                                                                                                                  video:'https://www.youtube.com/watch?v=Iwe6AmxVf7o' },
      { id:'ohp', name:'DB Shoulder Press',            equip:'Dumbbells + flat bench',    sets:3, reps:'8–10',  knee:'safe', note:'Use 7.5–10kg DBs. Sit on bench, press overhead. Keep core tight.',                                                                                                        video:'https://www.youtube.com/watch?v=qEwKCR5JCog' },
      { id:'dlr', name:'DB Lateral Raise',             equip:'Hex dumbbells',             sets:3, reps:'12–15', knee:'safe', note:'Use 5kg DBs. Slow raise to shoulder height, slow lower.',                                                                                                                  video:'https://www.youtube.com/watch?v=3VcKaXpzqRo' },
      { id:'tpu', name:'Tricep Pushdown (Low pulley)', equip:'Multi-station low pulley',  sets:3, reps:'10–12', knee:'safe', note:'Attach rope or straight bar. Elbows locked at sides.',                                                                                                                     video:'https://www.youtube.com/watch?v=2-LAMcpzODU' },
    ]
  },
  pull: {
    label: 'Pull',
    subtitle: 'Back · Biceps · Rear Delts',
    color: '#47c8ff',
    exercises: [
      { id:'pu',  name:'Pull-Ups',                     equip:'Pull-up bar',               sets:4, reps:'Max',   knee:'safe', note:"If you can't do full ones yet, jump up and lower slowly — that builds strength fast.",                                                                                      video:'https://www.youtube.com/watch?v=eGo4IYlbE5g' },
      { id:'lpd', name:'Lat Pulldown Station',         equip:'Multi-station machine',     sets:4, reps:'8–10',  knee:'safe', note:'Lean back slightly, pull bar to upper chest. Squeeze lats at bottom.',                                                                                                     video:'https://www.youtube.com/watch?v=CAwf7n6Luuc' },
      { id:'row', name:'Seated Row (Low Pulley)',      equip:'Multi-station low pulley',  sets:4, reps:'8–10',  knee:'safe', note:'Keep back straight, pull to belly button, squeeze shoulder blades.',                                                                                                       video:'https://www.youtube.com/watch?v=GZbfZ033f74' },
      { id:'dbr', name:'DB Bent-Over Row',             equip:'Dumbbells + flat bench',    sets:3, reps:'10–12', knee:'safe', note:'Use 10–12.5kg. Support with one knee on bench, row with other arm.',                                                                                                       video:'https://www.youtube.com/watch?v=pYcpY20QaE8' },
      { id:'cur', name:'DB Bicep Curl',                equip:'Hex dumbbells',             sets:3, reps:'10–12', knee:'safe', note:'Use 7.5–10kg. Alternate arms, full range of motion, slow on the way down.',                                                                                                video:'https://www.youtube.com/watch?v=ykJmrZ5v0Oo' },
      { id:'hc',  name:'Hammer Curl',                  equip:'Hex dumbbells',             sets:2, reps:'12',    knee:'safe', note:'Use 7.5kg. Neutral grip (thumbs up). Builds forearm and bicep thickness.',                                                                                                 video:'https://www.youtube.com/watch?v=zC3nLlEvin4' },
    ]
  },
  legs: {
    label: 'Legs',
    subtitle: 'Quads · Hamstrings · Calves',
    color: '#ff6b47',
    kneeDay: true,
    exercises: [
      { id:'lp',  name:'Leg Press Station',            equip:'Multi-station machine',     sets:4, reps:'12',    knee:'warn', note:'⚠ LEFT KNEE: Stop at 90° — do not go below parallel. No pain, no grinding.',                                                                                               video:'https://www.youtube.com/watch?v=IZxyjW7MPJQ' },
      { id:'le',  name:'Leg Extension Station',        equip:'Multi-station machine',     sets:3, reps:'12–15', knee:'warn', note:'⚠ LEFT KNEE: Light pin only. Full extension is fine, slow controlled return.',                                                                                             video:'https://www.youtube.com/watch?v=YyvSfVjQeL0' },
      { id:'lc',  name:'Lying DB Leg Curl',            equip:'One 5kg dumbbell',          sets:3, reps:'12–15', knee:'safe', note:'Lie face down on bench. Hold 5kg DB between feet. Curl heels to glutes. Slow and controlled.',                                                                             video:'https://www.youtube.com/watch?v=ELOCsoDSmrg' },
      { id:'rdl', name:'DB Romanian Deadlift (RDL)',   equip:'Dumbbells',                 sets:3, reps:'10',    knee:'safe', note:'Use 12.5kg DBs each hand. Hinge at hip, soft bend in knee, lower DBs along legs. Great hamstring builder with no knee stress.',                                            video:'https://www.youtube.com/watch?v=7j-2todFRYg' },
      { id:'cr',  name:'Single Leg Calf Raise',         equip:'Pull-up bar + dumbbells',   sets:4, reps:'15–20', knee:'safe', note:'Hold pull-up bar or wall for balance. Hold 10kg DB in one hand. Rise on toes fully, slow lower. Do all reps one leg then switch. Way more effective than seated.',        video:'https://www.youtube.com/watch?v=jwCIBUMG1ZQ' },
      { id:'bss', name:'DB Bulgarian Split Squat',     equip:'Flat bench + dumbbells',    sets:3, reps:'10–12', knee:'warn', note:'⚠ LEFT KNEE: Rear foot on bench, front foot forward. Use 5–7.5kg DBs. Lower slowly, keep front knee behind toes. Shallow depth is fine — do not push through pain.',     video:'https://www.youtube.com/watch?v=2C-uNgKwPLE' },
    ]
  }
};

const DAY_LABELS = ['Mon','Tue','Wed','Thu','Fri','Sat'];

// ── STATE ──────────────────────────────────────────────────────────────────────
let state = {
  user: null,
  screen: 'login',
  routineTab: 'push',
  logs: {},
  weights: [],
  openCards: {},
};

function save() {
  localStorage.setItem('omnifit_state', JSON.stringify({
    user: state.user,
    logs: state.logs,
    weights: state.weights,
  }));
}

function load() {
  const d = localStorage.getItem('omnifit_state');
  if (!d) return;
  const p = JSON.parse(d);
  state.user = p.user;
  state.logs = p.logs || {};
  state.weights = p.weights || [];
}

function todayKey() {
  return new Date().toISOString().slice(0,10);
}

function getLog(exId) {
  const key = todayKey();
  if (!state.logs[key]) state.logs[key] = {};
  const dayKey = Object.keys(ROUTINE).find(dk => ROUTINE[dk].exercises.find(e => e.id === exId));
  const ex = dayKey ? ROUTINE[dayKey].exercises.find(e => e.id === exId) : null;
  if (!state.logs[key][exId]) {
    const sets = ex ? ex.sets : 3;
    state.logs[key][exId] = Array.from({length: sets}, () => ({pin:'', reps:'', done:false}));
  }
  return state.logs[key][exId];
}

// ── ROUTING ────────────────────────────────────────────────────────────────────
function navigate(screen) {
  state.screen = screen;
  render();
}

// ── RENDER ─────────────────────────────────────────────────────────────────────
function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';
  if      (state.screen === 'login')    app.appendChild(renderLogin());
  else if (state.screen === 'home')     app.appendChild(renderHome());
  else if (state.screen === 'routine')  app.appendChild(renderRoutine());
  else if (state.screen === 'progress') app.appendChild(renderProgress());
  else if (state.screen === 'profile')  app.appendChild(renderProfile());
}

// ── LOGIN ──────────────────────────────────────────────────────────────────────
function renderLogin() {
  const el = frag(`
    <div class="screen login-screen">
      <div class="login-bg">
        <div class="login-top">
          <div class="login-logo-wrap">
            <svg width="62" height="62" viewBox="0 0 90 90">
              <path d="M55 9 A37 37 0 1 1 35 9" fill="none" stroke="#e8ff47" stroke-width="5.5" stroke-linecap="round"/>
              <line x1="45" y1="8" x2="45" y2="2" stroke="#e8ff47" stroke-width="2" stroke-linecap="round"/>
              <line x1="45" y1="82" x2="45" y2="88" stroke="#e8ff47" stroke-width="2" stroke-linecap="round"/>
              <line x1="8" y1="45" x2="2" y2="45" stroke="#e8ff47" stroke-width="2" stroke-linecap="round"/>
              <line x1="82" y1="45" x2="88" y2="45" stroke="#e8ff47" stroke-width="2" stroke-linecap="round"/>
              <circle cx="45" cy="45" r="5" fill="#e8ff47"/>
              <line x1="35" y1="9" x2="55" y2="9" stroke="#141414" stroke-width="6"/>
              <line x1="38" y1="6" x2="38" y2="12" stroke="#e8ff47" stroke-width="2.5" stroke-linecap="round"/>
              <line x1="52" y1="6" x2="52" y2="12" stroke="#e8ff47" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="login-eyebrow">OMNIFIT</div>
          <h1 class="login-title">TRAIN<br><span class="accent">HARDER.</span><br>BULK UP.</h1>
          <p class="login-sub">Built for your gear. Built for your goals.</p>
        </div>
        <div class="login-form">
          <div class="field-group">
            <label class="field-label">NAME</label>
            <input class="field-input" id="inp-name" type="text" placeholder="What do we call you?" autocomplete="off" />
          </div>
          <div class="field-group">
            <label class="field-label">PIN</label>
            <input class="field-input" id="inp-pin" type="password" placeholder="Set a 4-digit PIN" maxlength="4" inputmode="numeric" />
          </div>
          <button class="btn-primary" id="btn-login">LET'S GO →</button>
        </div>
      </div>
    </div>
  `);
  el.querySelector('#btn-login').onclick = doLogin;
  el.querySelector('#inp-pin').addEventListener('keydown', e => { if(e.key==='Enter') doLogin(); });
  return el;
}

function doLogin() {
  const name = document.getElementById('inp-name').value.trim();
  const pin  = document.getElementById('inp-pin').value.trim();
  if (!name) { shake('inp-name'); return; }
  if (!pin || pin.length < 4) { shake('inp-pin'); return; }
  state.user = { name, pin, initial: name[0].toUpperCase() };
  save();
  navigate('home');
}

function shake(id) {
  const el = document.getElementById(id);
  el.classList.add('shake');
  setTimeout(() => el.classList.remove('shake'), 500);
}

// ── HOME ───────────────────────────────────────────────────────────────────────
function renderHome() {
  const dayIdx = new Date().getDay();
  const gymDay = ['push','push','pull','legs','push','pull','legs'][dayIdx];
  const daySchedule = { push:'Mon & Thu', pull:'Tue & Fri', legs:'Wed & Sat' };
  const dayData = ROUTINE[gymDay];
  const todayDone = countDone(gymDay);
  const totalSets = dayData.exercises.reduce((a,e) => a+e.sets, 0);
  const pct = totalSets ? Math.round((todayDone/totalSets)*100) : 0;

  const weekHtml = DAY_LABELS.map((d,i) => {
    const dt = new Date(); dt.setDate(dt.getDate() - dt.getDay() + i + 1);
    const k = dt.toISOString().slice(0,10);
    const isToday = i === (new Date().getDay()-1);
    const hasSess = state.logs[k] && Object.keys(state.logs[k]).length > 0;
    return `<div class="week-pip ${hasSess?'done':''} ${isToday?'today':''}">${d}</div>`;
  }).join('');

  const exRows = dayData.exercises.map((ex,i) => {
    const log = getLog(ex.id);
    const done = log.filter(s=>s.done).length;
    return `
      <div class="home-ex-row" data-ex="${ex.id}">
        <div class="ex-num ${done===ex.sets?'done':''}">${done===ex.sets?'✓':(i+1)}</div>
        <div class="ex-info">
          <div class="ex-name">${ex.name}</div>
          <div class="ex-meta">${ex.sets} sets × ${ex.reps} · ${ex.equip}</div>
        </div>
        ${ex.knee==='warn'?'<span class="knee-tag">Knee ⚠</span>':''}
      </div>`;
  }).join('');

  const el = frag(`
    <div class="screen">
      <div class="home-hero">
        <div class="home-header">
          <div>
            <div class="greeting">Good ${timeOfDay()} 💪</div>
            <div class="username">${state.user.name}</div>
          </div>
          <div class="avatar" onclick="navigate('profile')">${state.user.initial}</div>
        </div>
        <div class="progress-ring-wrap">
          <svg class="progress-ring" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="34" class="ring-bg"/>
            <circle cx="40" cy="40" r="34" class="ring-fill" style="stroke-dasharray:${pct*2.136} 213.6"/>
          </svg>
          <div class="ring-label">
            <div class="ring-pct">${pct}%</div>
            <div class="ring-sub">done</div>
          </div>
        </div>
      </div>

      <div class="stat-row">
        <div class="stat-card"><div class="stat-val">${gymDay.toUpperCase()}</div><div class="stat-label">Today</div></div>
        <div class="stat-card"><div class="stat-val">${getStreak()}</div><div class="stat-label">Streak 🔥</div></div>
        <div class="stat-card"><div class="stat-val">${getMonthSessions()}</div><div class="stat-label">Sessions</div></div>
      </div>

      ${dayData.kneeDay ? `<div class="knee-banner"><span class="knee-icon">⚠</span><div><strong>Left knee day</strong> — modified exercises active. Stop at 90° on leg press.</div></div>` : ''}

      <div class="section-block">
        <div class="section-head">
          <span class="section-label">TODAY — ${dayData.label.toUpperCase()} DAY</span>
          <span class="section-sub">${dayData.subtitle} · ${daySchedule[gymDay]}</span>
        </div>
        <div class="today-list">${exRows}</div>
        <button class="btn-primary btn-session" id="btn-start">START SESSION →</button>
      </div>

      <div class="section-block">
        <div class="section-label">THIS WEEK</div>
        <div class="week-row">${weekHtml}</div>
      </div>

      <div style="height:80px"></div>
      ${renderNav('home')}
    </div>
  `);
  el.querySelector('#btn-start').onclick = () => { state.routineTab = gymDay; navigate('routine'); };
  el.querySelectorAll('.home-ex-row').forEach(r => {
    r.onclick = () => { state.routineTab = gymDay; navigate('routine'); };
  });
  return el;
}

function timeOfDay() {
  const h = new Date().getHours();
  if (h < 12) return 'morning';
  if (h < 17) return 'afternoon';
  return 'evening';
}

function countDone(dayKey) {
  const key = todayKey();
  if (!state.logs[key]) return 0;
  let done = 0;
  ROUTINE[dayKey].exercises.forEach(ex => {
    const log = state.logs[key][ex.id];
    if (log) done += log.filter(s=>s.done).length;
  });
  return done;
}

function getStreak() {
  let streak = 0;
  const d = new Date();
  for (let i = 0; i < 30; i++) {
    const k = d.toISOString().slice(0,10);
    if (state.logs[k] && Object.keys(state.logs[k]).length > 0) streak++;
    else if (i > 0) break;
    d.setDate(d.getDate()-1);
  }
  return streak;
}

function getMonthSessions() {
  const month = new Date().toISOString().slice(0,7);
  return Object.keys(state.logs).filter(k => k.startsWith(month) && Object.keys(state.logs[k]).length > 0).length;
}

// ── ROUTINE ────────────────────────────────────────────────────────────────────
function renderRoutine() {
  const tabs = Object.entries(ROUTINE).map(([k,v]) => `
    <div class="day-tab ${state.routineTab===k?'active':''}" data-day="${k}" style="${state.routineTab===k?'border-color:'+v.color+';color:'+v.color:''}">
      ${v.label}
    </div>`).join('');

  const day = ROUTINE[state.routineTab];
  const kneeNote = day.kneeDay ? `<div class="knee-banner"><span class="knee-icon">⚠</span><div><strong>Left knee protocol active</strong> — watch notes on each exercise carefully.</div></div>` : '';

  const cards = day.exercises.map(ex => {
    const log = getLog(ex.id);
    const open = state.openCards[ex.id];
    const doneSets = log.filter(s=>s.done).length;
    const setRows = log.map((s,i) => `
      <div class="set-row">
        <span class="set-lbl">Set ${i+1}</span>
        <input class="set-inp pin-inp" data-ex="${ex.id}" data-i="${i}" data-field="pin" value="${s.pin}" placeholder="Pin/DB" />
        <span class="set-x">×</span>
        <input class="set-inp rep-inp" data-ex="${ex.id}" data-i="${i}" data-field="reps" value="${s.reps}" placeholder="${ex.reps}" inputmode="numeric"/>
        <div class="set-check ${s.done?'done':''}" data-ex="${ex.id}" data-i="${i}">✓</div>
      </div>`).join('');

    const noteHtml = ex.note ? `<div class="ex-note ${ex.knee==='warn'?'warn':''}">${ex.note}</div>` : '';
    const videoBtn = ex.video ? `<a class="video-btn" href="${ex.video}" target="_blank" rel="noopener">▶ Watch Tutorial</a>` : '';

    return `
      <div class="routine-card ${open?'open':''}">
        <div class="card-header" data-ex="${ex.id}">
          <div class="card-left">
            <div class="card-num ${doneSets===ex.sets?'done':''}">${doneSets===ex.sets?'✓':day.exercises.indexOf(ex)+1}</div>
            <div>
              <div class="card-title">${ex.name}</div>
              <div class="card-meta">${ex.sets} sets · ${ex.reps} reps · ${ex.equip}</div>
            </div>
          </div>
          <div class="card-chevron ${open?'flip':''}">›</div>
        </div>
        ${open ? `<div class="card-body">${noteHtml}${videoBtn}${setRows}</div>` : ''}
      </div>`;
  }).join('');

  const el = frag(`
    <div class="screen">
      <div class="page-header">
        <div class="page-title">${day.label} Day</div>
        <div class="page-sub">${day.subtitle}</div>
      </div>
      <div class="day-tabs">${tabs}</div>
      <div class="routine-list">
        ${kneeNote}
        ${cards}
      </div>
      <div style="height:80px"></div>
      ${renderNav('routine')}
    </div>
  `);

  el.querySelectorAll('.day-tab').forEach(t => {
    t.onclick = () => { state.routineTab = t.dataset.day; state.openCards = {}; render(); };
  });
  el.querySelectorAll('.card-header').forEach(h => {
    h.onclick = () => { state.openCards[h.dataset.ex] = !state.openCards[h.dataset.ex]; render(); };
  });
  el.querySelectorAll('.set-inp').forEach(inp => {
    inp.onclick = e => e.stopPropagation();
    inp.oninput = () => { getLog(inp.dataset.ex)[inp.dataset.i][inp.dataset.field] = inp.value; save(); };
  });
  el.querySelectorAll('.set-check').forEach(btn => {
    btn.onclick = e => {
      e.stopPropagation();
      const log = getLog(btn.dataset.ex);
      log[btn.dataset.i].done = !log[btn.dataset.i].done;
      save();
      btn.classList.toggle('done');
    };
  });
  return el;
}

// ── PROGRESS ───────────────────────────────────────────────────────────────────
function renderProgress() {
  const weightRows = state.weights.slice(-7).reverse().map(w =>
    `<div class="weight-row"><span class="weight-date">${w.date}</span><span class="weight-val">${w.kg} kg</span></div>`
  ).join('') || '<div class="empty-note">No entries yet — log your weight after each session.</div>';

  const totalSessions = Object.values(state.logs).filter(l => Object.keys(l).length > 0).length;
  const firstWeight = state.weights[0]?.kg;
  const lastWeight = state.weights[state.weights.length-1]?.kg;
  const gained = firstWeight && lastWeight ? (lastWeight - firstWeight).toFixed(1) : '—';

  const el = frag(`
    <div class="screen">
      <div class="page-header">
        <div class="page-title">Progress</div>
        <div class="page-sub">Your bulk journey</div>
      </div>
      <div class="prog-grid">
        <div class="prog-card"><div class="prog-val">${totalSessions}</div><div class="prog-label">Total sessions</div></div>
        <div class="prog-card"><div class="prog-val">${getStreak()}🔥</div><div class="prog-label">Current streak</div></div>
        <div class="prog-card"><div class="prog-val">${lastWeight ? lastWeight+'kg' : '—'}</div><div class="prog-label">Current weight</div></div>
        <div class="prog-card"><div class="prog-val">${gained !== '—' ? (gained > 0 ? '+' : '')+gained+'kg' : '—'}</div><div class="prog-label">Total gained</div></div>
      </div>
      <div class="section-block">
        <div class="section-label">LOG WEIGHT</div>
        <div class="weight-input-row">
          <input class="field-input" id="inp-weight" type="number" step="0.1" placeholder="e.g. 58.5" inputmode="decimal" />
          <button class="btn-log" id="btn-log-weight">LOG</button>
        </div>
      </div>
      <div class="section-block">
        <div class="section-label">WEIGHT HISTORY</div>
        <div class="weight-list">${weightRows}</div>
      </div>
      <div style="height:80px"></div>
      ${renderNav('progress')}
    </div>
  `);

  el.querySelector('#btn-log-weight').onclick = () => {
    const val = parseFloat(document.getElementById('inp-weight').value);
    if (!val || val < 30 || val > 200) { shake('inp-weight'); return; }
    const today = new Date().toLocaleDateString('en-IN', {day:'numeric', month:'short'});
    state.weights.push({ date: today, kg: val });
    save();
    render();
  };
  return el;
}

// ── PROFILE ────────────────────────────────────────────────────────────────────
function renderProfile() {
  const el = frag(`
    <div class="screen">
      <div class="page-header">
        <div class="page-title">Profile</div>
      </div>
      <div class="profile-hero">
        <div class="avatar avatar-lg">${state.user.initial}</div>
        <div class="profile-name">${state.user.name}</div>
        <div class="profile-sub">Bulk phase · PPL 6-day split</div>
      </div>
      <div class="info-list">
        <div class="info-row"><span class="info-label">Goal</span><span class="info-val accent">Gain muscle / bulk</span></div>
        <div class="info-row"><span class="info-label">Program</span><span class="info-val">Push Pull Legs × 2</span></div>
        <div class="info-row"><span class="info-label">Days/week</span><span class="info-val">6</span></div>
        <div class="info-row"><span class="info-label">Level</span><span class="info-val">Beginner</span></div>
        <div class="info-row"><span class="info-label">Left knee</span><span class="info-val warn">Modified exercises</span></div>
        <div class="info-row"><span class="info-label">Dumbbells</span><span class="info-val">2.5 · 5 · 7.5 · 10 · 12.5 kg</span></div>
      </div>
      <div class="section-block">
        <button class="btn-logout" id="btn-logout">LOG OUT</button>
      </div>
      <div style="height:80px"></div>
      ${renderNav('profile')}
    </div>
  `);
  el.querySelector('#btn-logout').onclick = () => { state.user = null; save(); navigate('login'); };
  return el;
}

// ── NAV ────────────────────────────────────────────────────────────────────────
function renderNav(active) {
  const items = [
    { id:'home',     icon:'⌂',  label:'Home' },
    { id:'routine',  icon:'◈',  label:'Routine' },
    { id:'progress', icon:'▲',  label:'Progress' },
    { id:'profile',  icon:'◉',  label:'Profile' },
  ];
  return `
    <nav class="bottom-nav">
      ${items.map(it => `
        <div class="nav-item ${active===it.id?'active':''}" data-screen="${it.id}">
          <span class="nav-icon">${it.icon}</span>
          <span class="nav-label">${it.label}</span>
        </div>`).join('')}
    </nav>`;
}

document.addEventListener('click', e => {
  const item = e.target.closest('.nav-item');
  if (item) navigate(item.dataset.screen);
});

// ── UTILS ──────────────────────────────────────────────────────────────────────
function frag(html) {
  const t = document.createElement('div');
  t.innerHTML = html.trim();
  return t.firstChild;
}

// ── BOOT ───────────────────────────────────────────────────────────────────────
load();
if (state.user) navigate('home');
else navigate('login');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}
