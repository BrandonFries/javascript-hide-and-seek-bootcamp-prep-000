function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}
function increaseRankBy(n) {
  var increaseRank = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0 ; i < increaseRank.length; i ++) {
    increaseRank[i].innerHTML = parseInt(increaseRank[i].innerHTML) + n
  }
}
function deepestChild() {
  var deep = document.querySelector('div#grand-node').querySelectorAll('div')
  return deep[deep.length - 1]
}
