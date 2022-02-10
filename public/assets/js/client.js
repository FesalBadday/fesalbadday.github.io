(function (l) {
  if (l.search[1] === '/') {
    const decoded = l.search.slice(1).split('&').map(function (s) {
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, null,
      l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location))


const body = $('.space'), template = $('.stars'), starsAmount = 500, delayTime = 20;

let size = 'sm';

for (let i = 0; i < starsAmount; i++) {
  i % 2 === 0 ? size = 'sm' : i % 3 === 0 ? size = 'md' : size = 'lg';

  template.clone().removeAttr('id').css({
    top: (Math.random() * 100) + '%',
    left: (Math.random() * 100) + '%',
    animationDelay: (Math.random() * delayTime) + 's'
  }).addClass(size).appendTo(body);
}
