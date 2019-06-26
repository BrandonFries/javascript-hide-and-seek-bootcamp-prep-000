function getFirstSelector(selector) {
  for (let i = 0; i < selector.length; i ++) {
    if (selector[i]) {
      return selector[0]
    }
  }
}
