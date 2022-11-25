import { Button, CloseButton, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="product"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        {/* Left */}
        <div>
          <p>
            {item.name}
            {quantity > 0 && (
              <span className="text-muted" style={{ fontSize: "0.65rem" }}>
                {" "}
                x{quantity}
              </span>
            )}
          </p>
          <p className="text-muted" style={{ fontSize: "0.75rem" }}>
            {formatCurrency(item.price)}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="text-muted" style={{ fontSize: "0.75rem" }}>
        {formatCurrency(item.price * quantity)}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        aria-label="remove from cart"
        onClick={() => removeFromCart(id)}
      >
        &times;
      </Button>
    </Stack>
  );

  // Name

  // Price

  // Total Price

  // Remove
}
