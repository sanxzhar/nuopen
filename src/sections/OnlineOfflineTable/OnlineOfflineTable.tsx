import "./style.css";
import galochka from "./assets/galochka.svg";
import krest from "./assets/krest.svg";

export const OnlineOfflineTable = () => {
  return (
    <section className="nuopen-table-section">
      <div className="nuopen-table max-w-[1200px]">
        <div className="nuopen-table__head">
          <div className="nuopen-table__border nuopen-table__header-row">
            <div className="nuopen-table__header"></div>
            <div className="nuopen-table__header">
              <span className="nuopen-table__highlighted">online</span>{" "}
              participation
            </div>
            <div className="nuopen-table__header">
              <span className="nuopen-table__highlighted">offline</span>{" "}
              participation
            </div>
          </div>
        </div>
        <div className="nuopen-table__body">
          <div className=" nuopen-table__data">Open</div>
          <div className=" nuopen-table__data nuopen-table__smaller-text">
            for<span className="nuopen-table__highlighted"> everyone</span>
          </div>

          <div className=" nuopen-table__data nuopen-table__smaller-text">
            Every citizen of Kazakhstan older than
            <span className="nuopen-table__highlighted"> 16+ years</span>
          </div>

          <div className="nuopen-table__grid-element nuopen-table__data">
            access to problems set
          </div>
          <img
            alt={"Yes"}
            className="nuopen-table__grid-element"
            src={galochka}
          />
          <img
            alt={"Yes"}
            className="nuopen-table__grid-element"
            src={galochka}
          />

          <div className="nuopen-table__grid-element nuopen-table__data">
            access to editorial
          </div>
          <img
            alt={"Yes"}
            className="nuopen-table__grid-element"
            src={galochka}
          />
          <img
            alt={"Yes"}
            className="nuopen-table__grid-element"
            src={galochka}
          />

          <div className="nuopen-table__grid-element nuopen-table__data">
            live scoreboard
          </div>
          <img
            alt={"Yes"}
            className="nuopen-table__grid-element"
            src={galochka}
          />
          <img
            alt={"Yes"}
            className="nuopen-table__grid-element"
            src={galochka}
          />

          <div className="nuopen-table__grid-element nuopen-table__data">
            coffee break
          </div>
          <img alt={"No"} className="nuopen-table__grid-element" src={krest} />
          <img
            alt={"Yes"}
            className="nuopen-table__grid-element"
            src={galochka}
          />

          <div className="nuopen-table__grid-element nuopen-table__data">
            prizes
          </div>
          <img alt={"No"} className="nuopen-table__grid-element" src={krest} />
          <img
            alt={"Yes"}
            className="nuopen-table__grid-element"
            src={galochka}
          />
        </div>
      </div>
    </section>
  );
};
