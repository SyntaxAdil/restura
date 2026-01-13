import video from "../assets/mission.mp4";
import videoPoster from "../assets/mission.jpeg";
export const Mission = () => {
  return (
    <section id="mission" className="mt-20">
      <h1 className="text-4xl sm:text-5xl lg:text-4xl text-center  mb-10">
        Our Mission
      </h1>
      <div className="relative w-full overflow-x-hidden lg:min-h-screen h-auto">
        <video
          src={video}
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover lg:rounded-0 rounded-3xl "
          poster={videoPoster}
        ></video>
        <div className="inset-0 absolute  w-full h-full bg-linear-to-b  from-transparent to-black" />
        <div className="inset-0 absolute  w-full h-full flex justify-center items-center">
          <h3 className="lg:text-4xl   max-w-xl text-center text-md">
            At our restaurant, our mission is to create delicious and memorable
            dining experiences.
          </h3>
        </div>
      </div>
    </section>
  );
};
