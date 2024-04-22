import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Guideprops({ name, Language, price, image, Age, Experience, Contact, id }) {
  const imageUrl = `/annapurnaguide/${id}`;
  return (
    <div className="props">
      <Link to={imageUrl}>
        <img alt="Property" src={image} />
      </Link>
      <h4 style={{ textAlign: "justify" }}>
        Name: {name} <br />
        Age: {Age} <br />
        Experience: {Experience} <br />
        Contact: {Contact} <br />
        Budget per person: {price} <br />
        Languages: {Language}
      </h4>
    </div>
  );
}

Guideprops.propTypes = {
  name: PropTypes.string.isRequired,
  Language: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  Age: PropTypes.number.isRequired,
  Experience: PropTypes.string.isRequired,
  Contact: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Guideprops;
