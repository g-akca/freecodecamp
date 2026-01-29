const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [{
    name: "Sergio Almirón",
    position: "forward",
    isCaptain: false
  }, {
    name: "Sergio Batista",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Ricardo Bochini",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Claudio Borghi",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "José Luis Brown",
    position: "defender",
    isCaptain: false
  }, {
    name: "Daniel Passarella",
    position: "defender",
    isCaptain: false
  }, {
    name: "Jorge Burruchaga",
    position: "forward",
    isCaptain: false
  }, {
    name: "Néstor Clausen",
    position: "defender",
    isCaptain: false
  }, {
    name: "José Luis Cuciuffo",
    position: "defender",
    isCaptain: false
  }, {
    name: "Diego Maradona",
    position: "midfielder",
    isCaptain: true
  }, {
    name: "Jorge Valdano",
    position: "forward",
    isCaptain: false
  }, {
    name: "Héctor Enrique",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Oscar Garré",
    position: "defender",
    isCaptain: false
  }, {
    name: "Ricardo Giusti",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Luis Islas",
    position: "goalkeeper",
    isCaptain: false
  }, {
    name: "Julio Olarticoechea",
    position: "defender",
    isCaptain: false
  }, {
    name: "Pedro Pasculli",
    position: "forward",
    isCaptain: false
  }, {
    name: "Nery Pumpido",
    position: "goalkeeper",
    isCaptain: false
  }, {
    name: "Oscar Ruggeri",
    position: "defender",
    isCaptain: false
  }, {
    name: "Carlos Tapia",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Marcelo Trobbiani",
    position: "midfielder",
    isCaptain: false
  }, {
    name: "Héctor Zelada",
    position: "goalkeeper",
    isCaptain: false
  }]
};

document.addEventListener("DOMContentLoaded", () => {
  const teamElement = document.getElementById("team");
  const yearElement = document.getElementById("year");
  const headCoachElement = document.getElementById("head-coach");
  teamElement.textContent = footballTeam.team;
  yearElement.textContent = footballTeam.year;
  headCoachElement.textContent = footballTeam.headCoach;

  const playerCardsElement = document.getElementById("player-cards");
  playerCardsElement.innerHTML = footballTeam.players.map(player => 
    `
      <div class="player-card">
        <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
        <p>Position: ${player.position}</p>
      </div>
    `).join("");
  const playersDropdown = document.getElementById("players");
  playersDropdown.addEventListener("change", () => {
    let playersToShow = [];
    if (playersDropdown.value == "all") {
      playersToShow = footballTeam.players;
    }
    else {
      playersToShow = footballTeam.players.filter(player => player.position == playersDropdown.value);
    }

    playerCardsElement.innerHTML = playersToShow.map(player => 
      `
        <div class="player-card">
          <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
          <p>Position: ${player.position}</p>
        </div>
      `).join("");
  });
});