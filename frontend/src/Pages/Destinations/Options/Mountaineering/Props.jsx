// Props.jsx
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Props({ name, days, price, image, province, id }) {
  const imageUrl = `/property/${id}`;
  return (
    <div >
      <Link to={imageUrl}>
        <img alt="Property" src={image} />
      </Link>
      <h4>
        Location: {name} <br />
        Province: {province} <br />
        Days: {days} <br />
        Budget per person: {price} <br />
      </h4>
    </div>
  );
}

Props.propTypes = {
  name: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  province: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Props;
