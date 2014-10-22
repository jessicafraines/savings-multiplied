function getJSON(url, cb){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function(){
    cb(JSON.parse(xhr.responseText));
  };
  xhr.send();
}

function addItemToList($list, item){
  var $li = document.createElement('li');
  var $img = document.createElement('img');
  var $p = document.createElement('p');
  var $p1 = document.createElement('p');
  var $p2 = document.createElement('p');
  var $p3 = document.createElement('p');
  $p.innerHTML = item.price;
  $p1.innerHTML = item.title;
  $p2.innerHTML = item.seller;
  $p3.innerHTML = item.remaining;
  $img.src = item.image;
  $li.appendChild($img);
  $li.appendChild($p);
  $li.appendChild($p1);
  $li.appendChild($p2);
  $li.appendChild($p3);
  $list.appendChild($li);
}

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
  if (element.classList) {
    element.classList.toggle('hidden');
  } else {
    var classes = element.className.split(' ');
    var classIndex;
    for (var i = 0; i < classes.length; i++) {
      if (classes[i] === 'hidden')
        classIndex = i;
    }

    if (classIndex >= 0)
      classes.splice(classIndex, 1);
    else
      classes.push('hidden');

    element.className = classes.join(' ');
  }
}
document.addEventListener("DOMContentLoaded", function(){
  getJSON('https://savingsmultipliedssh.firebaseio.com/itemlist.json', function(data){
    var item = data;
    var $ul = document.getElementById("items");
    for(var i = 0; i < item.length; i++){
      addItemToList($ul, item[i]);
    }
  });
});
