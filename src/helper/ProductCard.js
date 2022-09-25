import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import PropTypes from "prop-types";

const ProductCard = (props) => {
  let items = props.item;
  // console.log("ProductCard", items);
  const dispatch = useDispatch();
  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  return (
    <React.Fragment>
      <Card
        style={{ width: "18rem", border: "none" }}
        className="mx-2 mt-4 card_style"
        key={items.id}
      >
        <Card.Img
          variant="top"
          src={items.imageURL}
          style={{ height: "16rem" }}
          className="mt-3"
        />
        <Card.Body>
          <Card.Title>{items.name}</Card.Title>
          <div className="button_div d-flex justify-content-between">
            <Card.Text className="mt-2">Price : ₹ {items.price}</Card.Text>

            <Button variant="warning" onClick={() => send(items)}>
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};
export default ProductCard;
