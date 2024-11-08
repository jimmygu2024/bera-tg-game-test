import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useMemo, useRef, useState } from 'react';

const LazyImage = (props: Props) => {
  const {
    src,
    alt,
    fallbackSrc,
    width,
    height,
    containerStyle,
    containerClassName,
    style,
    className,
    delay = 0,
    ...restProps
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { once: true });

  const [isLoaded, setLoaded] = useState(false);

  const renderFallback = useMemo(() => {
    if (typeof fallbackSrc === 'string') {
      return <img src={fallbackSrc} alt={alt ?? ''} style={style} />;
    }
    if (fallbackSrc) {
      return <>{fallbackSrc}</>;
    }
    return (
      <div
        className="rounded-[16px] bg-[#D0D0D0] border border-[#rgba(75,_55,_31,_0.20)] backdrop-blur-[5px]"
        style={{
          width,
          height,
        }}
      />
    );
  }, [fallbackSrc]);

  return (
    <motion.div
      {...restProps}
      ref={containerRef}
      className={`relative w-full h-full ${containerClassName}`}
      style={{
        width,
        height,
        ...containerStyle
      }}
    >
      <AnimatePresence mode="wait">
        {isInView && (
          <motion.img
            key="real-image"
            src={src}
            alt={alt ?? ''}
            style={style}
            className={`real-image w-full h-full ${className}`}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            animate={isLoaded ? 'visible' : 'hidden'}
            exit="hidden"
            initial="hidden"
            transition={{ duration: 0.3, ease: 'easeInOut', delay: delay }}
            onLoad={() => {
              setLoaded(true);
            }}
            onError={(e: any) => {
              console.log('LazyImage caught the error: %o', e);
            }}
          />
        )}
        {(!isInView || !isLoaded) && (
          <motion.div
            key="fallback-image"
            className="absolute z-[1] left-0 top-0 w-full h-full flex justify-center items-center"
            variants={{
              hidden: {
                opacity: 0,
                transition: {
                  duration: 0.3,
                  ease: 'easeInOut'
                }
              },
              visible: {
                opacity: 1,
                transition: {
                  duration: 0
                }
              }
            }}
            animate="visible"
            exit="hidden"
            initial="visible"
          >
            {renderFallback}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LazyImage;

export interface Props {
  src: string;
  fallbackSrc?: string | React.ReactNode;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  containerClassName?: string;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  delay?: number;

  [k: string]: any;
}
