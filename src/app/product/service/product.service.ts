import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  items = [
    {
      imgUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      title: 'Noteworthy technology acquisitions 2021',
      quantity: 3,
      id: 1,
      description:
        'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg',
      title: 'Innovative Startup Success Stories',
      quantity: 6,
      description:
        'Discover some of the most groundbreaking startup stories from the past year.',
      id: 2,
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
      title: 'Tech Giants and Mergers',
      description:
        'A deep dive into the strategic mergers happening across the tech world.',
      quantity: 10,
      id: 3,
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg',
      title: 'Emerging Tech Trends',
      description:
        'Explore the newest trends in technology shaping the future of industries.',
      quantity: 7,
      id: 4,
    },
  ];
}
