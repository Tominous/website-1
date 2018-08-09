
const title = 'CrazeX';
var x;
var lore;

window.onload = function() {
  x = document.getElementsByTagName("TITLE");
  lore = x[0].innerHTML;

  if(title === ''){
    if(lore === ''){
      x[0].innerHTML =  'CrazeX';
    } else {
      x[0].innerHTML = `${lore}`;
    }
  } else {
    if(lore === ''){
      x[0].innerHTML =  `${title}`;
    } else {
      x[0].innerHTML = `${title} | ${lore}`;
    }
  }
}
