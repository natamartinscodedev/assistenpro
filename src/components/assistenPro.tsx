import Link from "next/link";
import React from "react";

const assistenPro = () => {
  return (
    <div className="card_assist">
      <h2>Olá, em qual canal de comunicação você deseja falar?</h2>
      <ul className="list_assist-links">
        <li>
          <Link href="">Comercial</Link>
        </li>
        <li>
          <Link href=""></Link>
        </li>
      </ul>
    </div>
  );
};

export default assistenPro;
