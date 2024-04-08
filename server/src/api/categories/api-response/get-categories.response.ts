import { ApiResponseOptions } from '@nestjs/swagger';
import { baseUrl } from '../../../helpers/baseUrl';

export const addCategoriesResponse: ApiResponseOptions = {
  schema: {
    example: {
      categories: [
        {
          id: 1,
          link: '/phones',
          name: 'Phones and Tablets',
          imgUrl: `${baseUrl}/images/smartphones_tablete.webp`,
          shadowColor: '#3fa2cd',
          translate: 'phones',
        },
        {
          id: '2',
          link: '/laptops',
          name: 'Laptops',
          imageUrl: `${baseUrl}/images/laptop_pc.webp`,
          shadowColor: '#58e600',
          translate: 'laptops',
        },
      ],
    },
  },
};
