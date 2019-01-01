// Load charts from sharp11-irb (irealpro corpus), add slugs and tags and sort them.

// This file is called `_charts.js` rather than `charts.js`, because
// we don't want to create an `/charts/charts` route — the leading
// underscore tells Sapper not to do that.

import { charts } from "sharp11-irb"
import slugify from "@sindresorhus/slugify"

charts.forEach(chart => {
  chart.info.title = chart.info.title.trim()
  if (!chart.info.slug) {
    chart.info.slug = slugify(chart.info.title)
    chart.info.source = "irb-corpus"
    chart.info.sourceUrl = "https://github.com/jsrmath/sharp11-irb"
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
