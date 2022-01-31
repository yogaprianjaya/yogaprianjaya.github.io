const portofolio = [
    {
        'name': 'E-librari MAN IC Kendari',
        'image': 'manic.png',
        'paragraph': 'Aplikasi yang dibuat untuk membantu kegiatan perpustakaan di MAN IC Kendari.',
        'detail': {
            'paragraph': '',
            'periode': 'Desember 2021 - Januari 2022',
            'framework': ['Laravel', 'Bootstrap'],
            'people': 'Team PT. Kreasi Rekayasa Indonesia'
        }
    }
];

portofolio.map((item, index) => {
    const code = `
        <div class="col-3 mx-1">
            <div class="card h-100" style="width: 18rem;">
                <img src="/asset/img/project/${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text" style="font-size: 15px">${item.paragraph}</p>
                    <button data-index="${index}" class="btn btn-primary modal-portofolio" style="font-size: 12px">Detail Aplikasi</button>
                </div>
            </div>
        </div>
    `;

    $('.portofolio-aplikasi').append(code);
});

$('.modal-portofolio').click(function() {
    const data = portofolio[$(this).data('index')];

    $('.modal-portofolio-picture').text('');
    const code = `
        <img src="/asset/img/project/${data.image}" class="img-fluid w-75" alt="${data.name}">
    `;
    $('.modal-portofolio-picture').append(code);

    $('#modal-portofolio-title').text(data.name);
    $('#modal-portofolio-periode').text(data.detail.periode);
    $('#modal-portofolio-people').text(data.detail.people);

    $('#modal-portofolio-framework').text('');
    data.detail.framework.map((item) => {
        const code = `
            <span class="badge bg-primary">${item}</span>
        `;
        $('#modal-portofolio-framework').append(code);
    })

    $('#modal-portofolio').modal('show');
});