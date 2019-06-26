function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}
function increaseRankBy(n) {
  const increaseRank = document.getElementById('app').querySelector('ul.ranked-list')
  for (let i = 0; i < increaseRank.length; i ++) {
    increaseRank[0].innerHTML = ((parseInt(increaseRank[0].innerHTML)) + n)
  }
}
