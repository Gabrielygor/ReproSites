const channelId = '1293177';
const numReadings = 600;
let temperatureChart;

function fetchData() {
    fetch(`https://api.thingspeak.com/channels/${channelId}/feeds.json?results=${numReadings}`)
        .then(response => response.json())
        .then(data => {
            const feeds = data.feeds;
            const temperatures = feeds.map(feed => parseFloat(feed.field1));
            const timestamps = feeds.map(feed => new Date(feed.created_at));
            displayData(temperatures);
            updateChart(temperatures, timestamps);
        })
        .catch(error => {
            console.error('Erro ao recuperar os dados:', error);
        });
}

function displayData(temperatures) {
    const dataContainer = document.getElementById('data');
    dataContainer.innerHTML = '';

    const currentTemperature = temperatures[temperatures.length - 1];
    const currentTemperatureDiv = document.createElement('div');
    currentTemperatureDiv.textContent = `Temperatura Atual: ${currentTemperature} °C`;
    dataContainer.appendChild(currentTemperatureDiv);
}

function updateChart(temperatures, timestamps) {
    const labels = timestamps.map(timestamp => timestamp.toLocaleTimeString('pt-BR'));
    const ctx = document.getElementById('temperatureChart').getContext('2d');
    if (temperatureChart) {
        temperatureChart.destroy();
    }
    temperatureChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperatura (°C)',
                data: temperatures,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Temperatura Média - São Paulo-SP'
                }
            }
        }
    });
}

setInterval(fetchData, 5000);
fetchData();