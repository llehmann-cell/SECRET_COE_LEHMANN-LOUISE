import RevealButton from "./components/RevealButton";
import styles from "./page.module.css";

export default function Home() {
  // Lu côté serveur uniquement — jamais exposé dans le bundle client
  const secret = process.env.MON_TEXT_SECRET ?? "";

  return (
    <main className={styles.main}>
      {/* ── NAV ────────────────────────────────────── */}
      <nav className={styles.nav}>
        <span className={styles.navLogo}>Antigravity / Studio</span>
        <ul className={styles.navLinks}>
          <li><a href="#">Collection</a></li>
          <li><a href="#">Lookbook</a></li>
          <li><a href="#">À propos</a></li>
        </ul>
      </nav>

      {/* ── HERO ───────────────────────────────────── */}
      <section className={styles.hero}>
        {/* Blob décoratif */}
        <div className={styles.blob} aria-hidden="true" />

        <div className={styles.label}>
          <span className={styles.dot} />
          Collection Printemps 2026 — Édition Limitée
        </div>

        <h1 className={styles.headline}>
          L&apos;avenir<br />
          se porte{" "}
          <em className={styles.outlined}>
            dès<br />aujourd&apos;hui.
          </em>
        </h1>

        <p className={styles.sub}>
          Antigravity Studio&nbsp;·&nbsp;Prêt-à-porter avant-gardiste
        </p>

        {/* Client Component qui gère le bouton + révélation */}
        <RevealButton secret={secret} />

        <div className={styles.scrollHint} aria-hidden="true">
          <span>Découvrir</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ── TICKER ─────────────────────────────────── */}
      <div className={styles.tickerWrapper} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {[
            "Printemps 2026", "·", "Édition Limitée", "·",
            "Antigravity Studio", "·", "Design Avant-Gardiste", "·",
            "Prêt-à-porter", "·", "Paris", "·",
            // Duplicate for seamless loop
            "Printemps 2026", "·", "Édition Limitée", "·",
            "Antigravity Studio", "·", "Design Avant-Gardiste", "·",
            "Prêt-à-porter", "·", "Paris", "·",
          ].map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>

      {/* ── FEATURES ───────────────────────────────── */}
      <section className={styles.features}>
        {[
          { num: "01", icon: "◈", title: "Matières d'Exception", desc: "Sélection rigoureuse de tissus techniques et organiques issus de fournisseurs certifiés." },
          { num: "02", icon: "◎", title: "Coupe Architecturale", desc: "Chaque pièce est conçue pour redéfinir la silhouette moderne, entre structure et fluidité." },
          { num: "03", icon: "◉", title: "Édition Numérotée", desc: "Production limitée à 200 exemplaires par modèle. Chaque pièce est certifiée et numérotée." },
        ].map(({ num, icon, title, desc }) => (
          <div key={num} className={styles.card}>
            <div className={styles.cardNum}>{num}</div>
            <span className={styles.cardIcon}>{icon}</span>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{desc}</p>
          </div>
        ))}
      </section>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer className={styles.footer}>
        <p>© 2026 Antigravity Studio. Tous droits réservés.</p>
        <a href="#">Mentions légales</a>
      </footer>
    </main>
  );
}
