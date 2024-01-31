import { forwardRef, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMousePosition } from '../../../hooks/use-mouse-position';
import { cn } from '../../../lib/tailwind';
import type { GalleryImage as GalleryImageType } from '../Home.types';
import { ImageTitle } from './ImageTitle';

type GalleryImageProps = GalleryImageType & {
  index: number;
};

export const GalleryImage = forwardRef<HTMLAnchorElement, GalleryImageProps>(
  (
    {
      id,
      src,
      slug,
      title,
      aspectRatio,
      width,
      marginTop,
      alignment,
      zIndex,
      index,
    },
    targetRef?,
  ) => {
    const [showTitle, setShowTitle] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);
    const mousePosition = useMousePosition();

    const widthMapping = {
      small: 'w-[10vw]',
      medium: 'w-[20vw]',
      large: 'w-[30vw]',
      'x-large': 'w-[40vw]',
    };

    const marginTopMapping = {
      negative: '-mt-32',
      null: 'mt-0',
      positive: 'mt-32',
    };

    const alignmentMapping = {
      '0%': 'ml-0',
      '15%': 'ml-[15%]',
      '30%': 'ml-[30%]',
      '50%': 'ml-[50%]',
      '70%': 'justify-self-end mr-[30%]',
      '85%': 'justify-self-end mr-[15%]',
      '100%': 'justify-self-end',
    };

    return (
      <>
        <Link
          to={slug}
          className={cn(
            widthMapping[width],
            alignmentMapping[alignment],
            index !== 0 && marginTopMapping[marginTop],
          )}
          ref={targetRef}
        >
          <img
            key={id}
            src={src}
            alt={title}
            // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
            onMouseOver={() => setShowTitle(true)}
            // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
            onMouseOut={() => setShowTitle(false)}
            className="relative"
            style={{ aspectRatio, zIndex }}
            ref={imageRef}
          />
        </Link>
        {showTitle && mousePosition && (
          <ImageTitle
            title={title}
            zIndex={zIndex}
            mousePosition={mousePosition}
          />
        )}
      </>
    );
  },
);

GalleryImage.displayName = 'GalleryImage';
