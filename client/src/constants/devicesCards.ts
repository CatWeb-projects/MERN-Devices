import { DevicesCardProps } from "@/types/devicesCard.type";

export const devicesCards: Record<string, DevicesCardProps> = {
  smartphones: {
    link: '/smartphones',
    imgUrl:
      '/images/phones_new.webp'
  },
  laptops: {
    link: '/laptops',
    imgUrl:
    '/images/laptop_new.webp'
  },
  gadgets: {
    link: '/gadgets',
    imgUrl:
      '/images/gadget_new.webp'
  },
  audio: {
    link: '/audio',
    imgUrl: '/images/audio-r.png'
  }
}

// export const devicesCards = [
//   {
//     name: 'smartphones',
//     link: '/smartphones',
//     imgUrl:
//       '/images/phones_new.webp'
//   },
//   {
//     name: 'laptops',
//     link: '/laptops',
//     imgUrl:
//     '/images/laptop_new.webp'
//   },
//   {
//     name: 'gadgets',
//     link: '/gadgets',
//     imgUrl:
//       '/images/gadget_new.webp'
//   },
//   {
//     name: 'audio',
//     link: '/audio',
//     imgUrl: '/images/audio-r.png'
//   }
// ];