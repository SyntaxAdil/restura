import {CONTACT} from "../constants/index"
export const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <h1 className="text-4xl sm:text-5xl lg:text-4xl text-center   mb-10">
        Contact Us
      </h1>
      <div className="">
        {CONTACT.map((items) => {
          return(
            <div key={items.key} className="text-center group">
            <h2 className="text-3xl text-neutral-400 py-15 border-b-2 border-dotted border-neutral-600 transition-all duration-300 group-hover:text-neutral-50">{items.text} </h2>
          </div>
          )
        })}
      </div>
    </section>
  );
};
