


const divContainer = document.getElementById("l1"); 
const divContainer2 = document.getElementById("l2");
// находим элемент в DOM - дереве
const element = document.querySelector('.n1');
element.addEventListener('mouseover', function() {
  divContainer.style.transform = "scale(1)";
  divContainer.style.filter = "blur(.3rem)";
});