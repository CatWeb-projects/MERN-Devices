import { ApiResponseOptions } from '@nestjs/swagger';
import { baseUrl } from '../../../helpers/baseUrl';

export const addSlidersResponse: ApiResponseOptions = {
  schema: {
    example: {
      sliders: [
        {
          id: 1,
          imgUrl: `${baseUrl}/images/anniversary.webp`,
          link: '/offers',
          altName: 'offers',
        },
        {
          id: 2,
          imgUrl: `${baseUrl}/images/macbook_air_14.webp`,
          link: '/macbook-air',
          altName: 'macbook-air',
        },
      ],
    },
  },
};
