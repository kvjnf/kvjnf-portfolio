import PropTypes from 'prop-types'
import { motion } from 'framer-motion';
import LazyLoadImage from '../LazyLoadImage/LazyLoadImage';

function FadeInUpImage({ src, alt, ...args }) {

  return (
    <motion.div
      animate={
        
      }
    >
      <LazyLoadImage
        src={src} 
        alt={alt}
        {...args}
      />
    </motion.div>
  )
}

FadeInUpImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default FadeInUpImage
