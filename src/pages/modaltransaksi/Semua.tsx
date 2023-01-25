import React from "react";

import BelumBayar from "./BelumBayar";
import Dikemas from "./Dikemas";
import Dikirim from "./Dikirim";
import Selesai from "./Selesai";
import Dibatalkan from "./Dibatalkan";

function Semua() {
  return (
    <div>
      <BelumBayar />
      <Dikemas />
      <Dikirim />
      <Selesai />
      <Dibatalkan />
    </div>
  );
}

export default Semua;
