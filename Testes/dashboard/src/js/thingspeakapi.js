async function fetchData() {
    
    const chanelID = '128756'

    const urlTemperature = `https://api.thingspeak.com/channels/${chanelID}/fields/2/last.json`;
    const urlHumidity = `https://api.thingspeak.com/channels/${chanelID}/fields/2/last.json`;
    const urlPresAtmospheric = `https://api.thingspeak.com/channels/${chanelID}/fields/3/last.json`;

    try {
        const responseTemperature = await fetch(urlTemperature);
        const dataTemperature = await responseTemperature.json();
        const temperature = dataTemperature.field2;
        
        const responseHumidity = await fetch(urlHumidity);
        const dataHumidity = await responseHumidity.json();
        const humidity = dataHumidity.field2;

        const responsePresAtmospheric = await fetch(urlPresAtmospheric);
        const dataPresAtmospheric = await responsePresAtmospheric.json();
        const presAtmospheric = dataPresAtmospheric.field3;
        
        document.getElementById('temperature-value').textContent = `${temperature}°C`;
        document.getElementById('humidity-value').textContent = `${humidity}%`;
        document.getElementById('pres-atmospheric-value').textContent = `${presAtmospheric}`
    } catch (error) {
        console.error('Erro ao buscar dados da API ThingSpeak:', error);
        document.getElementById('temperature-value').textContent = 'Erro ao carregar temperatura';
        document.getElementById('humidity-value').textContent = 'Erro ao carregar umidade';
        document.getElementById('pres-atmospheric-value').textContent = 'Erro ao carregar umidade';
    }
}

fetchData();