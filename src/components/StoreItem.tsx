import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
      </Card.Body>

      <div className="mt-auto mb-3">
        {quantity === 0 ? (
          <Button
            className="w-100"
            onClick={() => {
              increaseCartQuantity(id);
            }}
          >
            +Add To Cart
          </Button>
        ) : (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ gap: "0.5rem" }}
          >
            <div className="d-flex flex-row">
              <Button
                onClick={() => {
                  decreaseCartQuantity(id);
                }}
              >
                -
              </Button>
              <Card.Body className="w-50">
                <span>{quantity} </span>
                in cart
              </Card.Body>
              <Button
                onClick={() => {
                  increaseCartQuantity(id);
                }}
              >
                +
              </Button>
            </div>

            <Button className="btn-danger" onClick={() => removeFromCart(id)}>
              Remove
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};
