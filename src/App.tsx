import "./App.css";
import { LeftSideOrnekLayout, SectionOrnekLayout } from "./layouts";
import { Sponsors } from "./sections";

function App() {
  return (
    <LeftSideOrnekLayout>
      <SectionOrnekLayout>
        <div className="w-[100vw] h-[100vh]">content</div>
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <div className="w-[100vw] h-[100vh]">content</div>
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <div className="w-[100vw] h-[100vh]">content</div>
      </SectionOrnekLayout>
      <SectionOrnekLayout>
        <Sponsors />
      </SectionOrnekLayout>
    </LeftSideOrnekLayout>
  );
}

export default App;
