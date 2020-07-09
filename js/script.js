
// Modal cart
// let buy_button = document.querySelectorAll('.buy-button');
// let popup_cart = document.querySelector('.popup-cart');
// let cart_close = popup_cart.querySelector('.cross');

// buy_button.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup_cart.classList.add('modal-show');
// });

// cart_close.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup_cart.classList.remove('modal-show');
// });


// Services tabs
let features_items = document.querySelectorAll('.features-item');

if (features_items) {
  for (let item of features_items) {
    item.addEventListener("click", function(evt) {
      evt.preventDefault();

      let item_id = this.getAttribute("data-tab");
      let tab_id = document.querySelector(`.features-tab[data-tab='${item_id}']`);
      let current_item = document.querySelector('.features-item.current');
      let current_tab = document.querySelector('.features-tab.current');

      current_item.classList.remove('current');
      item.classList.add('current');

      current_tab.classList.remove('current');
      tab_id.classList.add('current');
    }
  )}; 
};

// Modal map
let img_map = document.querySelector('.img-map');
let popup_map = document.querySelector('.popup-map');
let map_close = popup_map.querySelector('.cross');

img_map.classList.add('pointer');

img_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.add('modal-show');
});

map_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.remove('modal-show');
});

// Modal "popup order"
let write_us = document.querySelector('.write-us');
let popup_order = document.querySelector('.popup-order');
let order_form = popup_order.querySelector('.order-form');
let order_name = popup_order.querySelector('.order-name');
let order_email = popup_order.querySelector('.order-email');
let order_close = popup_order.querySelector('.cross');

write_us.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_order.classList.add('modal-show');
  order_name.focus();
});

order_form.addEventListener("submit", function (evt) {
  if (!order_name.value || !order_email.value) {
    evt.preventDefault();
    popup_order.classList.remove('modal-error');
    popup_order.offsetWidth = popup_order.offsetWidth;
    popup_order.classList.add('modal-error');
  }
});

order_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_order.classList.remove('modal-show');
  popup_order.classList.remove('modal-error');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup_order.classList.contains("modal-show")) {
      popup_order.classList.remove("modal-show");
      popup_order.classList.remove('modal-error');
    }
  }
});

