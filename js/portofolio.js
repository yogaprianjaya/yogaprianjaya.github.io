const portofolio = [
    {
        'name': 'E-librari MAN IC Kendari',
        'image': 'manic.png',
        'paragraph': 'Aplikasi yang dibuat untuk membantu kegiatan perpustakaan di MAN IC Kendari.'
    }
];

portofolio.map((item) => {
    const code = `
        <div class="col-3 mx-1">
            <div class="card h-100" style="width: 18rem;">
                <img src="/asset/img/project/${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text" style="font-size: 15px">${item.paragraph}</p>
                    <a href="#" class="btn btn-primary" style="font-size: 12px">Detail Aplikasi</a>
                </div>
            </div>
        </div>
    `;

    $('.portofolio-aplikasi').append(code);
});