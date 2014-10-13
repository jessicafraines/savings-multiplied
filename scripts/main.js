
    function hide(element){
      if(element.classList)
        element.classList.add('hidden');
      else
        element.className += ' ' + 'hidden';
    }
    function show(element){
      if(element.classList)
        element.classList.remove('hidden');
      else
        element.className = element.className
          .replace(new RegExp('(^|\\b)'+ 'hidden'.split(' ')
          .join('|') + '(\\b|$)', 'gi'), ' ');
    }



    var loginModalToggleAreas = document.querySelectorAll(
        '.lightbox, #authentication a, .cancel'
    );


    for(var i = 0; i < loginModalToggleAreas.length; i++){
      loginModalToggleAreas[i].addEventListener('click', function(){
        toggle(document.querySelector('.login-modal'));
      });
    }


    function toggle(element){
      if(element.classList)
        element.classList.toggle('hidden')
    }
