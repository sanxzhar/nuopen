import "./App.css";
import { LeftSideOrnekLayout, SectionOrnekLayout } from "./layouts";
import {
  Sponsors,
  Rules,
  Promoting,
  Agenda,
  OnlineOfflineTable,
  WelcomeSection,
  FAQ,
} from "./sections";
function App() {
  return (
    <LeftSideOrnekLayout>
      <SectionOrnekLayout isTop={false}>
        <WelcomeSection />
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <Promoting />
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <Agenda />
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <OnlineOfflineTable />
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <Sponsors />
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <Rules />
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <FAQ />
      </SectionOrnekLayout>
    </LeftSideOrnekLayout>
  );
}

export default App;
