const series = [
  {
    title: "Nuit Interdite",
    category: "Romance",
    emoji: "🌙",
  },
  {
    title: "Dernier Héritier",
    category: "Drama",
    emoji: "👑",
  },
  {
    title: "Love Contract",
    category: "Romance",
    emoji: "❤️",
  },
  {
    title: "Shadow City",
    category: "Action",
    emoji: "🌃",
  },
  {
    title: "Campus 21",
    category: "School Life",
    emoji: "🎓",
  },
  {
    title: "Destin Croisé",
    category: "Drama",
    emoji: "✨",
  },
];

const categories = [
  "Tout",
  "Romance",
  "Drama",
  "Action",
  "Fantasy",
  "Comédie",
  "School Life",
];

export default function Home() {
  return (
    <main className="site">

      <header className="header">
        <div className="logo">
          TBE<span>TOON</span>
        </div>

        <nav className="desktopNav">
          <a href="#accueil">Accueil</a>
          <a href="#decouvrir">Découvrir</a>
          <a href="#categories">Catégories</a>
          <a href="#premium">Premium</a>
        </nav>

        <div className="headerActions">
          <button className="searchButton">⌕</button>
          <button className="loginButton">Connexion</button>
        </div>
      </header>

      <section className="hero" id="accueil">
        <div className="heroContent">

          <div className="badge">
            🔥 NOUVELLE PLATEFORME
          </div>

          <h1>
            Tes histoires.
            <br />
            <span>Ton univers.</span>
          </h1>

          <p>
            Découvre des webtoons, mangas et histoires
            illustrées qui te feront vivre des aventures
            inoubliables.
          </p>

          <div className="heroButtons">
            <button className="primaryButton">
              Découvrir les séries →
            </button>

            <button className="secondaryButton">
              Créer un compte
            </button>
          </div>

        </div>

        <div className="heroVisual">

          <div className="heroCard cardOne">
            <span>🌙</span>
            <strong>Nuit Interdite</strong>
            <small>Romance</small>
          </div>

          <div className="heroCircle">
            T
          </div>

          <div className="heroCard cardTwo">
            <span>👑</span>
            <strong>Dernier Héritier</strong>
            <small>Drama</small>
          </div>

        </div>
      </section>

      <section className="section" id="categories">

        <div className="sectionHeader">
          <div>
            <p className="eyebrow">EXPLORE</p>
            <h2>Choisis ton univers</h2>
          </div>
        </div>

        <div className="categories">

          {categories.map((category, index) => (
            <button
              className={
                index === 0
                  ? "category active"
                  : "category"
              }
              key={category}
            >
              {category}
            </button>
          ))}

        </div>

      </section>

      <section className="section" id="decouvrir">

        <div className="sectionHeader">

          <div>
            <p className="eyebrow">À LA UNE</p>
            <h2>Séries populaires</h2>
          </div>

          <button className="seeAll">
            Voir tout →
          </button>

        </div>

        <div className="seriesGrid">

          {series.map((item) => (

            <article
              className="seriesCard"
              key={item.title}
            >

              <div className="cover">

                <div className="coverEmoji">
                  {item.emoji}
                </div>

                <div className="coverGradient" />

                <span className="premiumBadge">
                  PREMIUM
                </span>

              </div>

              <div className="seriesInfo">

                <h3>{item.title}</h3>

                <p>{item.category}</p>

                <div className="seriesBottom">
                  <span>⭐ 4.8</span>
                  <span>24 épisodes</span>
                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      <section className="premiumSection" id="premium">

        <div className="premiumContent">

          <p className="eyebrow">
            TBETOON PREMIUM
          </p>

          <h2>
            Encore plus d'histoires.
            <br />
            Encore plus de plaisir.
          </h2>

          <p>
            Accède aux épisodes premium, profite de contenus
            exclusifs et découvre les nouveautés avant tout
            le monde.
          </p>

          <button className="primaryButton">
            Découvrir Premium →
          </button>

        </div>

        <div className="premiumVisual">

          <div className="coin">🪙</div>

          <strong>TBETOON</strong>

          <span>PREMIUM</span>

        </div>

      </section>

      <footer>

        <div className="footerLogo">
          TBE<span>TOON</span>
        </div>

        <p>
          © 2026 TBETOON. Tes histoires. Ton univers.
        </p>

        <div className="footerLinks">
          <a href="#">À propos</a>
          <a href="#">Contact</a>
          <a href="#">Confidentialité</a>
          <a href="#">Conditions</a>
        </div>

      </footer>

    </main>
  );
      }
