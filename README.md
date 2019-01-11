# Open Chord Charts

To clone it and get started:

```bash
git clone TODO
cd open-chord-charts
npm install
npm run dev
```

Open up [localhost:3000](http://localhost:3000).

## TODO

- [ ] normalize formattedSymbol ("M" => "")
- [ ] detect alternative endings
- [ ] detect repeated parts, repeated cells
- [ ] search
- [ ] edit chart
- [ ] save chart
- [ ] fix "Uncaught Error: Can't use double sharp or double flat as base key."
  - to reproduce: transpose /charts/somebody-loves-me from F to Eb
- [x] play chords with tune.js
- [x] add source to charts
- [ ] fit text in cells of chart
- [ ] open `irealb://` charts using [ireal-reader](https://www.npmjs.com/package/ireal-reader)
- [ ] export to PDF
- [ ] allow adding interpretations, dates, links to youtube
- [ ] handle time signatures other than 4/4
- [ ] detect multi-bar changes like "I VI II V"
