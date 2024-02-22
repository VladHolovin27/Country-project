// const fetchCode = () => {
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//         .then(response => response.json())
//         .then(poke => {
//             const name = poke.name;
//             const imageUrl = poke.sprites.front_default;

//             const container = document.querySelector('.js-card-container');
//             container.innerHTML = '';

//             const nameElement = document.createElement('h2');
//             nameElement.textContent = name;

//             const imageElement = document.createElement('img');
//             imageElement.src = imageUrl;
//             imageElement.alt = name;

//             container.appendChild(nameElement);
//             container.appendChild(imageElement);
//         });
// };

// fetchCode();

// const btn = document.querySelector('.btn');
// const input = document.querySelector('.form-control');

// btn.addEventListener('submit', () => {
//     document.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const pokemonId = document.querySelector('.js-pokemon-id')
//         pokemonId.value.trim();
//         const pokemonContainer = document.querySelector('.js-pokemon-container');
//             pokemonContainer.innerHTML = '';
//             const typesElement = document.createElement('p');
//             typesElement.textContent = `Type(s): ${data.types.map(type => type.type.name).join(', ')}`;

//             const abilitiesElement = document.createElement('p');
//             abilitiesElement.textContent = `Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}`;

//             pokemonContainer.appendChild(nameElement);
//             pokemonContainer.appendChild(imageElement);
//             pokemonContainer.appendChild(typesElement);
//             pokemonContainer.appendChild(abilitiesElement);

// })
// })
const cont = document.querySelector('.js-card-container');
const input = document.querySelector('.form-control');
input.addEventListener('input', () => {
    const userInput = input.value.trim();
    if (userInput.length === 0) {
        cont.innerHTML = '';
        return;
    }

    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
        .then(response => {
            if (!response.ok) {
                console.error('Failed to fetch data');
            }
            return response.json();
        })
        .then(countries => {
            cont.innerHTML = ''; 

            const ul = document.createElement('ul');
            countries.forEach(country => {
                const li = document.createElement('li');
                li.textContent = country.name.common;
                ul.appendChild(li);
            });
            cont.appendChild(ul);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
