import SectionHead from "../../../components/Shared/SectionHead";

const Partners = () => {
  return (
    <section className="my-20 px-10">
      <SectionHead
        heading={"Our Partners"}
        subheading={"Who will you learn with..."}
      />
      <div className="grid grid-cols-3 lg:grid-cols-6 place-items-center py-10 gap-5">
        <img
          className="w-32 h-32"
          src="https://i.ibb.co/dbG40Jy/Stanford-University-Logo.png"
          alt=""
        />
        <img
          className="w-32 h-32 rounded-full"
          src="https://i.ibb.co/vP4tnct/University-of-Pitusburg.jpg"
          alt=""
        />
        <img
          className="w-32 h-32"
          src="https://i.ibb.co/vhX6xMZ/university-of-saskatchewan.png"
          alt=""
        />
        <img
          className="w-32 h-32"
          src="https://i.ibb.co/8KvZs6h/university-of-virginia.png"
          alt=""
        />
        <img
          className="w-32 h-32"
          src="https://i.ibb.co/BPQx9X3/BUET.png"
          alt=""
        />
        <img
          className="w-32 h-32"
          src="https://i.ibb.co/cFzg9HS/DU.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Partners;
