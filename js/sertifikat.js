const sertifikat = [
    {
        'kelas': 'Front-End Develover',
        'judul': 'Digital Talent Incubator',
        'penyelenggara': 'Telkom Corporate',
        'periode': 'September 2020 s/d Januari 2021',
        'picture': 'dti-front-end-developer.png'
    },{
        'kelas': 'Belajar Dasar Pemrograman Web',
        'judul': 'Dicoding',
        'penyelenggara': 'Dicoding Indonesia',
        'periode': 'Agustus 2020',
        'picture': 'dicoding-belajar-dasar-pemrogreman-web.png'
    },{
        'kelas': 'Belajar Membuat Front-End Web Untuk Pemula',
        'judul': 'Dicoding',
        'penyelenggara': 'Dicoding Indonesia',
        'periode': 'Mei 2021',
        'picture': 'dicoding-belajar-membuat-front-end.png'
    },{
        'kelas': 'Junior web Develover',
        'judul': 'Digital Talent Scholarship',
        'penyelenggara': 'Kominfo',
        'periode': 'Oktober 2021',
        'picture': null
    }
];

sertifikat.map((item, index) => {
    const code = `
        <button class="btn btn-primary modal-sertfikat my-1" data-index="${index}">${item.kelas}</button>
    `;

    $('.sertifikat-btn').append(code);
});

$('.modal-sertfikat').click(function() {
    const data = sertifikat[$(this).data('index')];

    $('.modal-sertifikat-picture').text('');
    if(data.picture != null) {
        const code = `
            <img src="/asset/img/sertifikat/${data.picture}" class="img-fluid" alt="${data.judul}">
            <div style="height: 100%; width: 100%; background-color: rgba(83, 83, 83, 0.1); z-index: 100; position: absolute; top: 0"></div>
        `;

        $('.modal-sertifikat-picture').append(code);
    }

    $('#modal-sertifikat-title').text(data.kelas + ' (' + data.judul + ')');
    $('#modal-sertifikat-penyelenggara').text('Penyelenggara : ' + data.penyelenggara);
    $('#modal-sertifikat-periode').text(data.periode);

    $('#modal-sertifikat').modal('show');
});