import { ApiResponseOptions } from '@nestjs/swagger';

export const collectionResponse: ApiResponseOptions = {
  schema: {
    example: {
      collection: [
        {
          id: 1001,
          name: 'Musical Instruments',
          translate: 'musical_instruments',
          link: '/musical-instruments',
          imgUrl: 'https://wallpapercave.com/wp/wp2842327.jpg'
        },
        {
          id: 1002,
          name: 'Travels',
          translate: 'travels',
          link: '/travels',
          imgUrl:
            'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8&w=1000&q=80'
        }
      ]
    }
  }
};
