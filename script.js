// Initialize the map centered on Latvia
const map = L.map('map').setView([56.95, 24.1], 7);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
}).addTo(map);

// Array of 30+ Latvian locations
const places = [
  { name: 'Riga Old Town', description: 'Historic center of Riga.', coordinates: [56.946285, 24.105078] },
  { name: 'Jūrmala Beach', description: 'Famous seaside resort.', coordinates: [56.972008, 23.793877] },
  { name: 'Gauja National Park', description: 'Latvia’s largest national park.', coordinates: [57.441926, 25.284268] },
  { name: 'Liepāja', description: 'A city on the Baltic coast.', coordinates: [56.504667, 21.010806] },
  { name: 'Daugavpils Fortress', description: 'A 19th-century fortress.', coordinates: [55.870707, 26.516568] },
  { name: 'Cēsis', description: 'Known for its medieval castle.', coordinates: [57.311917, 25.274396] },
  { name: 'Sigulda', description: 'A town famous for its castles.', coordinates: [57.152653, 24.860048] },
  { name: 'Rundāle Palace', description: 'A Baroque-style palace.', coordinates: [56.413443, 24.024601] },
  { name: 'Kuldīga', description: 'Known for the Venta Rapid.', coordinates: [56.968388, 21.960601] },
  { name: 'Ventspils', description: 'A port city with a beach.', coordinates: [57.390898, 21.570597] },
  { name: 'Salaspils', description: 'Site of a WWII memorial.', coordinates: [56.857562, 24.358357] },
  { name: 'Jēkabpils', description: 'Known for its old town.', coordinates: [56.498372, 25.875424] },
  { name: 'Valmiera', description: 'A city in northern Latvia.', coordinates: [57.541112, 25.426825] },
  { name: 'Madona', description: 'A city near the Vidzeme highlands.', coordinates: [56.855426, 26.216362] },
  { name: 'Alūksne', description: 'Famous for Alūksne Lake.', coordinates: [57.421560, 27.046428] },
  { name: 'Rēzekne', description: 'Known as the “heart of Latgale”.', coordinates: [56.508332, 27.330293] },
  { name: 'Bauska', description: 'Famous for Bauska Castle.', coordinates: [56.406482, 24.194099] },
  { name: 'Jelgava', description: 'Home of Jelgava Palace.', coordinates: [56.652607, 23.723055] },
  { name: 'Ogre', description: 'A town near Riga.', coordinates: [56.816243, 24.605318] },
  { name: 'Talsi', description: 'Known as “the city of nine hills”.', coordinates: [57.244692, 22.589406] },
  { name: 'Saulkrasti', description: 'A coastal town with beaches.', coordinates: [57.260991, 24.419075] },
  { name: 'Ķemeri National Park', description: 'A large nature reserve.', coordinates: [56.915267, 23.495679] },
  { name: 'Dobele', description: 'Known for its castle ruins.', coordinates: [56.625905, 23.278557] },
  { name: 'Aizkraukle', description: 'Located near the Daugava River.', coordinates: [56.604865, 25.255020] },
  { name: 'Preiļi', description: 'A small town in Latgale.', coordinates: [56.295913, 26.724619] },
  { name: 'Smiltene', description: 'A small town in Vidzeme.', coordinates: [57.423593, 25.904942] },
  { name: 'Tukums', description: 'Known for its roses.', coordinates: [56.967550, 23.155882] },
  { name: 'Ludza', description: 'Latvia’s oldest town.', coordinates: [56.547256, 27.725462] },
  { name: 'Saldus', description: 'Known for its sweet treats.', coordinates: [56.663772, 22.491206] },
  { name: 'Cēsis Castle Park', description: 'A park near Cēsis Castle.', coordinates: [57.312667, 25.271790] }
];

// Add markers for each place
places.forEach((place) => {
  const marker = L.marker(place.coordinates).addTo(map);
  const { name, description, coordinates } = place;

  // Bind a popup to each marker
  marker.bindPopup(
    `<h3>${name}</h3>
    <p>${description}</p>
    <p><b>Coordinates:</b> ${coordinates[0].toFixed(6)}, ${coordinates[1].toFixed(6)}</p>`
  );
});
