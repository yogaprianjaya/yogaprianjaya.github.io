const portofolio = [
    {
        'name': 'E-librari MAN IC Kendari',
        'image': 'manic.png',
        'paragraph': 'Aplikasi yang dibuat untuk membantu kegiatan perpustakaan di MAN IC Kendari.',
        'detail': {
            'paragraph': `<p>Aplikasi E-Library MAN IC Kendari ini merupakan sebuah aplikasi yang dipersiapkan untuk membantu kegiatan perpustakaan di MAN IC Kendari. Aplikasi ini terdiri dari beberapa menu utama yaitu :</p><ol><li>konten</li><p>Menu konten merupakaan menu yang dibuat untuk mengatur seluruh konten yang ada di aplikasi, seperti konten berita, youtube, data pada footer, dan lain sebagainya.</p><li>Management User</li><p>Menu Management User merupakan menu yang dibuat untuk mengatur seluruh akun pengguna yang terdaftar dari database, baik perubahan data, penghapusan data, maupun penambahan akun pengguna secara manual.</p><li>Buku Tamu</li><p>Menu Buku Tamu merupakan menu yang berfungsi untuk menampung saran ataupun masukkan dari tamu yang mengunjungi aplikasi ini.</p><li>Perpustakaan</li><p>Menu Perpustakaan merupakan menu utama pada aplikasi ini, pada menu ini terdapat sub-menu seperti karya tulis, artikel, hadist dan lain sebagainya. Sub-menu ini menyimpan semua koleksi dari perpustakaan MAN IC Kendari.</p></ol><p>Aplikasi ini mempunyai 4 role utama yaitu Admin, Editor, Siswa, dan Guru. Siswa dan Guru dapat mengupload hasil karya tulis mereka pada aplikasi ini. Kemudian karya tulis tersebut akan di review oleh Editor atau Admin, dan hanya dapat di publikasi oleh role tersebut.</p><p>Untuk melakukan login pada aplikasi ini, akun yang terdaftar harus sudah terverifikasi terlebih dahulu dengan cara memasukkan kode verifikasi yang telah dikirim melalui email oleh sistem.</p>`,
            'periode': 'Desember 2021 - Januari 2022',
            'framework': ['Laravel', 'Bootstrap'],
            'people': 'Team PT. Kreasi Rekayasa Indonesia'
        }
    }
];

portofolio.map((item, index) => {
    const code = `
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="card h-100">
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
    });

    $('#modal-portofolio-detail').text('');
    $('#modal-portofolio-detail').append(data.detail.paragraph);

    $('#modal-portofolio').modal('show');
});