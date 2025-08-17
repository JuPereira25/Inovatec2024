document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([-3.1194, -60.0256], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Adiciona esta linha para ajustar o mapa quando o container mudar de tamanho
    setTimeout(() => map.invalidateSize(), 100);
    
    // Marcadores (exemplo)
    L.marker([-3.1194, -60.0256]).addTo(map)
        .bindPopup("Av. Principal, 520");
});


document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([-3.1194, -60.0256], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Rotas simuladas (coordenadas de Manaus)
    const rotas = [
        {
            cor: 'red',
            pontos: [[-3.1194, -60.0256], [-3.1180, -60.0230], [-3.1165, -60.0200]],
            info: "ROTA CRÍTICA - 3 lixeiras cheias"
        },
        {
            cor: 'green',
            pontos: [[-3.1150, -60.0300], [-3.1130, -60.0280], [-3.1100, -60.0250]],
            info: "ROTA LIVRE - Todas vazias"
        }
    ];
   
    // Desenha as rotas no mapa
    rotas.forEach(rota => {
        L.polyline(rota.pontos, {
            color: rota.cor,
            weight: 6,
            opacity: 0.8,
            dashArray: rota.cor === 'red' ? '10, 10' : null // Tracejado para rotas críticas
        })
        .bindPopup(rota.info)
        .addTo(map)
        .on('mouseover', function(e) {
            this.openPopup();
            this.setStyle({ weight: 8 }); // Engrossa a linha no hover
        })
        .on('mouseout', function(e) {
            this.closePopup();
            this.setStyle({ weight: 6 });
        });
    });

    // Centraliza o mapa para mostrar todas as rotas
    map.fitBounds([
        ...rotas.flatMap(rota => rota.pontos)
    ]);

    setTimeout(() => map.invalidateSize(), 100);
});