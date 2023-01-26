import React, { FC } from "react";
import Button from "../components/Button";

interface CardDetailProps {
  id: number;
  name: string;
  price: number;
  qty: number;
  description: string;
  image: string;
}

const CardDetail: FC<CardDetailProps> = ({
  id,
  name,
  price,
  qty,
  description,
  image,
}) => {
  return <></>;
};

export default CardDetail;
