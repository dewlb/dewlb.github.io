let team = [];

// Had some GPT help with this onload section, again nothing crazy and just a visual tool for styling
// Loads "slots" to be filled by the team
window.onload = function() {
  const teamDiv = document.getElementById("team");

  for (let i = 0; i < 6; i++) {
    const slot = document.createElement("div");
    slot.className = "team-slot";
    slot.textContent = "Empty";
    teamDiv.appendChild(slot);
  }
};

// Load function
async function loadPokemon() {
  const name = document.getElementById("pokeInput").value.toLowerCase();
  const id = "pokemon_" + name;

  // Cache the data first to see if it exists already
  let data = localStorage.getItem(id);

  if (data) {
    data = JSON.parse(data);
    console.log("Loaded from cache");
  } else {
    // Here is our fetch call if not cached
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);

    // Error check
    if (!response.ok) {
      alert("Pokemon not found");
      return;
    }

    // Await data
    data = await response.json();

    // Store in cache (since not in cache at this point)
    localStorage.setItem(id, JSON.stringify(data));
    console.log("Fetched from API");
  }

  // Call future display function
  displayPokemon(data);
}

// Display function
function displayPokemon(data) {
  // Debug log tool
  console.log("DISPLAYING:", data);

  // If hidden, show
  const area = document.getElementById("pokemonArea");
  if (area) area.style.display = "block";

  // Text display for id and name
  document.getElementById("pokeName").textContent = "#" + data.id + " " + data.name;

  // Visual
  const img = data.sprites.front_default;
  document.getElementById("pokeImg").src = img;

  // Audio
  const audioUrl = data.cries.latest;
  const audio = document.getElementById("pokeAudio");
  audio.src = audioUrl;
  audio.load();

  // Moves
  const moves = data.moves.map(m => m.move.name);
  fillDropdown("m1", moves);
  fillDropdown("m2", moves);
  fillDropdown("m3", moves);
  fillDropdown("m4", moves);
}

// Function to fill dropdown values, as seen above. ChatGPT helped generate this, this one confused me a little but also was an extra addition
function fillDropdown(id, moves) {
  const select = document.getElementById(id);
  select.innerHTML = "";

  moves.forEach(move => {
    const option = document.createElement("option");
    option.value = move;
    option.textContent = move;
    select.appendChild(option);
  });
}

// Here is our function to add to a team
function addToTeam() {

  // Team can not be larger than 6
  if (team.length >= 6) {
    alert("Team is full! Maximum 6 Pokémon.");
    return;
  }

  const teamDiv = document.getElementById("team");

  // Add name and image content, and store currently selected moves
  const name = document.getElementById("pokeName").textContent;
  const img = document.getElementById("pokeImg").src;

  const moves = [m1.value, m2.value, m3.value, m4.value];

  // Push to team array for length purposes (6 or less)
  team.push({ name, img, moves });

  // Select slot the member should be added to
  const slots = document.querySelectorAll(".team-slot");
  const slot = slots[team.length - 1];

  // Add team to the slot
  slot.innerHTML = `<strong>${name}</strong><img src="${img}"><p>${moves.join(", ")}</p>`;

  // Append said card
  teamDiv.appendChild(card);
}

