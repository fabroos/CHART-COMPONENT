const today = new Date()
  .toLocaleDateString('en-us', { weekday: 'short' })
  .toLocaleLowerCase()
function calculate (charts) {
  console.log(charts)
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

fetch('../data.json')
  .then(res => res.json())
  .then(data => {
    const sizes = calculate(data)
    renderCharts(sizes)
  })
