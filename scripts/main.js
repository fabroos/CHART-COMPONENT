const today = new Date()
  .toLocaleDateString('en-us', { weekday: 'short' })
  .toLocaleLowerCase()
function calculate (charts) {
  const max = Math.max(...charts.map(chart => chart.amount))
  const sizes = charts.map(chart => {
    return {
      ...chart,
      size: Math.floor((100 * chart.amount) / max)
    }
  })
  return sizes
}

function chart ({ amount, day, size }) {
  return `<div class="chart" >
    <div class="max-chart">
        <div data-title="$${amount}" tabindex="-1" class="chart-graphic ${
    today === day ? 'today' : ''
  }" style="height:${size}%;"></div>
    </div>
    <span>${day}</span>
  </div>`
}

function renderCharts (charts) {
  const html = charts.map(chart).join('')
  document.querySelector('#charts').innerHTML = html
}

function fetchData () {
  const data = [
    {
      day: 'mon',
      amount: 17.45
    },
    {
      day: 'tue',
      amount: 34.91
    },
    {
      day: 'wed',
      amount: 52.36
    },
    {
      day: 'thu',
      amount: 31.07
    },
    {
      day: 'fri',
      amount: 23.39
    },
    {
      day: 'sat',
      amount: 43.28
    },
    {
      day: 'sun',
      amount: 25.48
    }
  ]
  const sizes = calculate(data)
  renderCharts(sizes)
}
fetchData()
