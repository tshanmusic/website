document.addEventListener('DOMContentLoaded', function () {

  // ─── Nav scroll behavior ───
  var nav = document.querySelector('.site-nav');
  if (nav) {
    var updateNav = function () {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // ─── Mobile menu ───
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.contains('open');
      toggle.classList.toggle('open', !isOpen);
      mobileNav.classList.toggle('open', !isOpen);
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── Click-to-play YouTube embeds ───
  document.querySelectorAll('.video-embed[data-video-id]').forEach(function (el) {
    el.addEventListener('click', function () {
      var id = el.dataset.videoId;
      el.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id
        + '?autoplay=1&rel=0" frameborder="0" allowfullscreen '
        + 'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>';
    });
  });

  // ─── Scroll indicator hide on scroll ───
  var scrollInd = document.querySelector('.scroll-indicator');
  if (scrollInd) {
    window.addEventListener('scroll', function () {
      scrollInd.style.opacity = window.scrollY > 100 ? '0' : '0.7';
    }, { passive: true });
  }

});
