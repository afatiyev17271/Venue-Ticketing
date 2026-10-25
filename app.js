// Price categories legend, built from the venue data.
function renderLegend() {
  const legend = document.getElementById("legend");
  legend.innerHTML = "";
  VENUE.zones.forEach(zone => {
    const item = document.createElement("li");
    item.className = "legend-item";
    item.innerHTML =
      `<span class="swatch zone-${zone.id}"></span>` +
      `<span>${zone.name}</span>` +
      `<strong>${zone.price} ${VENUE.currency}</strong>`;
    legend.appendChild(item);
  });
}

renderLegend();
