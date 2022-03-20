import { PropTypes } from 'prop-types';
import ThumbNailsMini from '../ThumbNailsMini/ThumbNailsMini';

function PureMiniThumbLists ({ thumbs }) {
  
  return (
    <div>
      {thumbs.map((thumb, index) => (
        <ThumbNailsMini key={thumb.postId} {...thumb} />
      ))}
    </div>
  );
}

PureMiniThumbLists.propTypes = {
  thumbs: PropTypes.arrayOf(ThumbNailsMini.propTypes),
};

export default PureMiniThumbLists;