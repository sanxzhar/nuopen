import "./App.css";
import { LeftSideOrnekLayout, SectionOrnekLayout } from "./layouts";
import {
  Sponsors,
  Rules,
  Promoting,
  Agenda,
  OnlineOfflineTable,
} from "./sections";
function App() {
  return (
    <LeftSideOrnekLayout>
      <SectionOrnekLayout>
        <div className="w-[100vw] h-[100vh]">content</div>
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
