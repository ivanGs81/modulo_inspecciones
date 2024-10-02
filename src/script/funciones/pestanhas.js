const tabItems = document.querySelectorAll('.menu-sec__item');
const tabContentItems = document.querySelectorAll('.tabla-resp');

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add('bloq-select');
  const tabContentItem = document.querySelector(`#${this.id}-cont`);
  tabContentItem.classList.add('bloq-activo');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('bloq-select'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('bloq-activo'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));