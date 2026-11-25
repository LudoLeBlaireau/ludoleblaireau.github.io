const screenMenu = document.querySelector('#accueil');
if (screenMenu) {
  const choices = [...document.querySelectorAll('.choice')];
  const posters = [...document.querySelectorAll('.feature')];
  let current = 0;
  let poster = 0;
  function select(index) {
    current = (index + choices.length) % choices.length;
    choices.forEach((choice, i) => choice.classList.toggle('active', i === current));
  }
  function cycle(step) {
    screenMenu.style.setProperty('--slide-offset', step > 0 ? '18px' : '-18px');
    poster = (poster + step + posters.length) % posters.length;
    posters.forEach((item, i) => item.hidden = poster !== i);
    document.querySelector('#counter').textContent = '0' + (poster + 1) + ' / 03';
  }
  choices.forEach((item, i) => {
    item.addEventListener('pointerenter', () => select(i));
    item.addEventListener('focus', () => select(i));
  });
  document.querySelector('#prev').onclick = () => cycle(-1);
  document.querySelector('#next').onclick = () => cycle(1);
  window.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (!choices.includes(document.activeElement)) return;
    if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      select(current + (event.key === 'ArrowUp' ? -1 : 1));
      choices[current].focus();
    }
  });
  select(0);
}
const markers = [...document.querySelectorAll('.rail a')];
if (markers.length) {
  const panels = markers.map(marker => document.getElementById(marker.hash.slice(1)));
  const decor = document.querySelector('.neon-depth');
  const motion = matchMedia('(prefers-reduced-motion: no-preference)');
  motion.addEventListener('change', scheduleUpdate);
  function updateReadingPosition() {
    if (decor && motion.matches) {
      const phase = window.scrollY / 465;
      decor.style.setProperty('--dots-y', (9 * Math.sin(phase)).toFixed(2) + 'px');
      decor.style.setProperty('--ribbons-y', (29 * Math.sin(phase * 1.12)).toFixed(2) + 'px');
      decor.style.setProperty('--sparks-y', (59 * Math.sin(phase * 1.28)).toFixed(2) + 'px');
    }
    const guide = window.innerHeight * 0.4;
    const bottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    let active = panels[0];
    for (const panel of panels) {
      const bounds = panel.getBoundingClientRect();
      if (bottom || bounds.top <= guide) active = panel;
    }
    for (const marker of markers) {
      if (marker.hash === '#' + active.id) marker.setAttribute('aria-current', 'location');
      else marker.removeAttribute('aria-current');
    }
  }
  let scheduled = false;
  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      updateReadingPosition();
      scheduled = false;
    });
  }
  addEventListener('scroll', scheduleUpdate, {passive:true});
  addEventListener('resize', scheduleUpdate);
  addEventListener('pageshow', scheduleUpdate);
  updateReadingPosition();
}

// Play each entrance once, keeping content readable before observation.
if ('IntersectionObserver' in window && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const entrances = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('arrived');
      entrances.unobserve(entry.target);
    }
  });
  document.querySelectorAll('.chapter, .record, .paper, .case-section > h2, .cv-copy')
    .forEach(element => entrances.observe(element));
}
