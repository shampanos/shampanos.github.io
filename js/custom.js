$(document).ready(function(){

      // queryStrip
      function queryStrip(string) {
        string = string.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + string + '=([^&#]*)'),
            results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ''));
      }
    
      // Show bootstrap modal on load
      // If the modal id="terms", you can show it on page load by appending `?modal=terms` to the URL
      var modalString = queryStrip('category'),
          modalToShow = '#' + modalString;
      if (modalString !== '') {
        $(modalToShow).modal('show');
        ga('send', 'pageview', {'page': '/' + modalString});
      }

    $('.portfolio-link').click(function (e) {
      e.preventDefault();
      var modalString = $(this).data('modalid');
      $('#' + modalString).modal('show')
      ga('send', 'pageview', {'page': '/' + modalString});
    });
});