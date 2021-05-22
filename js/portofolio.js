$(document).ready(function (){
    if(carousel) {
        const olCarousel = document.querySelector('.carousel-indicators');
        const itemCarousel = document.querySelector('.carousel-inner');
        carousel.map(data => {
            const childOlCarousel = document.createElement('li');
            childOlCarousel.setAttribute('data-target', '#carouselExampleIndicators');
            childOlCarousel.setAttribute('data-slide-to', data.id);
            if(data.id == 0){
                childOlCarousel.setAttribute('class', 'active');
            }
            olCarousel.appendChild(childOlCarousel);

            const carouselItem = document.createElement('div');
            carouselItem.setAttribute('class', 'carousel-item' + (data.id == 0 ? ' active' : ''));
            const carouselImage = document.createElement('img');
            carouselImage.setAttribute('src', data.image);
            carouselImage.setAttribute('alt', data.alt);
            carouselImage.setAttribute('class', 'd-block w-100');
            const carouselDesc = document.createElement('div');
            carouselDesc.setAttribute('class', 'carousel-caption d-none d-md-block carousel-custom-bg');
            carouselDesc.innerHTML = '<h5>' + data.title + '</h5><p>' + data.description + '</p>'
            carouselItem.append(carouselImage, carouselDesc);
            itemCarousel.appendChild(carouselItem);
        });
    }
    if(cardPortofolio) {
        const projectCard = document.getElementById('project-card');
        cardPortofolio.map(data => {
            const colomProject = document.createElement('div');
            colomProject.setAttribute('class', 'col-sm-4');
            const cardProject = document.createElement('div');
            cardProject.setAttribute('class', 'card h-100');
            const imageProject = document.createElement('img');
            imageProject.setAttribute('class', 'card-img-top');
            imageProject.setAttribute('src', data.image);
            imageProject.setAttribute('alt', data.name);
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body border-top border-muted');
            cardBody.innerHTML = '<h5 class="card-title">' + data.name + '</h5><p class="card-text">' + data.description + '</p><a href="' + data.pages + '" class="btn btn-primary">Lihat Detail Projek</a>'
            
            cardProject.append(imageProject, cardBody);
            colomProject.appendChild(cardProject);
            projectCard.appendChild(colomProject);
        })
    }

    $('.carousel').carousel({
        interval: 4000
    })
});