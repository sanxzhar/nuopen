import "./App.css";
import {LeftSideOrnekLayout, SectionOrnekLayout} from "./layouts";
import {Sponsors} from "./sections";
import OnlineOfflineTable from "./sections/OnlineOfflineTable/OnlineOfflineTable.tsx";
import Promoting from "./sections/Promoting/Promoting.tsx";
import Agenda from "./sections/Agenda/Agenda.tsx";
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
               <Promoting/>
            </SectionOrnekLayout>
            <SectionOrnekLayout>
               <Agenda/>
            </SectionOrnekLayout>
            <SectionOrnekLayout>
               <OnlineOfflineTable/>
            </SectionOrnekLayout>
            <SectionOrnekLayout>
                <Sponsors/>
            </SectionOrnekLayout>
        </LeftSideOrnekLayout>
    );
}

export default App;
