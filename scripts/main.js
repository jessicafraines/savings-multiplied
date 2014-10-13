function hide(element){
      element.style.display = "none";
    }
    function show(element){
      element.style.display = "block";
    }
    var lightbox = document.querySelector('.lightbox');
    lightbox.addEventListener('click', function(){
      hide(document.querySelector('.login-modal'));
    });

    var authentication = document.querySelector('#authentication a');
    authentication.addEventListener('click', function(){
      show(document.querySelector('.login-modal'));
    });

    var cancel = document.querySelector('.cancel');
    cancel.addEventListener('click', function(){
      hide(document.querySelector('.login-modal'));
    });
