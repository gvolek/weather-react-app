import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Evergreen" />
        <footer>
          This project was coded by: Gema Volek and is open-sourced on
          <a
            href="https://github.com/gvolek/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://app.netlify.com/sites/sharp-darwin-12edea/overview"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
