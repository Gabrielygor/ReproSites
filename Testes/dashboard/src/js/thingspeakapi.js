async function fetchData() {
    const urlTemperature = 'https://api.thingspeak.com/channels/1293177/fields/1/last.json';
    const urlHumidity = 'https://api.thingspeak.com/channels/1293177/fields/2/last.json';
    
    try {
        const responseTemperature = await fetch(urlTemperature);
        const dataTemperature = await responseTemperature.json();
        const temperature = dataTemperature.field1;
        
        const responseHumidity = await fetch(urlHumidity);
        const dataHumidity = await responseHumidity.json();
        const humidity = dataHumidity.field2;
        
        document.getElementById('temperature-value').textContent = `${temperature}°C`;
        document.getElementById('humidity-value').textContent = `${humidity}%`;
    } catch (error) {
        console.error('Erro ao buscar dados da API ThingSpeak:', error);
        document.getElementById('temperature-value').textContent = 'Erro ao carregar temperatura';
        document.getElementById('humidity-value').textContent = 'Erro ao carregar umidade';
    }
}

window.onload = fetchData;