function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}
function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list > li');
  for (let i = 0; i < list.length; i ++) {
    let b = list[i];
    n.innerHTML = parseInt(current.innerhtml) + n;
  }
  
}
