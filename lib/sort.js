export async function sortTitleAtoZ(items) {
  items.sort(function (a, b) {
    if (a.title < b.title) return -1
    if (a.title > b.title) return 1
    return 0
  })
  return items
}

export async function sortTitleZtoA(items) {
  items.sort(function (a, b) {
    if (a.title > b.title) return -1
    if (a.title < b.title) return 1
    return 0
  })
  return items
}
