export const quickLinks = [
  {
    name: 'smartphones',
    subCategories: [
      {
        quickLinksName: 'Smartphones',
        links: [
          {
            title: 'All smartphones'
          },
          {
            title: 'Apple',
            properties: 'apple'
          },
          {
            title: 'Samsung',
            properties: 'samsung'
          },
          {
            title: 'Xiaomi',
            properties: 'xiaomi'
          }
        ]
      },
      {
        quickLinksName: 'Tablets',
        links: [
          {
            title: 'All Tablets',
            categoryLink: 'tablets'
          },
          {
            title: 'Apple',
            properties: 'apple',
            categoryLink: 'tablets'
          },
          {
            title: 'iPad 2021',
            properties: 'ipad-2021',
            categoryLink: 'tablets'
          }
        ]
      },
      {
        quickLinksName: 'Accessories',
        links: ['Powerbanks', 'Covers']
      }
    ]
  },
  {
    name: 'laptops',
    subCategories: [
      {
        quickLinksName: 'Laptop',
        links: [
          {
            title: 'All Laptops'
          },
          'Gaming',
          {
            title: 'Apple',
            properties: 'apple'
          },
          {
            title: 'Lenovo',
            properties: 'lenovo'
          },
          {
            title: 'Asus',
            properties: 'asus'
          }
        ]
      },
      {
        quickLinksName: 'Components',
        links: ['RAM', 'HDD']
      },
      {
        quickLinksName: 'Peripherials',
        links: ['Mouse', 'Keyboard', 'Web Camera']
      }
    ]
  },
  {
    name: 'gadgets',
    subCategories: [
      {
        quickLinksName: 'Gadgets',
        links: [
          {
            title: 'All Gadgets'
          },
          {
            title: 'Playstation 5',
            properties: 'sony-playstation-5-white',
            getInfo: true
          },
          {
            title: 'Go Pro',
            properties: 'go-pro'
          }
        ]
      }
    ]
  },
  {
    name: 'apple',
    subCategories: [
      {
        quickLinksName: 'Apple',
        links: [
          {
            title: 'Apple'
          },
          {
            title: 'Macbook',
            properties: 'macbook'
          },
          {
            title: 'MacBook Pro 16-inch 2019',
            properties: 'apple-macbook-pro-16-inch-space-1gray',
            getInfo: true
          },
          {
            title: 'MacBook Pro 13 2020',
            properties: 'macbook-pro-13-2020-myd82zpa',
            getInfo: true
          }
        ]
      }
    ]
  }
];
