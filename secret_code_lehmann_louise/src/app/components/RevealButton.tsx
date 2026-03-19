"use client";

import { useState } from "react";
import styles from "./RevealButton.module.css";

interface RevealButtonProps {
  secret: string;
}

export default function RevealButton({ secret }: RevealButtonProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className={styles.wrapper}>
      {!revealed && (
        <button
          id="cta-principal"
          className={styles.ctaBtn}
          onClick={() => setRevealed(true)}
        >
          <span>Révéler votre offre</span>
          <span className={styles.arrow}>→</span>
        </button>
      )}

      {revealed && (
        <div id="secret-display" className={styles.secretDisplay}>
          {secret}
        </div>
      )}
    </div>
  );
}
