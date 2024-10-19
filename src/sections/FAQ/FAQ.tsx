import { FAQItem } from "./components/FAQItem";

export const FAQ = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="p-[80px] w-full max-w-[1180px]">
        <h1 className=" font-formula1 text-[30px] font-bold text-center text-custom-red">
          FAQ
        </h1>
        <div className="flex md:flex-row gap-5 md:mt-[50px] mt-[30px] flex-col">
            <div className="w-full gap-5 flex flex-col">
                <FAQItem question="How to" answer="answer bla bla bla" />
                <FAQItem question="How to" answer="answer bla bla bla" />
                <FAQItem question="How to" answer="answer bla bla bla" />
                <FAQItem question="How to" answer="answer bla bla bla" />
                <FAQItem question="How to" answer="answer bla bla bla" />
            </div>
            <div className="w-full gap-5 flex flex-col">
                <FAQItem question="How to" answer="answer bla bla bla" />
                <FAQItem question="How to" answer="answer bla bla bla" />
                <FAQItem question="How to" answer="answer bla bla bla" />
                <FAQItem question="How to" answer="answer bla bla bla" />
                <FAQItem question="How to" answer="answer bla bla bla" />
            </div>
        </div>
      </div>
    </div>
  );
};
