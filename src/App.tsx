import "./App.css";
import { LeftSideOrnekLayout, SectionOrnekLayout } from "./layouts";
import {
  Sponsors,
  Rules,
  Promoting,
  Agenda,
  OnlineOfflineTable,
  WelcomeSection,
} from "./sections";
function App() {
  return (
    <LeftSideOrnekLayout>
      <SectionOrnekLayout>
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
    </LeftSideOrnekLayout>
  );
}

export default App;
