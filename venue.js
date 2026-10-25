// Venue data model: everything the map needs is described here.
// The seats themselves are NOT written in HTML; they are generated from this data.

// Builds rows such as A, B, C ... with the same number of seats each.
function makeRows(firstLabel, lastLabel, seatsPerRow) {
  const rows = [];
  for (let code = firstLabel.charCodeAt(0); code <= lastLabel.charCodeAt(0); code++) {
    rows.push({ label: String.fromCharCode(code), seats: seatsPerRow });
  }
  return rows;
}

const VENUE = {
  name: "Grand Theatre",
  type: "theatre",
  currency: "AZN",
  zones: [
    { id: "vip",       name: "VIP",       price: 80, rows: makeRows("A", "B", 10) },
    { id: "orchestra", name: "Orchestra", price: 50, rows: makeRows("C", "H", 14) },
    { id: "balcony",   name: "Balcony",   price: 30, rows: makeRows("J", "M", 16) }
  ],
  // Seat ids are "row + number", for example "C7".
  unavailable: ["A3", "A4", "B7", "C7", "C8", "E10", "F2", "G1", "G14", "H5", "H6", "K5", "L9", "M16"]
};
