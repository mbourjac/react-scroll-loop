import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/use-intersection-observer';
import { GalleryImage } from './GalleryImage/GalleryImage';
import { initialGalleryImages } from './Home.constants';
import type { GalleryImage as GalleryImageType } from './Home.types';

export const Home = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImageType[]>([
    ...initialGalleryImages,
  ]);

  const loopIteration = useRef(1);

  const { targetRef, isVisible } = useIntersectionObserver<HTMLAnchorElement>({
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  useEffect(() => {
    if (!isVisible) return;

    setGalleryImages((prevImages) => [
      ...prevImages,
      ...initialGalleryImages.map((image) => ({
        ...image,
        id: `${loopIteration.current}-${image.id}`,
      })),
    ]);
    loopIteration.current++;
  }, [isVisible]);

  return (
    <div className="relative p-4">
      <h1 className="pointer-events-none fixed bottom-[16vw] left-[0.9vw] z-[--heading-lower-z-index] text-[calc(10vw+0.5rem)] font-bold leading-[0.8] mix-blend-overlay">
        Vitae <span className="sr-only">Delectus</span>
      </h1>
      <p
        className="pointer-events-none fixed bottom-[0.5vw] left-0 z-[--heading-greater-z-index] text-[calc(18vw+0.5rem)] font-bold leading-[0.8] mix-blend-overlay"
        aria-hidden
      >
        Delectus
      </p>
      <div className="relative flex h-full w-full flex-col">
        {galleryImages.map((image, index, images) => (
          <div key={image.id} className="relative grid">
            <GalleryImage
              {...image}
              index={index}
              ref={index + 2 === images.length ? targetRef : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
