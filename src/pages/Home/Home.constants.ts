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
    slug: 'lorem',
    title: 'Lorem',
    width: 'large',
    aspectRatio: 3 / 4,
    marginTop: 'negative',
    zIndex: 'between',
    alignment: '100%',
  },
  {
    id: 'ipsum',
    src: ipsum,
    slug: 'ipsum',
    title: 'Ipsum',
    width: 'medium',
    aspectRatio: 2 / 3,
    marginTop: 'positive',
    zIndex: 'under',
    alignment: '15%',
  },
  {
    id: 'dolor',
    src: dolor,
    slug: 'dolor',
    title: 'Dolor',
    width: 'large',
    aspectRatio: 2 / 3,
    marginTop: 'negative',
    zIndex: 'over',
    alignment: '50%',
  },
  {
    id: 'tempore',
    src: tempore,
    slug: 'tempore',
    title: 'Tempore',
    width: 'x-large',
    aspectRatio: 3 / 4,
    marginTop: 'positive',
    zIndex: 'between',
    alignment: '100%',
  },
  {
    id: 'laborum',
    src: laborum,
    slug: 'laborum',
    title: 'Laborum',
    width: 'large',
    aspectRatio: 3 / 2,
    marginTop: 'negative',
    zIndex: 'between',
    alignment: '0%',
  },
  {
    id: 'voluptas',
    src: voluptas,
    slug: 'voluptas',
    title: 'Voluptas',
    width: 'large',
    aspectRatio: 2 / 3,
    marginTop: 'positive',
    zIndex: 'over',
    alignment: '85%',
  },
  {
    id: 'veritatis',
    src: veritatis,
    slug: 'veritatis',
    title: 'Veritatis',
    width: 'medium',
    aspectRatio: 3 / 2,
    marginTop: 'positive',
    zIndex: 'between',
    alignment: '15%',
  },
  {
    id: 'pariatur',
    src: pariatur,
    slug: 'pariatur',
    title: 'Pariatur',
    width: 'medium',
    aspectRatio: 2 / 3,
    marginTop: 'positive',
    zIndex: 'over',
    alignment: '0%',
  },
];
