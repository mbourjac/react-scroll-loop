import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../../lib/tailwind';
import type { GalleryImage as GalleryImageType } from '../Home.types';

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
          className="relative"
          style={{ aspectRatio, zIndex }}
        />
      </Link>
    );
  },
);

GalleryImage.displayName = 'GalleryImage';
