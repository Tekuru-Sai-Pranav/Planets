const planets = [
  {
    name: "Mercury",
    type: "Terrestrial",
    moons: 0,
    fact: "Mercury is the smallest and closest planet to the Sun."
  },
  {
    name: "Venus",
    type: "Terrestrial",
    moons: 0,
    fact: "Venus is the hottest planet in our solar system."
  },
  {
    name: "Earth",
    type: "Terrestrial",
    moons: 1,
    fact: "Earth is the only known planet that supports life."
  },
  {
    name: "Jupiter",
    type: "Gas Giant",
    moons: 79,
    fact: "Jupiter is the largest planet and has a persistent storm called the Great Red Spot."
  },
  {
    name: "Neptune",
    type: "Ice Giant",
    moons: 14,
    fact: "Neptune has the strongest winds in the solar system."
  }
];

const container = document.getElementById('planet-container');

planets.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${p.name}</h2>
    <p><strong>Type:</strong> ${p.type}</p>
    <p><strong>Moons:</strong> ${p.moons}</p>
    <p><strong>Fun Fact:</strong> ${p.fact}</p>
  `;
  container.appendChild(card);
});
