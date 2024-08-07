import { ApiResponseOptions } from '@nestjs/swagger';

export const okAddToFavoritesResponse: ApiResponseOptions = {
  schema: {
    example: {
      favorites: {
        limit: 8,
        page: 1,
        totalCount: 9,
        totalPages: 2,
        devices: [
          {
            id: 1,
            name: 'Xiaomi Redmi Note 9 Pro 6GB 64GB, Gray',
            price: 4399,
            credit: 287,
            cashback: 300,
            model: 'Redmi Note 9 Pro',
            color: 'Gray',
            weight: 209,
            popularity: 90,
            manufacturer: 'Xiaomi',
            imageUrl:
              'https://darwin.md/images/product/2020/06/redmi_note_9_pro_gray_5-200605035405-darwin.webp',
            type: 'smartphones',
            link: 'redmi-note-9-pro-64-gb-gray',
            colors: ['gray', 'green', 'white'],
            memoryOptions: [64, 128],
            camera: 64,
            frontCamera: 16,
            chipset: 'Qualcomm SM7125 Snapdragon 720G',
            processor: 'Octa Core',
            resolution: '1080 x 2400',
            hardDrive: 64,
            memory: 6
          },
          {
            id: 2,
            name: 'Samsung Galaxy A52 4 GB / 128 GB Violet',
            price: 7399,
            credit: 740,
            cashback: 206,
            model: 'Galaxy A52',
            color: 'Violet',
            weight: 189,
            popularity: 95,
            manufacturer: 'Samsung',
            imageUrl:
              'https://darwin.md/images/product/2021/05/darwin-samsung-galaxy-a52-4-gb-128-gb-violet-0.webp',
            type: 'smartphones',
            link: `samsung-galaxy-a52-128-gb-violet`,
            colors: ['blue', 'violet', 'white', 'black'],
            memoryOptions: [128, 256],
            camera: 64,
            frontCamera: 32,
            chipset: 'Qualcomm SM7125 Snapdragon 720G',
            processor: 'Octa Core',
            resolution: '1080 x 2400',
            hardDrive: 128,
            memory: 4
          }
        ]
      }
    }
  }
};
