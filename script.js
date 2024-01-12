function encode() {
    const inputJson = document.getElementById('inputJson').value;
    try {
        const configurations = JSON.parse(inputJson);
        const encodedConfigurations = configurations.map(config => btoa(JSON.stringify(config)));
        const vmessLinks = encodedConfigurations.map(encodedConfig => `vmess://${encodedConfig}`).join('\n');
        const finalLink = btoa(vmessLinks);
        document.getElementById('outputLink').value = finalLink;
    } catch (error) {
        alert('Invalid JSON format');
    }
}

function decode() {
    const inputLink = document.getElementById('outputLink').value;
    try {
        const vmessLinks = atob(inputLink);
        const decodedConfigurations = vmessLinks.split('\n').map(link => JSON.parse(atob(link.replace('vmess://', ''))));
        document.getElementById('inputJson').value = JSON.stringify(decodedConfigurations, null, 2);
    } catch (error) {
        alert('Invalid encoded link');
    }
}