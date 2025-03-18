

const menus = [
    {
        name : 'NewIn',
        child: [
            {
                name: 'NewArtworks',
                child: [
                    {
                        name: 'Under 50000'
                    },
                    {
                        name: 'Under 100000'
                    },
                    {
                        name: 'Under 250000'
                    },
                    {
                        name: 'Over 250000'
                    },
                ]
            },
            {
                name: 'New Collections',
                child: [
                    {
                        name: 'Inspired by Memphis'
                    },
                    {
                        name: 'Milano'
                    },
                    {
                        name: 'Famous Artist: Shades of Blue'
                    },
                    {
                        name: 'Art Brut-Inspired'
                    },
                    {
                        name: 'New & Notable'
                    },
                    {
                        name: 'February'
                    },
                    {
                        name: 'Explore All Collection'
                    },
                ]
            },
            {
                name: 'Featured Artist',
                child: [
                    {
                        name: 'Alex Senchenko'
                    },
                    {
                        name: 'Barbara Pastorino'
                    },
                    {
                        name: 'JADIS'
                    },
                    {
                        name: 'Huseyin AK'
                    },
                    {
                        name: 'Jan Baumeister'
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
                    { name: 'Abstract' },
                    { name: 'Figurative' },
                    { name: 'Impressionism' },
                    { name: 'Realism' },
                    { name: 'Pop Art' },
                ], 
            },
            {
                name: 'THEME',
                child: [
                    { name: 'Landscape' },
                    { name: 'Portrait' },
                    { name: 'Floral' },
                    { name: 'Urban' },
                    { name: 'Pop Culture' },
                ], 
            },
            {
                name: 'SHOP BY',
                child: [
                    { name: 'Seasonal' },
                    { name: 'Promotion' },
                    { name: 'New In ' },
                    { name: 'Price +' },
                    { name: 'Size +' },
                    { name: 'Color +' },
                    { name: 'Technique +' },
                ], 
            },
        ],
    },
    {
        name: 'Print',
        child: [
            { 
              name: 'FAMOUS ARTIST',
              child: []
            },
            {
                name: 'PRINTS',
                child: [
                    { name: 'Pablo Picasso' },
                    { name: 'Salvador Dali' },
                    { name: 'Banksy' },
                    { name: 'Shepard Fairy' },
                    { name: 'Marc Chagal' },
                ]
            },
            {
                name: 'STYLE',
                child: [
                    { name: 'Abstract' },
                    { name: 'Figurative' },
                    { name: 'Impressionism' },
                    { name: 'Realism' },
                    { name: 'Pop Art' },
                    { name: 'Vintage' },
                ], 
            },
            {
                name: 'SHOP BY',
                child: [
                    { name: 'Seasonal' },
                    { name: 'Promotion' },
                    { name: 'New In ' },
                    { name: 'Price +' },
                    { name: 'Size +' },
                    { name: 'Color +' },
                    { name: 'Technique +' },
                ], 
            },
        ],
    },
    {
        name: 'Photography',
        child: [
            { name: 'STYLE',
              child: [
                { name: 'Color' },
                { name: 'Black And White' },
                { name: 'Sepia' },
                { name: 'Digital' },
                { name: 'Street Photo' },
              ]
            },
            { name: 'THEME',
                child: [
                  { name: 'Landscape' },
                  { name: 'Urban' },
                  { name: 'Portrait' },
                  { name: 'Nature' },
                  { name: 'Travel' },
                ]
            },
            { name: 'SHOP BY',
                child: [
                  { name: 'Seasonal' },
                  { name: 'Promotion' },
                  { name: 'New In' },
                  { name: 'Price +' },
                  { name: 'Size +' },
                ]
            },
        ],
    },
    {
        name: 'Sculpture',
        child: [
            { name: 'STYLE',
              child: [
                { name: 'Color' },
                { name: 'Black And White' },
                { name: 'Sepia' },
                { name: 'Digital' },
                { name: 'Street Photo' },
              ]
            },
            { name: 'THEME',
                child: [
                  { name: 'Landscape' },
                  { name: 'Urban' },
                  { name: 'Portrait' },
                  { name: 'Nature' },
                  { name: 'Travel' },
                ]
            },
            { name: 'SHOP BY',
                child: [
                  { name: 'Seasonal' },
                  { name: 'Promotion' },
                  { name: 'New In' },
                  { name: 'Price +' },
                  { name: 'Size +' },
                ]
            },
        ],
    },
    {
        name: 'Drawing',
        child: [
            { name: 'STYLE',
              child: [
                { name: 'Abstract' },
                { name: 'Figurative' },
                { name: 'Impressionisn' },
                { name: 'Realism' },
                { name: 'Pop Art' },
              ]
            },
            { name: 'THEME',
                child: [
                  { name: 'Landscape' },
                  { name: 'Urban' },
                  { name: 'Portrait' },
                  { name: 'Floral' },
                  { name: 'Urban' },
                  { name: 'Pop Culture' },
                ]
            },
            { name: 'SHOP BY',
                child: [
                  { name: 'Seasonal' },
                  { name: 'Promotion' },
                  { name: 'New In' },
                  { name: 'Price +' },
                  { name: 'Size +' },
                  { name: 'Color +' },
                  { name: 'Technique +' },
                ]
            },
        ],
    },
    {
        name: 'More',
        child: [
            { name: 'STYLE',
              child: [
                { name: 'Abstract' },
                { name: 'Figurative' },
                { name: 'Impressionisn' },
                { name: 'Realism' },
                { name: 'Pop Art' },
              ]
            },
            { name: 'THEME',
                child: [
                  { name: 'Landscape' },
                  { name: 'Urban' },
                  { name: 'Portrait' },
                  { name: 'Floral' },
                  { name: 'Urban' },
                  { name: 'Pop Culture' },
                ]
            },
            { name: 'SHOP BY',
                child: [
                  { name: 'Seasonal' },
                  { name: 'Promotion' },
                  { name: 'New In' },
                  { name: 'Price +' },
                  { name: 'Size +' },
                  { name: 'Color +' },
                  { name: 'Technique +' },
                ]
            },
        ],
    },
    {
        name: 'Artist',
        child: [
            { name: 'ARTIST CATEGORIES', 
              child: [
                { name: 'Famous Artist' },
                { name: 'Best Selling Artist' },
                { name: 'Curators Sellection' },
                { name: 'Featured Artist' },
              ]
            },
            { name: 'FEATURED ARTIST', 
              child: [
                { name: 'Jorge Nava' },
                { name: 'Pasquale Rapicano' },
                { name: 'Silivia Ingrid' },
                { name: 'Hummer' },
                { name: 'Marc Crossmann' },
                { name: 'Ulrike Gaiser' },
                { name: 'Deniela Schreiber' },
                { name: 'Hector Bouchet' },
                { name: 'Jose Rizzo' },
                { name: 'ozziuaan' },
                { name: 'Whitney Shirley' }
              ],
            },
        ],
    }
]

module.exports = menus;