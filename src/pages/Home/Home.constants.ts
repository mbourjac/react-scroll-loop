import dolor from '../../assets/images/dolor.jpg';
import ipsum from '../../assets/images/ipsum.jpg';
import laborum from '../../assets/images/laborum.jpg';
import lorem from '../../assets/images/lorem.jpg';
import pariatur from '../../assets/images/pariatur.jpg';
import tempore from '../../assets/images/tempore.jpg';
import veritatis from '../../assets/images/veritatis.jpg';
import voluptas from '../../assets/images/voluptas.jpg';
import type { GalleryImage } from './Home.types';

export const initialGalleryImages: GalleryImage[] = [
  {
    id: 'lorem',
    src: lorem,
    title: 'Lorem',
    width: 'large',
    aspectRatio: 3 / 4,
    marginTop: 'negative',
    zIndex: 1,
    alignment: '100%',
  },
  {
    id: 'ipsum',
    src: ipsum,
    title: 'Ipsum',
    width: 'medium',
    aspectRatio: 2 / 3,
    marginTop: 'positive',
    zIndex: 1,
    alignment: '15%',
  },
  {
    id: 'dolor',
    src: dolor,
    title: 'Dolor',
    width: 'large',
    aspectRatio: 2 / 3,
    marginTop: 'negative',
    zIndex: 1,
    alignment: '50%',
  },
  {
    id: 'tempore',
    src: tempore,
    title: 'Tempore',
    width: 'x-large',
    aspectRatio: 3 / 4,
    marginTop: 'positive',
    zIndex: 4,
    alignment: '100%',
  },
  {
    id: 'laborum',
    src: laborum,
    title: 'Laborum',
    width: 'large',
    aspectRatio: 3 / 2,
    marginTop: 'negative',
    zIndex: -1,
    alignment: '0%',
  },
  {
    id: 'voluptas',
    src: voluptas,
    title: 'Voluptas',
    width: 'large',
    aspectRatio: 2 / 3,
    marginTop: 'positive',
    zIndex: 1,
    alignment: '85%',
  },
  {
    id: 'veritatis',
    src: veritatis,
    title: 'Veritatis',
    width: 'medium',
    aspectRatio: 3 / 2,
    marginTop: 'positive',
    zIndex: 1,
    alignment: '15%',
  },
  {
    id: 'pariatur',
    src: pariatur,
    title: 'Pariatur',
    width: 'medium',
    aspectRatio: 2 / 3,
    marginTop: 'positive',
    zIndex: 1,
    alignment: '0%',
  },
];
