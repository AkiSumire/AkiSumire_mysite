import "@fontsource/roboto";

import { Reset } from "styled-reset";
import { Header } from "./common/Header";
import { ProfileSection } from "./section/ProfileSection";
import { TopSection } from "./section/TopSection";
import { QualificationSection } from "section/QualificationSection";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <>
        <Reset />
        <header>
          <Header />
        </header>
        <main>
          <TopSection />
          <ProfileSection />
          <QualificationSection />
        </main>
      </>
    </div>
  );
}

export default App;
