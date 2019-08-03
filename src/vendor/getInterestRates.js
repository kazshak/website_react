fetch('https://api.stlouisfed.org/fred/series/observations?series_id=MORTGAGE30US&api_key=2277e683eb94c3103612c76601b9f0df&file_type=json&observation_start=2019-05-16&observation_end=2019-05-16')
.then(results => {return results.json();})
.then(results => {console.log(results)})
