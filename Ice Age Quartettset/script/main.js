console.log("Let's go!");


const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);


document.addEventListener("mousemove", (event) => {
    cursor.style.left = `${event.pageX}px`;
    cursor.style.top = `${event.pageY}px`;
});


window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});


const navItems = document.querySelectorAll('nav ul li');


navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));

        item.classList.add('active');
    });
});

const burgerMenu = document.getElementById('burger-menu');
const navList = document.getElementById('nav-list');

burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

function createCard(animal) {
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper", `group-${animal.group.toLowerCase()}`);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const cardNumber = document.createElement("div");
    cardNumber.classList.add("card-number");
    cardNumber.textContent = animal.group + animal.group_number;
    cardContent.appendChild(cardNumber);

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = animal.name_german;
    cardContent.appendChild(cardTitle);

    const cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = `images/${animal.group.toLowerCase()}${animal.group_number}.jpg`;
    cardImage.alt = animal.name.toUpperCase();
    cardContent.appendChild(cardImage);

    const cardTrivia = document.createElement("div");
    cardTrivia.classList.add("card-trivia");
    cardTrivia.textContent = animal.trivia_german;
    cardContent.appendChild(cardTrivia);

    const stats = [
        { key: "weight", value: animal.max_weight, icon: "weight" },
        { key: "length", value: animal.max_length, icon: "length" },
        { key: "age", value: animal.max_age, icon: "age" },
        { key: "offspring", value: animal.litter_size, icon: "offspring" },
        { key: "intelligence", value: animal.intelligence, icon: "intelligence" },
        { key: "speed", value: animal.top_speed, icon: "speed" }
    ];

    stats.forEach(stat => {
        const statIcon = document.createElement("div");
        statIcon.classList.add("stat-icon");
        const statImage = document.createElement("img");
        statImage.src = `images/icons/${stat.icon}.svg`;
        statImage.alt = stat.key;
        statIcon.appendChild(statImage);
        cardContent.appendChild(statIcon);

        const statValue = document.createElement("div");
        statValue.classList.add("stat-value");
        statValue.textContent = stat.value;
        cardContent.appendChild(statValue);
    });

    cardWrapper.appendChild(cardContent);
    return cardWrapper;
}

function displayCards(animals) {
    const wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = "";
    animals.forEach(animal => {
        wrapper.appendChild(createCard(animal));
    });
}

displayCards(data);

document.getElementById("filter-all").addEventListener("click", function () {
    displayCards(data);
});

document.getElementById("filter-mammals").addEventListener("click", function () {
    const mammals = data.filter(animal => animal.groupname_german === "Säugetiere");
    displayCards(mammals);
});

document.getElementById("filter-predators").addEventListener("click", function () {
    const predators = data.filter(animal => animal.groupname_german === "Raubtiere");
    displayCards(predators);
});

document.getElementById("filter-dinosaurs").addEventListener("click", function () {
    const dinosaurs = data.filter(animal => animal.groupname_german === "Dinosaurier");
    displayCards(dinosaurs);
});

document.getElementById("filter-birds").addEventListener("click", function () {
    const birds = data.filter(animal => animal.groupname_german === "Vögel");
    displayCards(birds);
});

document.getElementById("filter-villains").addEventListener("click", function () {
    const villains = data.filter(animal => animal.role === "Schurke");
    displayCards(villains);
});

document.getElementById("filter-heroes").addEventListener("click", function () {
    const heroes = data.filter(animal => animal.role === "Held");
    displayCards(heroes);
});

document.getElementById("filter-sidekicks").addEventListener("click", function () {
    const sidekicks = data.filter(animal => animal.role === "Sidekick");
    displayCards(sidekicks);
});
