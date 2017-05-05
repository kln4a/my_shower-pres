var start = function(){
  var element,shadowRoot;
  newDOM.addEventListener('click', function(){
    element = document.getElementById('bu');
    shadowRoot = element.attachShadow({
      mode: 'open'
    });
  });
  add.addEventListener('click', function(){
    shadowRoot.innerHTML ='<span>Не работает</span>';
  });
  replace.addEventListener('click', function(){
    element.shadowRoot.querySelector('span').textContent = 'Работает';
  });
  content.addEventListener('click', function(){
    shadowRoot.innerHTML = shadowRoot.innerHTML + '<slot name=slot1></slot>';
  });

};

document.addEventListener('DOMContentLoaded', start);
