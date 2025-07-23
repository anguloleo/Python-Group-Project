// src/components/Pins/PinList.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPins } from "../../redux/pins";
import { Link } from "react-router-dom";
import "./PinList.css"; // Import the CSS file

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const PinList = () => {
  const dispatch = useDispatch();
  const pins = useSelector((state) => Object.values(state.pins));

  useEffect(() => {
    dispatch(fetchPins());
  }, [dispatch]);

  if (!pins.length) return <p>Loading pins...</p>;

  const shuffledPins = shuffleArray(pins);

  return (
    <div className="pin-list">
      {shuffledPins.map((pin) => (
        <Link key={pin.id} to={`/pins/${pin.id}`} className="pin-item">
          <img src={pin.image_url} alt={pin.title} />
        </Link>
      ))}
    </div>
  );
};

export default PinList;
