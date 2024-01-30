export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  aspectRatio: number;
  width: 'small' | 'medium' | 'large' | 'x-large';
  marginTop: 'negative' | 'null' | 'positive';
  alignment: '0%' | '15%' | '30%' | '50%' | '70%' | '85%' | '100%';
  zIndex: number;
}
