import path from 'path-browserify';
import { motion } from 'framer-motion'

interface Props {
  src: string;
  alt: string;
}

export default function Picture({ src, alt, ...args}: Props) {
  const ext = path.extname(src);

  if (ext === '.gif') {
    return  (
      <img 
        decoding="async"
        loading="lazy"
        src={src} 
        alt={alt}
        {...args} 
      />
    )
  }

  return (
    <picture>
      <source srcSet={`${src}?fm=avif`} type="image/avif" />
      <source srcSet={`${src}?fm=webp`} type="image/webp" />
      <motion.img 
        decoding="async"
        loading="lazy"
        src={src} 
        alt={alt}
        {...args} 
        />
    </picture>
  )
}
