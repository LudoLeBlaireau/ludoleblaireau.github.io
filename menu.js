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
  function updateReadingPosition() {
    const guide = window.innerHeight * 0.4;
    const bottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    let active = panels[0];
    for (const panel of panels) {
      if (bottom || panel.getBoundingClientRect().top <= guide) active = panel;
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
