// Modal "popup order"
var popup_order = document.querySelector('.popup-order');
var write_us = document.querySelector('.write-us');
var order_close = document.querySelector('.cross');
var order_form = document.querySelector('.order-form');
var order_name = document.querySelector('.order-name');
var order_email = document.querySelector('.order-email');

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

order_close.addEventListener("click", function() {
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

// Modal map
var img_map = document.querySelector('.img-map');
var popup_map = document.querySelector('.popup-map');
var map_close = popup_map.querySelector('.cross');

img_map.classList.add('pointer');

img_map.addEventListener("click", function() {
  popup_map.classList.add('modal-show');
});

map_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_map.classList.remove('modal-show');
});

// Modal cart
var popup_cart = document.querySelector('.popup-cart');
var buy_button = document.querySelector('.asd');
var cart_close = popup_cart.querySelector('.cross');

buy_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_cart.classList.add('modal-show');
});

console.log(document.querySelector('.popup-cart'));

cart_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_cart.classList.remove('modal-show');
});