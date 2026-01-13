import about from "../assets/about.jpeg";
import {ABOUT} from "../constants/index";
export const About = () => {
  return (
    <section>
      <h1 className="text-4xl sm:text-5xl lg:text-4xl text-center  mb-12">
        About Us
      </h1>

      <div className="flex flex-wrap mx-6 ">
        <div className="w-full lg:w-1/2 lg:mb-0 mb-10 group  ">
          <img
            src={about}
            alt="about"
            className="w-full -rotate-3 rounded-4xl group-hover:rotate-0 group-hover:scale-105 transition-all duration-300"
          />
        </div>

        
            <div className="w-full lg:w-1/2 px-6" >
              <h1 className=" text-7xl font-medium mb-4">{ABOUT.header}</h1>
              <div className="h-2 w-36 bg-rose-300 -rotate-2 mb-10">

              </div>

              <p className="text-xl  lg:text-2xl px-0 lg:px-10 ">{ABOUT.content}</p>
            </div>
        
      </div>
    </section>
  );
};
