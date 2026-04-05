document.addEventListener('DOMContentLoaded', function () {
  if (typeof currentVideoSlug === 'undefined' || typeof VIDEO_DATA === 'undefined') return;

  const video = VIDEO_DATA.find(function (v) { return v.slug === currentVideoSlug; });
  if (!video) return;

  // Set page title and heading
  document.title = 'T. Shan | ' + video.title + ' ' + video.subtitle;

  var titleEl = document.getElementById('video-page-title');
  if (titleEl) {
    titleEl.textContent = video.title + ' ' + video.subtitle;
  }

  // Set the embed
  var embedEl = document.getElementById('video-page-embed');
  if (embedEl) {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + video.youtubeId + '?rel=0';
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('title', video.title + ' ' + video.subtitle);
    embedEl.appendChild(iframe);
  }

  // Populate more videos
  var gridEl = document.getElementById('more-videos-grid');
  if (!gridEl) return;

  var others = VIDEO_DATA.filter(function (v) { return v.slug !== currentVideoSlug; });

  gridEl.innerHTML = others.map(function (v) {
    var thumbUrl = 'https://img.youtube.com/vi/' + v.youtubeId + '/mqdefault.jpg';
    return '<a href="/videos/' + v.slug + '/" class="video-card">'
      + '<div class="video-card-thumb">'
      + '<img src="' + thumbUrl + '" alt="' + v.title + '" loading="lazy">'
      + '<span class="play-badge">Watch</span>'
      + '</div>'
      + '<p class="video-card-title">' + v.title + '</p>'
      + '<p class="video-card-subtitle">' + v.subtitle + '</p>'
      + '<span class="video-card-watch">Watch &rarr;</span>'
      + '</a>';
  }).join('');
});
