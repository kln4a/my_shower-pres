var start = function(){
  var element = document.getElementById('bu');
  var shadowRoot = element.attachShadow({
    mode: 'open'
  });
  shadowRoot.innerHTML ='<span>Работает</span>';
  element.shadowRoot.querySelector('span').textContent = 'Не работает';
};

document.addEventListener('DOMContentLoaded', start);
