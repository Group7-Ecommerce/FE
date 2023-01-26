import { useNavigate } from "react-router-dom";
import { FC } from "react";

import Button from "./Button";

interface CardProps {
  title?: string;
  price?: number
  image?: string;
  id?: number;
  labelButton?: string;
  onClickCart?: () => void;
};

const Card: FC<CardProps> = ({ id, price, image, title, labelButton, onClickCart }) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`http://34.69.18.136/${id}`);
  };

  return (
    <div className="card-compact card rounded-lg-md-sm bg-zinc-100 shadow-lg-sm">
        <figure onClick={() => onClickDetail()}>
          <img
            className="aspect-auto object-contain"
            src={`http://34.69.18.136/products/${image}`}
            alt={title}
          />
        </figure>
        <div className="card-body items-center justify-between text-center">
          <h2 className="card-title text-black"
          onClick={() => onClickDetail()}
          >{title}</h2>
          <p className="text-lg text-black">{price}</p>
          <div className="card-actions">
            <Button
              className="btn bg-zinc-800 p-2 font-bold text-white hover: bg-zinc-400/90 dark:bg-zinc-800 dark:hover:bg-zinc-700/90"
              label={labelButton}
              onClick={onClickCart}
            />
          </div>
        </div>
      </div>
    );
};

export default Card;