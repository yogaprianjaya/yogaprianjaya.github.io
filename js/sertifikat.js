const sertifikat = [
    {
        'kelas': 'Front-End Develover',
        'judul': 'Digital Talent Incubator',
        'penyelenggara': 'Telkom Corporate',
        'periode': 'September 2020 s/d Januari 2021'
    },{
        'kelas': 'Belajar Dasar Pemrograman Web',
        'judul': 'Dicoding',
        'penyelenggara': 'Dicoding Indonesia',
        'periode': 'Agustus 2020'
    },{
        'kelas': 'Belajar Membuat Front-End Web Untuk Pemula',
        'judul': 'Dicoding',
        'penyelenggara': 'Dicoding Indonesia',
        'periode': 'Mei 2021'
    },{
        'kelas': 'Junior web Develover',
        'judul': 'Digital Talent Scholarship',
        'penyelenggara': 'Kominfo',
        'periode': 'Oktober 2021'
    }
];

sertifikat.map((item, index) => {
    const code = `
        <button id="sertifikat-${index}" class="btn btn-primary modal-sertfikat" data-judul="${item.judul}" data-penyelenggara="${item.penyelenggara}" data-periode="${item.periode}" data-kelas="${item.kelas}">${item.kelas}</button>
    `;

    $('.sertifikat-btn').append(code);
});

$('.modal-sertfikat').click(function() {
    const judul = $(this).data('judul');
    const penyelenggara = $(this).data('penyelenggara');
    const kelas = $(this).data('kelas');
    const periode = $(this).data('periode');

    $('#modal-sertifikat-title').text(kelas + ' (' + judul + ')');
    $('#modal-sertifikat-penyelenggara').text('Penyelenggara : ' + penyelenggara);
    $('#modal-sertifikat-periode').text(periode);

    $('#modal-sertifikat').modal('show');
});