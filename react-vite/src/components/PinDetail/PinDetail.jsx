import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPins } from '../../redux/pins';

const PinDetail = () => {
  const dispatch = useDispatch();
  const { pinId } = useParams();

  const pin = useSelector((state) => state.pins[pinId]);

  useEffect(() => {
    if (!pin) {
      dispatch(fetchPins()); // optionally create a fetchPin(pinId) for more efficient fetching
    }
  }, [dispatch, pin, pinId]);

  if (!pin) return <p>Loading pin details...</p>;

  return (
    <div className="pin-detail-container">
      <img
        src={pin.image_url}
        alt={pin.title}
        className="pin-detail-image"
      />
      <div className="pin-detail-info">
        <h2>{pin.title}</h2>
        <p>{pin.description}</p>
        <p><strong>Likes:</strong> {pin.likes_count}</p>
        <p><strong>Created:</strong> {new Date(pin.created_at).toLocaleString()}</p>
        <p><strong>Last Updated:</strong> {new Date(pin.updated_at).toLocaleString()}</p>
        <p><strong>Posted by User ID:</strong> {pin.user_id}</p>
      </div>
    </div>
  );
};

export default PinDetail;
