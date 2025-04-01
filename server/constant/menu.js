

const menus = [
    {
        name: 'New In',
        child: [
            {
                name: 'NewArtworks', 
                child: [
                    {
                        name: 'Under 50000',
                        filter: [{ id: 'price', order: {min: 0 , max: 50000} } , { id: 'category', value: 'New In' }]
                    },
                    {
                        name: 'Under 100000',
                        filter: [{ id: 'price', order:{min: 0, max: 100000} } , { id: 'category', value: 'New In' }]
                    },
                    {
                        name: 'Under 250000',
                        filter: [{ id: 'price', order:{min: 0, max: 250000} } , { id: 'category', value: 'New In' }]
                    },
                    {
                        name: 'Over 250000',
                        filter: [{ id: 'price', order:{min: 0, max: 250000} } , { id: 'category', value: 'New In' }]
                    },
                ]
            },
            {
                name: 'New Collections',
                child: [
                    {
                        name: 'Inspired by Memphis',
                        filter: [  ]
                    },
                    {
                        name: 'Milano',
                        filter: []
                    },
                    {
                        name: 'Famous Artist: Shades of Blue',
                        filter: []
                    },
                    {
                        name: 'Art Brut-Inspired',
                        filter: []
                    },
                    {
                        name: 'New & Notable',
                        filter: []
                    },
                    {
                        name: 'February',
                        filter: []
                    },
                    {
                        name: 'Explore All Collection',
                        filter: []
                    },
                ]
            },
            {
                name: 'Featured Artist',
                child: [
                    {
                        name: 'Alex Senchenko',
                        filter: [{ id: 'artist', value: 'Alex Senchenko' } , { id: 'category', value: 'Featured Artist' } ]
                    },
                    {
                        name: 'Barbara Pastorino',
                        filter: [{ id: 'artist', value: 'Barbara Pastorino' } , { id: 'category', value: 'Featured Artist' } ]
                    },
                    {
                        name: 'JADIS',
                        filter: [{ id: 'artist', value: 'JADIS' } , { id: 'category', value: 'Featured Artist' } ]
                    },
                    {
                        name: 'Huseyin AK',
                        filter: [{ id: 'artist', value: 'Huseyin AK' } , { id: 'category', value: 'Featured Artist' } ]
                    },
                    {
                        name: 'Jan Baumeister',
                        filter: [{ id: 'artist', value: 'Jan Baumeister' } , { id: 'category', value: 'Featured Artist' } ]
                    },
                ]
            },
        ],
    },
    {
        name: 'Painting',
        child: [
            {
                name: 'STYLE',
                child: [
                    {
                        name: 'Abstract',
                        filter: [{ id: 'style', value: 'abstract' } , { id: 'category', value: 'Painting' }]
                    },
                    {
                        name: 'Figurative',
                        filter: [{ id: 'style', value: 'figurative' } , { id: 'category', value: 'Painting' } ]
                    },
                    {
                        name: 'Impressionism',
                        filter: [{ id: 'style', value: 'impressionism' } , { id: 'category', value: 'Painting' } ]
                    },
                    {
                        name: 'Realism',
                        filter: [{ id: 'style', value: 'realism' } , { id: 'category', value: 'Painting' } ]
                    },
                    {
                        name: 'Pop Art',
                        filter: [{ id: 'style', value: 'pop art' } , { id: 'category', value: 'Painting' } ]
                    },
                ],
            },
            {
                name: 'THEME',
                child: [
                    {
                        name: 'Landscape',
                        filter: [{ id: 'theme', value: 'landscape' } , { id: 'category', value: 'Painting' }]
                    },
                    {
                        name: 'Portrait',
                        filter: [{ id: 'theme', value: 'portrait' } , { id: 'category', value: 'Painting' } ]
                    },
                    {
                        name: 'Floral',
                        filter: [{ id: 'theme', value: 'floral' } , { id: 'category', value: 'Painting' }]
                    },
                    {
                        name: 'Urban',
                        filter: [{ id: 'theme', value: 'urban' } , { id: 'category', value: 'Painting' } ]
                    },
                    {
                        name: 'Pop Culture',
                        filter: [{ id: 'theme', value: 'pop culture' } , { id: 'category', value: 'Painting' }]
                    },
                ],
            },
            {
                name: 'SHOP BY',
                child: [
                    {
                        name: 'Seasonal',
                        filter: []
                    },
                    {
                        name: 'Promotion',
                        filter: []
                    },
                    {
                        name: 'New In ',
                        filter: []
                    },
                    {
                        name: 'Price +',
                        filter: []
                    },
                    {
                        name: 'Size +',
                        filter: []
                    },
                    {
                        name: 'Color +',
                        filter: []
                    },
                    {
                        name: 'Technique +',
                        filter: []
                    },
                ],
            },
        ],
    },
    {
        name: 'Print',
        child: [
            {
                name: 'FAMOUS ARTIST',
                child: [
                    {
                        name: 'Pablo Picasso',
                        filter: [{ id: 'artist', value: 'pablo picasso' } , { id: 'category', value: 'Print' }]
                    },
                    {
                        name: 'Salvador Dali',
                        filter: [{ id: 'artist', value: 'salvador dali' } , { id: 'category', value: 'Print' }]
                    },
                    {
                        name: 'Banksy',
                        filter: [{ id: 'artist', value: 'banksy' } , { id: 'category', value: 'Print' } ]
                    },
                    {
                        name: 'Shepard Fairy',
                        filter: [{ id: 'artist', value: 'shepard fairy' } , { id: 'category', value: 'Print' } ]
                    },
                    {
                        name: 'Marc Chagal',
                        filter: [{ id: 'artist', value: 'marc chagal' } , { id: 'category', value: 'Print' }]
                    },
                ]
            },
            {
                name: 'PRINTS',
                child: [
                    {
                        name: 'Pablo Picasso',
                        filter: [{ id: 'artist', value: 'Pablo Picasso' } , ]
                    },
                    {
                        name: 'Salvador Dali',
                        filter: [{ id: 'artist', value: 'Salvador Dali' } , ]
                    },
                    {
                        name: 'Banksy',
                        filter: [{ id: 'artist', value: 'Banksy' } , ]
                    },
                    {
                        name: 'Shepard Fairy',
                        filter: [{ id: 'artist', value: 'Shepard Fairy' } , ]
                    },
                    {
                        name: 'Marc Chagal',
                        filter: [{ id: 'artist', value: 'Marc Chagal' } , ]
                    },
                ]
            },
            {
                name: 'STYLE',
                child: [
                    {
                        name: 'Abstract',
                        filter: [{ id: 'style', value: 'Abstract' } , { id: 'category', value: 'Print' } ]
                    },
                    {
                        name: 'Figurative',
                        filter: [{ id: 'style', value: 'Figurative' } , { id: 'category', value: 'Print' } ]
                    },
                    {
                        name: 'Impressionism',
                        filter: [{ id: 'style', value: 'Impressionism' } , { id: 'category', value: 'Print' } ]
                    },
                    {
                        name: 'Realism',
                        filter: [{ id: 'style', value: 'Realism' } , { id: 'category', value: 'Print' } ]
                    },
                    {
                        name: 'Pop Art',
                        filter: [{ id: 'style', value: 'Pop Art' } , { id: 'category', value: 'Print' } ]
                    },
                    {
                        name: 'Vintage',
                        filter: [{ id: 'style', value: 'Vintage' } , { id: 'category', value: 'Print' } ]
                    },
                ],
            },
            {
                name: 'SHOP BY',
                child: [
                    {
                        name: 'Seasonal',
                        filter: []
                    },
                    {
                        name: 'Promotion',
                        filter: []
                    },
                    {
                        name: 'New In ',
                        filter: []
                    },
                    {
                        name: 'Price +',
                        filter: []
                    },
                    {
                        name: 'Size +',
                        filter: []
                    },
                    {
                        name: 'Color +',
                        filter: []
                    },
                    {
                        name: 'Technique +',
                        filter: []
                    },
                ],
            },
        ],
    },
    {
        name: 'Photography',
        child: [
            {
                name: 'STYLE',
                child: [
                    {
                        name: 'Color',
                        filter: [{ id: 'style', value: 'Color' } , { id: 'category', value: 'Photography' } ]
                    },
                    {
                        name: 'Black And White',
                        filter: [{ id: 'style', value: 'Black And White' } , { id: 'category', value: 'Photography' } ]
                    },
                    {
                        name: 'Sepia',
                        filter: [{ id: 'style', value: 'Sepia' } , { id: 'category', value: 'Photography' } ]
                    },
                    {
                        name: 'Digital',
                        filter: [{ id: 'style', value: 'Digital' } , { id: 'category', value: 'Photography' } ]
                    },
                    {
                        name: 'Street Photo',
                        filter: [{ id: 'style', value: 'Street Photo' } , { id: 'category', value: 'Photography' } ]
                    },
                ]
            },
            {
                name: 'THEME',
                child: [
                    {
                        name: 'Landscape',
                        filter: [{ id: 'theme', value: 'Landscape' } , { id: 'category', value: 'Photography' } ]
                    },
                    {
                        name: 'Urban',
                        filter: [{ id: 'theme', value: 'Urban' } , { id: 'category', value: 'Photography' } ]
                    },
                    {
                        name: 'Portrait',
                        filter: [{ id: 'theme', value: 'Portrait' } , { id: 'category', value: 'Photography' } ]
                    },
                    {
                        name: 'Nature',
                        filter: [{ id: 'theme', value: 'Nature' } , { id: 'category', value: 'Photography' } ]
                    },
                    {
                        name: 'Travel',
                        filter: [{ id: 'theme', value: 'Travel' } , { id: 'category', value: 'Photography' } ]
                    },
                ]
            },
            {
                name: 'SHOP BY',
                child: [
                    {
                        name: 'Seasonal',
                        filter: []
                    },
                    {
                        name: 'Promotion',
                        filter: []
                    },
                    {
                        name: 'New In',
                        filter: []
                    },
                    {
                        name: 'Price +',
                        filter: []
                    },
                    {
                        name: 'Size +',
                        filter: []
                    },
                ]
            },
        ],
    },
    {
        name: 'Sculpture',
        child: [
            {
                name: 'STYLE',
                child: [
                    {
                        name: 'Color',
                        filter: [{ id: 'style', value: 'Color' } , { id: 'category', value: 'Sculpture' } ]
                    },
                    {
                        name: 'Black And White',
                        filter: [{ id: 'style', value: 'Black And White' } , { id: 'category', value: 'Sculpture' } ]
                    },
                    {
                        name: 'Sepia',
                        filter: [{ id: 'style', value: 'Black And White' } , { id: 'category', value: 'Sculpture' } ]
                    },
                    {
                        name: 'Digital',
                        filter: [{ id: 'style', value: 'Black And White' } , { id: 'category', value: 'Sculpture' } ]
                    },
                    {
                        name: 'Street Photo',
                        filter: [{ id: 'style', value: 'Street Photo' } , { id: 'category', value: 'Sculpture' } ]
                    },
                ]
            },
            {
                name: 'THEME',
                child: [
                    {
                        name: 'Landscape',
                        filter: [{ id: 'theme', value: 'Landscape' } , { id: 'category', value: 'Sculpture' } ]
                    },
                    {
                        name: 'Urban',
                        filter: [{ id: 'theme', value: 'Urban' } , { id: 'category', value: 'Sculpture' } ]
                    },
                    {
                        name: 'Portrait',
                        filter: [{ id: 'theme', value: 'Portrait' } , { id: 'category', value: 'Sculpture' } ]
                    },
                    {
                        name: 'Nature',
                        filter: [{ id: 'theme', value: 'Nature' } , { id: 'category', value: 'Sculpture' } ]
                    },
                    {
                        name: 'Travel',
                        filter: [{ id: 'theme', value: 'Travel' } , { id: 'category', value: 'Sculpture' } ]
                    },
                ]
            },
            {
                name: 'SHOP BY',
                child: [
                    {
                        name: 'Seasonal',
                        filter: []
                    },
                    {
                        name: 'Promotion',
                        filter: []
                    },
                    {
                        name: 'New In',
                        filter: []
                    },
                    {
                        name: 'Price +',
                        filter: []
                    },
                    {
                        name: 'Size +',
                        filter: []
                    },
                ]
            },
        ],
    },
    {
        name: 'Drawing',
        child: [
            {
                name: 'STYLE',
                child: [
                    {
                        name: 'Abstract',
                        filter: [{ id: 'style', value: 'Abstract' } , { id: 'category', value: 'Drawing' } ]
                    },
                    {
                        name: 'Figurative',
                        filter: [{ id: 'style', value: 'Figurative' } , { id: 'category', value: 'Drawing' }]
                    },
                    {
                        name: 'Impressionisn',
                        filter: [{ id: 'style', value: 'Impressionisn' } , { id: 'category', value: 'Drawing' } ]
                    },
                    {
                        name: 'Realism',
                        filter: [{ id: 'style', value: 'Realism' } , { id: 'category', value: 'Drawing' } ]
                    },
                    {
                        name: 'Pop Art',
                        filter: [{ id: 'style', value: 'Pop Art' } , { id: 'category', value: 'Drawing' } ]
                    },
                ]
            },
            {
                name: 'THEME',
                child: [
                    {
                        name: 'Landscape',
                        filter: [{ id: 'theme', value: 'Landscape' } , { id: 'category', value: 'Drawing' } ]
                    },
                    {
                        name: 'Urban',
                        filter: [{ id: 'theme', value: 'Urban' } , { id: 'category', value: 'Drawing' } ]
                    },
                    {
                        name: 'Portrait',
                        filter: [{ id: 'theme', value: 'Portrait' } , { id: 'category', value: 'Drawing' } ]
                    },
                    {
                        name: 'Floral',
                        filter: [{ id: 'theme', value: 'Floral' } , { id: 'category', value: 'Drawing' } ]
                    },
                    {
                        name: 'Urban',
                        filter: [{ id: 'theme', value: 'Urban' } , { id: 'category', value: 'Drawing' } ]
                    },
                    {
                        name: 'Pop Culture',
                        filter: [{ id: 'theme', value: 'Pop Culture' } , { id: 'category', value: 'Drawing' } ]
                    },
                ]
            },
            {
                name: 'SHOP BY',
                child: [
                    {
                        name: 'Seasonal',
                        filter: []
                    },
                    {
                        name: 'Promotion',
                        filter: []
                    },
                    {
                        name: 'New In',
                        filter: []
                    },
                    {
                        name: 'Price +',
                        filter: []
                    },
                    {
                        name: 'Size +',
                        filter: []
                    },
                    {
                        name: 'Color +',
                        filter: []
                    },
                    {
                        name: 'Technique +',
                        filter: []
                    },
                ]
            },
        ],
    },
    {
        name: 'More',
        child: [
            {
                name: 'STYLE',
                child: [
                    {
                        name: 'Abstract',
                        filter: [{ id: 'style', value: 'Abstract' } , ]
                    },
                    {
                        name: 'Figurative',
                        filter: [{ id: 'style', value: 'Figurative' } , ]
                    },
                    {
                        name: 'Impressionisn',
                        filter: [{ id: 'style', value: 'Impressionisn' } , ]
                    },
                    {
                        name: 'Realism',
                        filter: [{ id: 'style', value: 'Realism' } , ]
                    },
                    {
                        name: 'Pop Art',
                        filter: [{ id: 'style', value: 'Pop Art' } , ]
                    },
                ]
            },
            {
                name: 'THEME',
                child: [
                    {
                        name: 'Landscape',
                        filter: [{ id: 'theme', value: 'Landscape' } , ]
                    },
                    {
                        name: 'Urban',
                        filter: [{ id: 'theme', value: 'Urban' } , ]
                    },
                    {
                        name: 'Portrait',
                        filter: [{ id: 'theme', value: 'Portrait' } , ]
                    },
                    {
                        name: 'Floral',
                        filter: [{ id: 'theme', value: 'Floral' } , ]
                    },
                    {
                        name: 'Urban',
                        filter: [{ id: 'theme', value: 'Urban' } , ]
                    },
                    {
                        name: 'Pop Culture',
                        filter: [{ id: 'theme', value: 'Pop Culture' } , ]
                    },
                ]
            },
            {
                name: 'SHOP BY',
                child: [
                    {
                        name: 'Seasonal',
                        filter: []
                    },
                    {
                        name: 'Promotion',
                        filter: []
                    },
                    {
                        name: 'New In',
                        filter: []
                    },
                    {
                        name: 'Price +',
                        filter: []
                    },
                    {
                        name: 'Size +',
                        filter: []
                    },
                    {
                        name: 'Color +',
                        filter: []
                    },
                    {
                        name: 'Technique +',
                        filter: []
                    },
                ]
            },
        ],
    },
    {
        name: 'Artists',
        child: [
            {
                name: 'ARTIST CATEGORIES',
                child: [
                    {
                        name: 'Famous Artist',
                        filter: [{ id: 'artist', value: 'pablo picasso' } , { id: 'category', value: 'Artists' } ]
                    },
                    {
                        name: 'Best Selling Artist',
                        filter: [{ id: 'artist', value: 'best selling artist' } , { id: 'category', value: 'Artists' } ]
                    },
                    {
                        name: 'Curators Sellection',
                        filter: [{ id: 'artist', value: 'Curators Sellection' } , { id: 'category', value: 'Artists' } ]
                    },
                    {
                        name: 'Featured Artist',
                        filter: [{ id: 'artist', value: 'featured artist' } , { id: 'category', value: 'Artists' } ]
                    },
                ]
            },
            {
                name: 'FEATURED ARTIST',
                child: [
                    {
                        name: 'Jorge Nava',
                        filter: [{ id: 'artist', value: 'jorge nava' } ,  { id: 'category', value: 'Artists' }]
                    },
                    {
                        name: 'Pasquale Rapicano',
                        filter: [{ id: 'artist', value: 'pasquale rapicano' } ,  { id: 'category', value: 'Artists' } ]
                    },
                    {
                        name: 'Silivia Ingrid',
                        filter: [{ id: 'artist', value: 'silivia ingrid' } ,  { id: 'category', value: 'Artists' } ]
                    },
                    {
                        name: 'Hummer',
                        filter: [{ id: 'artist', value: 'hummer' } , { id: 'category', value: 'Artists' } ]
                    },
                    {
                        name: 'Marc Crossmann',
                        filter: [{ id: 'artist', value: 'marc crossmann' } , { id: 'category', value: 'Artists' } ]
                    },
                    {
                        name: 'Ulrike Gaiser',
                        filter: [{ id: 'artist', value: 'ulrike gaiser' } ,  { id: 'category', value: 'Artists' } ]
                    },
                    {
                        name: 'Deniela Schreiber',
                        filter: [{ id: 'artist', value: 'deniela schreiber' } , { id: 'category', value: 'Artists' } ]
                    },
                    {
                        name: 'Hector Bouchet',
                        filter: [{ id: 'artist', value: 'hector bouchet' } ,  { id: 'category', value: 'Artists' } ]
                    },
                    {
                        name: 'Jose Rizzo',
                        filter: [{ id: 'artist', value: 'jose rizzo' } ,  { id: 'category', value: 'Artists' } ]
                    },
                    {
                        name: 'ozziuaan',
                        filter: [{ id: 'artist', value: 'ozziuaan' } ,  { id: 'category', value: 'Artists' } ]
                    },
                    {
                        name: 'Whitney Shirley',
                        filter: [{ id: 'artist', value: 'pablo picasso' } ,  { id: 'category', value: 'Artists' } ]
                    }
                ],
            },
        ],
    }
]

module.exports = menus;