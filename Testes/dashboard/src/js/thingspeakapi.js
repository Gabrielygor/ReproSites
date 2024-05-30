

async function fetchTemperature() {
    const url = 'https://api.thingspeak.com/channels/1293177/fields/1/last.json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const temperature = data.field1;
        
        document.getElementById('temperature-value').textContent = `${temperature}°C`;
    } catch (error) {
        console.error('Erro ao buscar dados da API ThingSpeak:', error);
        document.getElementById('temperature-value').textContent = 'Erro ao carregar temperatura';
    }
}
window.onload = fetchTemperature;