import path from 'path-browserify';
import { motion } from 'framer-motion'

function Picture({ src, alt, ...args}) {
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

export default Picture