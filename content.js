(function() {
  var clientIDs = [
    '02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea',
    'd173d71985e336c7a0c252c549a3b453',
    'a3e059563d7fd3372b49b37f00a00bcf'
  ]

  function randomClientID() {
    return clientIDs[Math.floor(Math.random()*clientIDs.length)];
  }

  function changeSoundcloudClientID() {
    $('.post-item[data-url]').each(function() {
      $(this).attr('data-url', $(this).data('url').replace(/[^=]*$/, randomClientID()))
    });
  }

  new MutationObserver(function(mutations) {
    changeSoundcloudClientID();
  }).observe(document.querySelector('.main_container'), {childList: true});

  $(document).ready(function() {
    changeSoundcloudClientID();
  });
})()
