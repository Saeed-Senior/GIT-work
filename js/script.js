'use strict';

const burger = document.getElementById('burger');
const menuBody = document.getElementById('menuBody');

burger.onclick = function(){
   burger.classList.toggle('_active');
   menuBody.classList.toggle('_active');
   document.body.classList.toggle('_lock');
}