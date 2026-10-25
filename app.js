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

// Generates every zone, row and seat from VENUE. Each seat is a <button>.
function renderVenue() {
  const map = document.getElementById("seat-map");
  map.innerHTML = "";

  VENUE.zones.forEach(zone => {
    const zoneEl = document.createElement("section");
    zoneEl.className = `zone zone-${zone.id}`;
    zoneEl.setAttribute("aria-label", `${zone.name} zone`);

    const title = document.createElement("h3");
    title.className = "zone-title";
    title.textContent = `${zone.name} - ${zone.price} ${VENUE.currency}`;
    zoneEl.appendChild(title);

    zone.rows.forEach(row => {
      const rowEl = document.createElement("div");
      rowEl.className = "row";

      const label = document.createElement("span");
      label.className = "row-label";
      label.textContent = row.label;
      rowEl.appendChild(label);

      for (let n = 1; n <= row.seats; n++) {
        const seat = document.createElement("button");
        seat.type = "button";
        seat.className = "seat";
        seat.textContent = n;
        seat.dataset.seatId = `${row.label}${n}`;
        seat.dataset.zone = zone.id;
        seat.dataset.row = row.label;
        seat.dataset.number = n;
        seat.setAttribute("aria-label", `${zone.name}, row ${row.label}, seat ${n}, ${zone.price} ${VENUE.currency}`);
        // central aisle: gap after the middle seat
        if (n === Math.floor(row.seats / 2)) seat.classList.add("aisle-after");
        rowEl.appendChild(seat);
      }
      zoneEl.appendChild(rowEl);
    });

    map.appendChild(zoneEl);
  });
}

renderVenue();
