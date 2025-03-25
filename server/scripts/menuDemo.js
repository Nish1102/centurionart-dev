

const menus = [
    {
        name: 'New In',
        child: [
            {
                name: 'NewArtworks',
                child: [
                    {
                        name: 'Under 50000',
                        filter: [{ id: 'price', val: 50000 } , { id: 'tag', val: 'new' }]
                    },
                    {
                        name: 'Under 100000',
                        filter: [{ id: 'price', val: 100000 } , { id: 'tag', val: 'new' }]
                    },
                    {
                        name: 'Under 250000',
                        filter: [{ id: 'price', val: 100000 } , { id: 'tag', val: 'new' }]
                    },
                    {
                        name: 'Over 250000',
                        filter: [{ id: 'price', val: 250000 } , { id: 'tag', val: 'new' }]
                    },
                ]
            },
            {
                name: 'New Collections',
                child: [
                    {
                        name: 'Inspired by Memphis',
                        filter: []
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
                        filter: [],
                    },
                    {
                        name: 'Barbara Pastorino',
                        filter: []
                    },
                    {
                        name: 'JADIS',
                        filter: []
                    },
                    {
                        name: 'Huseyin AK',
                        filter: []
                    },
                    {
                        name: 'Jan Baumeister',
                        filter: []
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
                        filter: [{ id: 'style', val: 'abstract' } , ]
                    },
                    {
                        name: 'Figurative',
                        filter: [{ id: 'style', val: 'figurative' } , ]
                    },
                    {
                        name: 'Impressionism',
                        filter: [{ id: 'style', val: 'impressionism' } , ]
                    },
                    {
                        name: 'Realism',
                        filter: [{ id: 'style', val: 'realism' } , ]
                    },
                    {
                        name: 'Pop Art',
                        filter: [{ id: 'style', val: 'pop art' } , ]
                    },
                ],
            },
            {
                name: 'THEME',
                child: [
                    {
                        name: 'Landscape',
                        filter: [{ id: 'theme', val: 'landscape' } , ]
                    },
                    {
                        name: 'Portrait',
                        filter: [{ id: 'theme', val: 'portrait' } , ]
                    },
                    {
                        name: 'Floral',
                        filter: [{ id: 'theme', val: 'floral' } , ]
                    },
                    {
                        name: 'Urban',
                        filter: [{ id: 'theme', val: 'urban' } , ]
                    },
                    {
                        name: 'Pop Culture',
                        filter: [{ id: 'theme', val: 'pop culture' } , ]
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
                        filter: [{ id: 'artist', val: 'Pablo Picasso' } , ]
                    },
                    {
                        name: 'Salvador Dali',
                        filter: [{ id: 'artist', val: 'Salvador Dali' } , ]
                    },
                    {
                        name: 'Banksy',
                        filter: [{ id: 'artist', val: 'Banksy' } , ]
                    },
                    {
                        name: 'Shepard Fairy',
                        filter: [{ id: 'artist', val: 'Shepard Fairy' } , ]
                    },
                    {
                        name: 'Marc Chagal',
                        filter: [{ id: 'artist', val: 'Marc Chagal' } , ]
                    },
                ]
            },
            {
                name: 'PRINTS',
                child: [
                    {
                        name: 'Pablo Picasso',
                        filter: [{ id: 'artist', val: 'Pablo Picasso' } , ]
                    },
                    {
                        name: 'Salvador Dali',
                        filter: [{ id: 'artist', val: 'Salvador Dali' } , ]
                    },
                    {
                        name: 'Banksy',
                        filter: [{ id: 'artist', val: 'Banksy' } , ]
                    },
                    {
                        name: 'Shepard Fairy',
                        filter: [{ id: 'artist', val: 'Shepard Fairy' } , ]
                    },
                    {
                        name: 'Marc Chagal',
                        filter: [{ id: 'artist', val: 'Marc Chagal' } , ]
                    },
                ]
            },
            {
                name: 'STYLE',
                child: [
                    {
                        name: 'Abstract',
                        filter: []
                    },
                    {
                        name: 'Figurative',
                        filter: []
                    },
                    {
                        name: 'Impressionism',
                        filter: []
                    },
                    {
                        name: 'Realism',
                        filter: []
                    },
                    {
                        name: 'Pop Art',
                        filter: []
                    },
                    {
                        name: 'Vintage',
                        filter: []
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
                        filter: []
                    },
                    {
                        name: 'Black And White',
                        filter: []
                    },
                    {
                        name: 'Sepia',
                        filter: []
                    },
                    {
                        name: 'Digital',
                        filter: []
                    },
                    {
                        name: 'Street Photo',
                        filter: []
                    },
                ]
            },
            {
                name: 'THEME',
                child: [
                    {
                        name: 'Landscape',
                        filter: []
                    },
                    {
                        name: 'Urban',
                        filter: []
                    },
                    {
                        name: 'Portrait',
                        filter: []
                    },
                    {
                        name: 'Nature',
                        filter: []
                    },
                    {
                        name: 'Travel',
                        filter: []
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
                        filter: []
                    },
                    {
                        name: 'Black And White',
                        filter: []
                    },
                    {
                        name: 'Sepia',
                        filter: []
                    },
                    {
                        name: 'Digital',
                        filter: []
                    },
                    {
                        name: 'Street Photo',
                        filter: []
                    },
                ]
            },
            {
                name: 'THEME',
                child: [
                    {
                        name: 'Landscape',
                        filter: []
                    },
                    {
                        name: 'Urban',
                        filter: []
                    },
                    {
                        name: 'Portrait',
                        filter: []
                    },
                    {
                        name: 'Nature',
                        filter: []
                    },
                    {
                        name: 'Travel',
                        filter: []
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
                        filter: []
                    },
                    {
                        name: 'Figurative',
                        filter: []
                    },
                    {
                        name: 'Impressionisn',
                        filter: []
                    },
                    {
                        name: 'Realism',
                        filter: []
                    },
                    {
                        name: 'Pop Art',
                        filter: []
                    },
                ]
            },
            {
                name: 'THEME',
                child: [
                    {
                        name: 'Landscape',
                        filter: []
                    },
                    {
                        name: 'Urban',
                        filter: []
                    },
                    {
                        name: 'Portrait',
                        filter: []
                    },
                    {
                        name: 'Floral',
                        filter: []
                    },
                    {
                        name: 'Urban',
                        filter: []
                    },
                    {
                        name: 'Pop Culture',
                        filter: []
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
                        filter: []
                    },
                    {
                        name: 'Figurative',
                        filter: []
                    },
                    {
                        name: 'Impressionisn',
                        filter: []
                    },
                    {
                        name: 'Realism',
                        filter: []
                    },
                    {
                        name: 'Pop Art',
                        filter: []
                    },
                ]
            },
            {
                name: 'THEME',
                child: [
                    {
                        name: 'Landscape',
                        filter: []
                    },
                    {
                        name: 'Urban',
                        filter: []
                    },
                    {
                        name: 'Portrait',
                        filter: []
                    },
                    {
                        name: 'Floral',
                        filter: []
                    },
                    {
                        name: 'Urban',
                        filter: []
                    },
                    {
                        name: 'Pop Culture',
                        filter: []
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
                        filter: []
                    },
                    {
                        name: 'Best Selling Artist',
                        filter: []
                    },
                    {
                        name: 'Curators Sellection',
                        filter: []
                    },
                    {
                        name: 'Featured Artist',
                        filter: []
                    },
                ]
            },
            {
                name: 'FEATURED ARTIST',
                child: [
                    {
                        name: 'Jorge Nava',
                        filter: []
                    },
                    {
                        name: 'Pasquale Rapicano',
                        filter: []
                    },
                    {
                        name: 'Silivia Ingrid',
                        filter: []
                    },
                    {
                        name: 'Hummer',
                        filter: []
                    },
                    {
                        name: 'Marc Crossmann',
                        filter: []
                    },
                    {
                        name: 'Ulrike Gaiser',
                        filter: []
                    },
                    {
                        name: 'Deniela Schreiber',
                        filter: []
                    },
                    {
                        name: 'Hector Bouchet',
                        filter: []
                    },
                    {
                        name: 'Jose Rizzo',
                        filter: []
                    },
                    {
                        name: 'ozziuaan',
                        filter: []
                    },
                    {
                        name: 'Whitney Shirley',
                        filter: []
                    }
                ],
            },
        ],
    }
]

module.exports = menus;