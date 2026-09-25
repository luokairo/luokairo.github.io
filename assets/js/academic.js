(function () {
  var links = document.querySelectorAll('[data-language-link]');
  function preserveSection() {
    var hash = window.location.hash;
    for (var i = 0; i < links.length; i += 1) {
      links[i].href = links[i].getAttribute('data-language-link') + hash;
    }
  }
  preserveSection();
  window.addEventListener('hashchange', preserveSection);
}());
