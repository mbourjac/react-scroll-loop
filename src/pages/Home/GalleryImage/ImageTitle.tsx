import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useWindowSize } from '../../../hooks/use-window-size';

type ImageTitleProps = {
  title: string;
  zIndex: number;
  mousePosition: {
    mouseX: number;
    mouseY: number;
  };
};

export const ImageTitle = ({
  title,
  zIndex,
  mousePosition: { mouseX, mouseY },
}: ImageTitleProps) => {
  const [titleWidth, setTitleWidth] = useState<number>(0);
  const [titleSide, setTitleSide] = useState<'left' | 'right' | null>(null);
  const { windowWidth } = useWindowSize();

  const offsetX = -4;
  const offsetY = -38;
  const titleX = mouseX + offsetX;
  const titleY = mouseY + offsetY;

  const titleRef = useCallback((titleElement: HTMLParagraphElement) => {
    if (titleElement !== null) {
      setTitleWidth(titleElement.getBoundingClientRect().width);
    }
  }, []);

  useEffect(() => {
    const titleSide = windowWidth - mouseX > mouseX ? 'right' : 'left';

    setTitleSide(titleSide);
  }, [mouseX, windowWidth]);

  return (
    titleSide && (
      <motion.p
        className="pointer-events-none fixed left-0 top-0 text-[2rem] tracking-widest text-white [text-shadow:2px_2px_1px_rgba(0,0,0,0.8)]"
        style={{
          zIndex: zIndex + 1,
          x: `${titleSide === 'right' ? titleX : titleX - titleWidth}px`,
          y: `${titleY}px`,
        }}
        ref={titleRef}
      >
        {title}
      </motion.p>
    )
  );
};
