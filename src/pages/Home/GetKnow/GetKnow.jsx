import BTN from "../../../components/Shared/BTN";

const GetKnow = () => {
  return (
    <section className="my-20 px-10">
      <div className="flex flex-col md:flex-row gap-10 items-center ">
        {/* Get Know Images */}
        <div className="relative flex md:w-1/2">
          <img
            className="w-56 h-80 object-cover object-center rounded-lg -rotate-12"
            src="https://i.ibb.co/yPnk0Nz/instructor-getknow-small.jpg"
            alt="Instructor"
          />

          <img
            className="w-56 h-56 object-cover object-center rounded-lg z-10"
            src="https://i.ibb.co/n0cPptT/learner-small.jpg"
            alt="learner"
          />

          <div className="absolute flex items-center border-4 bottom-0 right-5 border-white bg-[#6353bb] text-white px-3 py-2 gap-3">
            <p className="text-5xl">6</p>
            <p className="text-xl">
              Years Of <br /> Experince
            </p>
          </div>
        </div>
        <div className="space-y-3 md:w-1/2">
          <p className="text-lg tracking-wider uppercase">Get To Know Us</p>
          <p className="text-4xl md:text-5xl">
            Grow your skills learn with us from anywhere
          </p>
          <p className=" md:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
            molestiae tenetur praesentium eius eos culpa nulla consequuntur
            itaque obcaecati vel?
          </p>
          <BTN>Discover More</BTN>
        </div>
      </div>
    </section>
  );
};

export default GetKnow;
