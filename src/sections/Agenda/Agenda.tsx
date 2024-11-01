
export function Agenda(){
    return (
        <div id="agenda" className="p-[30px]">
            <h2 className="text-4xl md:text-6xl text-center uppercase mb-7 text-custom-red font-formula1">Agenda</h2>
            <div className="flex flex-col gap-[20px] md:gap-[50px] items-center justify-center min-w-[300px] max-w-[1148px] mx-auto">
                <AgendaItem time="12.00 - 13.00" title="Registration (Block C2)" />
                <AgendaItem time="13.00 - 13.40" title="Opening Ceremony (Venue: Orange Hall)" />
                <AgendaItem time="14.00 - 19.00" title="Contest (Venue: Ballroom Left)" />
                <AgendaItem time="19.00 - 19.30" title="Coffee Break (Block C2)" />
                <AgendaItem time="19.30 - 20.00" title="Group Photo Session (Venue: Upper atrium)" />
                <AgendaItem time="20.00 - 21.00" title="Closing Ceremony (Venue: Orange Hall)" />
            </div>
        </div>
    )
}

const AgendaItem: React.FC<{ time: string; title: string }> = ({ time, title }) => {
    return (
        <div className="w-full font-formula1 flex items-center gap-[20px] md:gap-[80px] rounded-tl-3xl rounded-br-3xl text-base md:text-2xl h-[93px] bg-custom-red text-white px-1">
            <div className="min-w-[100px] md:min-w-[211px] flex items-center justify-center rounded-tl-3xl rounded-br-3xl bg-dark-blue h-full text-center">{time}</div>
            <div className="uppercase">{title}</div>
        </div>
    );
  };