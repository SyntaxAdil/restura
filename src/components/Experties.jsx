import { CUSINES } from "../constants/index";
export const Experties = () => {
  return (
    <section id="experties">
      <h1 className="text-4xl sm:text-5xl lg:text-4xl text-center  mb-20">
        Our Experties
      </h1>
      <div>
        {CUSINES.map((card, index) => {
          return (
            <div
              className="flex gap-4 items-center py-4  border-b-4 border-dotted border-neutral-800 group "
              key={index}
            >
              <div className="ps-8 shrink-0 ">
                <h1 className="font-semibold text-2xl w-15 h-15 bg-neutral-900  p-4 flex items-center justify-center rounded-full group-hover:bg-rose-400 transiton-all duration-400" >
                  {card.number}
                </h1>
              </div>
              <div className="flex items-center gap-4 lg:gap-8  lg:flex-row flex-col">
                <div className="w-full lg:w-1/3 rounded-2xl shrink-0  overflow-hidden ">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-auto w-full group-hover:scale-110 duration-400 transition-all"
                  />
                </div>
                <div className="py-8">
                  <h1 className="text-2xl text-rose-300 mb-6 uppercase  ">
                    {card.title}
                  </h1>
                  <p className="text-lg">{card.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
