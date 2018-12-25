// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_charts.js` rather than `charts.js`, because
// we don't want to create an `/charts/charts` route — the leading
// underscore tells Sapper not to do that.

import { charts } from "sharp11-irb"
import slugify from "@sindresorhus/slugify"

charts.forEach(chart => {
  chart.info.title = chart.info.title.trim()
  if (!chart.info.slug) {
    chart.info.slug = slugify(chart.info.title)
  }
})

function byTitle(a, b) {
  const titleA = a.info.title.toUpperCase()
  const titleB = b.info.title.toUpperCase()
  if (titleA < titleB) {
    return -1
  }
  if (titleA > titleB) {
    return 1
  }
  return 0
}
charts.sort(byTitle)

export default charts
