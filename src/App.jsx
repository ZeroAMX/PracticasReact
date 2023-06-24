import ViteCard from "./Clon-Vite/ViteCards";
import TitulePage from "./Clon-Vite/Title";

export default function App() {
  return (
    <>
      <section className="TitulePage">
        <h1 className="titule">Vite</h1>
        <h2 className="subtitle">Next Generation Frontend Tooling</h2>
        <p className="parrafo">
          Get ready for a development environment that can finally catch up with
          you.
        </p>
      </section>

      <section className="botones">
        <botones text="Get Starded" />
        <botones text="Why Vite?" />
        <botones text="View on GitHub" />
      </section>

      <section className="CardsVite">
        <ViteCards
          icon="💡"
          tituleParraf="Instant Server Start"
          paraff="On demand file serving over native ESM, no bundling required!"
        />
        <ViteCards
          icon="⚡️"
          tituleParraf="Lightning Fast HMR"
          paraff="Hot Module Replacement (HMR) that stays fast regardless of app size."
        />
        <ViteCards
          icon="🛠️"
          tituleParraf="Rich Features"
          paraff="Out-of-the-box support for TypeScript, JSX, CSS and more."
        />
        <ViteCards
          icon="📦"
          tituleParraf="Optimized Build"
          paraff="Pre-configured Rollup build with multi-page and library mode support."
        />
        <ViteCards
          icon="v"
          tituleParraf="Universal Plugins"
          paraff="Rollup-superset plugin interface shared between dev and build."
        />
        <ViteCards
          icon="🔑"
          tituleParraf="Fully Typed APIs"
          paraff="Flexible programmatic APIs with full TypeScript typing."
        />
      </section>
    </>
  );
}
