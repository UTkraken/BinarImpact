$(document).ready(function()
{

   $('.menu-icon').click(function(){
      $('#menuJS').toggleClass('active');
      $('body').toggleClass('active');

      return false;
   });

   $('.menu-icon').click(function(e){
      e.preventDefault();
      $this = $(this);
      if($this.hasClass('is-opened')){
          $this.addClass('is-closed').removeClass('is-opened');
      }else{
          $this.removeClass('is-closed').addClass('is-opened');
      }
  })

});
