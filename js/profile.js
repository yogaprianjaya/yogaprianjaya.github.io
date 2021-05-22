$(document).ready(function (){
    if(formalEducation) {
        const formalEducationCard = document.getElementById('formal-education-card');
        formalEducation.map(data => {
            const container = document.createElement('div');
            container.setAttribute('class', 'col-sm-3');

            const containerCard = document.createElement('div');
            containerCard.setAttribute('class', 'card text-white bg-success mb-3 h-100');

            const cardHeader = document.createElement('div');
            cardHeader.setAttribute('class', 'card-header');
            cardHeader.innerText = data.head;

            const cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body');
            cardBody.innerHTML = '<h5 class="card-title">' + data.title + '</h5><p class="card-text">' + data.year + '</p><p class="card-text">' + data.description + '</p>';

            containerCard.append(cardHeader, cardBody);
            container.appendChild(containerCard);
            formalEducationCard.appendChild(container);
        })
    }
    if(nonFormalEducation) {
        const formalEducationCard = document.getElementById('non-formal-education-card');
        nonFormalEducation.map(data => {
            const container = document.createElement('div');
            container.setAttribute('class', 'col-sm-3');

            const containerCard = document.createElement('div');
            containerCard.setAttribute('class', 'card text-white bg-primary mb-3 h-100');

            const cardHeader = document.createElement('div');
            cardHeader.setAttribute('class', 'card-header');
            cardHeader.innerText = data.head;

            const cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body');
            cardBody.innerHTML = '<h5 class="card-title">' + data.title + '</h5><p class="card-text">' + data.year + '</p>';

            containerCard.append(cardHeader, cardBody);
            container.appendChild(containerCard);
            formalEducationCard.appendChild(container);
        })
    }
    if(experience) {
        const experienceCard = document.getElementById('experience-card');
        experience.map(data => {
            const container = document.createElement('div');
            container.setAttribute('class', 'col-sm-3');

            const containerCard = document.createElement('div');
            containerCard.setAttribute('class', 'card text-white bg-success mb-3 h-100');

            const cardHeader = document.createElement('div');
            cardHeader.setAttribute('class', 'card-header');
            cardHeader.innerText = data.head;

            const cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body');
            cardBody.innerHTML = '<h5 class="card-title">' + data.title + '</h5><p class="card-text">' + data.year + '</p><p class="card-text">' + data.description + '</p>';

            containerCard.append(cardHeader, cardBody);
            container.appendChild(containerCard);
            experienceCard.appendChild(container);
        })
    }
})