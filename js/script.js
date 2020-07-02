// Modal "popup order"
var modal = document.querySelector('.modal');
var popup_order = document.querySelector('.popup-order');
var write_us = document.querySelector('.write-us');
var cross_close = document.querySelector('.cross');
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

// Close function for all modals
cross_close.addEventListener("click", function() {
  modal.classList.remove('modal-show');
  popup_order.classList.remove('modal-error');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      popup_order.classList.remove('modal-error');
    }
  }
});

//Modal map

