const books = [
  {
    id: 1,
    coverUrl: 'https://cdn1.ozone.ru/s3/multimedia-l/6350703849.jpg',
    label: '1984',
    author: 'Джордж Оруэлл',
    year: 1949,
    isFavourite: false,
    description: 'Антиутопия о тоталитарном обществе, где Большой Брат следит за каждым.',
    isbn: '9785171043639' 
  },
  {
    id: 2,
    coverUrl: 'https://avatars.mds.yandex.net/get-mpic/4119784/img_id6849037735687796795.jpeg/orig',
    label: 'Убить пересмешника',
    author: 'Харпер Ли',
    year: 1960,
    isFavourite: false,
    description: 'История расовой несправедливости и взросления в американском Юге.',
    isbn: '9785170936765'
  },
  {
    id: 3,
    coverUrl: 'https://cdn1.ozone.ru/s3/multimedia-p/6636006421.jpg',
    label: 'Великий Гэтсби',
    author: 'Фрэнсис Скотт Фицджеральд',
    year: 1925,
    isFavourite: false,
    description: 'Трагическая история богача Джея Гэтсби и его любви к Дэйзи.',
    isbn: '9785171203203'
  },
  {
    id: 4,
    coverUrl: 'https://avatars.mds.yandex.net/i?id=699de1e5e941d4fc30bed55d1362b572_l-12583108-images-thumbs&n=13',
    label: 'Гордость и предубеждение',
    author: 'Джейн Остин',
    year: 1813,
    isFavourite: false,
    description: 'Классика о любви Элизабет Беннет и мистера Дарси.',
    isbn: '9785699454165'
  },
  {
    id: 5,
    coverUrl: 'https://avatars.mds.yandex.net/i?id=1facc63ed93f0f1d6b8af31e11fe0d91_l-8439163-images-thumbs&n=13',
    label: 'Над пропастью во ржи',
    author: 'Джером Д. Сэлинджер',
    year: 1951,
    isFavourite: false,
    description: 'История подростка Холдена Колфилда, который бежит от лицемерия взрослых.',
    isbn: '9785170801155'
  },
  {
    id: 6,
    coverUrl: 'https://avatars.mds.yandex.net/i?id=8dc62fb3df9b8679cc6d064d3b13a369_l-5241942-images-thumbs&n=13',
    label: 'О дивный новый мир',
    author: 'Олдос Хаксли',
    year: 1932,
    isFavourite: false,
    description: 'Антиутопия о мире, где люди генетически запрограммированы на счастье.',
    isbn: '9785170877655'
  },
  {
    id: 7,
    coverUrl: 'https://example.com/cover7.jpg',
    label: 'Моби Дик',
    author: 'Герман Мелвилл',
    year: 1851,
    isFavourite: false,
    description: 'Эпическая история капитана Ахава и его охоты на белого кита.',
    isbn: '9785170933122'
  },
  {
    id: 8,
    coverUrl: 'https://example.com/cover8.jpg',
    label: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    year: 1866,
    isFavourite: false,
    description: 'Философский роман о студенте Раскольникове, совершившем убийство.',
    isbn: '9785170938455'
  },
  {
    id: 9,
    coverUrl: 'https://example.com/cover9.jpg',
    label: 'Властелин колец',
    author: 'Дж. Р. Р. Толкин',
    year: 1954,
    isFavourite: false,
    description: 'Эпическая фэнтези-сага о борьбе за Кольцо Всевластья.',
    isbn: '9785170931234'
  },
  {
    id: 10,
    coverUrl: 'https://example.com/cover10.jpg',
    label: 'Хоббит, или Туда и обратно',
    author: 'Дж. Р. Р. Толкин',
    year: 1937,
    isFavourite: false,
    description: 'Приключения хоббита Бильбо Бэггинса и компании гномов.',
    isbn: '9785170934563'
  },
  {
    id: 11,
    coverUrl: 'https://example.com/cover11.jpg',
    label: 'Анна Каренина',
    author: 'Лев Толстой',
    year: 1877,
    isFavourite: false,
    description: 'Трагическая история любви замужней женщины и офицера Вронского.',
    isbn: '9785170937892'
  },
  {
    id: 12,
    coverUrl: 'https://example.com/cover12.jpg',
    label: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    year: 1967,
    isFavourite: false,
    description: 'Мистический роман о дьяволе в Москве и любви между Мастером и Маргаритой.',
    isbn: '9785170924564'
  },
  {
    id: 13,
    coverUrl: 'https://example.com/cover13.jpg',
    label: 'Три товарища',
    author: 'Эрих Мария Ремарк',
    year: 1936,
    isFavourite: false,
    description: 'История дружбы, любви и войны в послевоенной Германии.',
    isbn: '9785170939872'
  },
  {
    id: 14,
    coverUrl: 'https://example.com/cover14.jpg',
    label: '451 градус по Фаренгейту',
    author: 'Рэй Брэдбери',
    year: 1953,
    isFavourite: false,
    description: 'Антиутопия о мире, где книги запрещены и сжигаются.',
    isbn: '9785170909516'
  },
  {
    id: 15,
    coverUrl: 'https://example.com/cover15.jpg',
    label: 'Сто лет одиночества',
    author: 'Габриэль Гарсия Маркес',
    year: 1967,
    isFavourite: false,
    description: 'Магический реализм в истории семьи Буэндиа в городе Макондо.',
    isbn: '9785170933214'
  },
  {
    id: 16,
    coverUrl: 'https://example.com/cover16.jpg',
    label: 'Идиот',
    author: 'Фёдор Достоевский',
    year: 1869,
    isFavourite: false,
    description: 'Роман о князе Мышкине, человеке с доброй душой, в мире жестоких интриг.',
    isbn: '9785170939513'
  },
  {
    id: 17,
    coverUrl: 'https://example.com/cover17.jpg',
    label: 'Автостопом по галактике',
    author: 'Дуглас Адамс',
    year: 1979,
    isFavourite: false,
    description: 'Сумасшедшее межгалактическое приключение Артура Дента и его друзей.',
    isbn: '9785170901237'
  },
  {
    id: 18,
    coverUrl: 'https://example.com/cover18.jpg',
    label: 'Портрет Дориана Грея',
    author: 'Оскар Уайльд',
    year: 1890,
    isFavourite: false,
    description: 'История молодого человека, чья душа стареет вместо него.',
    isbn: '9785170934123'
  },
  {
    id: 19,
    coverUrl: 'https://example.com/cover19.jpg',
    label: 'Шантарам',
    author: 'Грегори Дэвид Робертс',
    year: 2003,
    isFavourite: false,
    description: 'Автобиографичный роман беглого заключённого в Индии.',
    isbn: '9785170928824'
  },
  {
    id: 20,
    coverUrl: 'https://example.com/cover20.jpg',
    label: 'Цветы для Элджернона',
    author: 'Даниел Киз',
    year: 1966,
    isFavourite: false,
    description: 'История умственного инвалида, которому сделали экспериментальную операцию.',
    isbn: '9785170927316'
  }
];

export default books;