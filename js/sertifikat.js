const data_dti = {
    'judul': 'Digital Talent Incubator',
    'penyelenggara': 'Telkom Corporate',
    'data': [
        {
            'class': 'Front-End Develover',
            'periode': 'September 2020 s/d Januari 2021'
        }
    ]
};

const data_dicoding = {
    'judul': 'Dicoding',
    'penyelenggara': 'Dicoding Indonesia',
    'data': [
        {
            'class': 'Belajar Dasar Pemrograman Web',
            'periode': 'Agustus 2020'
        },
        {
            'class': 'Belajar Membuat Front-End Web Untuk Pemula',
            'periode': 'Mei 2021'
        }
    ]
};

const data_dts = {
    'judul': 'Digital Talent Scholarship',
    'penyelenggara': 'Kominfo',
    'data': [
        {
            'class': 'Junior web Develover',
            'periode': 'Oktober 2021'
        }
    ]
};

$('#dti').data('judul', data_dti.judul);
$('#dti').data('penyelenggara', data_dti.penyelenggara);
$('#dti').data('data', data_dti.data);

$('#dicoding').data('judul', data_dicoding.judul);
$('#dicoding').data('penyelenggara', data_dicoding.penyelenggara);
$('#dicoding').data('data', data_dicoding.data);

$('#dts').data('judul', data_dts.judul);
$('#dts').data('penyelenggara', data_dts.penyelenggara);
$('#dts').data('data', data_dts.data);

$('.modal-sertfikat').click(function() {
    const judul = $(this).data('judul');
    const penyelenggara = $(this).data('penyelenggara');
    const data = $(this).data('data');

    $('#modal-sertifikat-title').text(judul);
    $('#modal-sertifikat-penyelenggara').text('Penyelenggara : ' + penyelenggara);
    $('#modal-sertifikat-data').text('');
    data.map((item, index) => {
        const code = `
            <tr>
                <td>${index + 1}</td>
                <td>${item.class}</td>
                <td>${item.periode}</td>
            </tr>
        `;
        $('#modal-sertifikat-data').append(code);
    });

    $('#modal-sertifikat').modal('show');
});