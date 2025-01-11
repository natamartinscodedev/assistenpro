"use client";

import Link from "next/link";
import React, { useState } from "react";

const AssistenPro = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="assistent_click">
      {!!open ? (
        <div className="card_assist">
          <p>Olá, em qual canal de comunicação você deseja falar?</p>
          <ul className="list_assist-links">
            <li>
              <Link href="">Comercial - Érica Lage</Link>
            </li>
            <li>
              <Link href="">Suporte - Natã Martins</Link>
            </li>
          </ul>
        </div>
      ) : (
        <button onClick={handleOpen} className="btn_assistent">
          Assistent
        </button>
      )}
    </div>
  );
};

export default AssistenPro;
