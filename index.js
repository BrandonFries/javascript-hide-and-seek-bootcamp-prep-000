function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}
function increaseRankBy(n) {
  var increaseRank = document.querySelectorAll('increaseRank.ranked-list')
  for (let i = 0 ; i < increaseRank.length; i ++) {
    increaseRank[i].textContent = parseInt(increaseRank[i].textContent) + n
  }
return increaseRank
}
