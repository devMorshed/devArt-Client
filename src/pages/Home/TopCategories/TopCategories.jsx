import SectionHead from "../../../components/Shared/SectionHead";

const categories = [
  {
    id: 1,
    category: "Drawing",
  },
  {
    id: 2,
    category: "Oil Painting",
  },
  {
    id: 3,
    category: "Sculpture",
  },
  {
    id: 4,
    category: "Photography",
  },
  {
    id: 5,
    category: "Printmaking",
  },
  {
    id: 6,
    category: "Grphics Designing",
  },
  {
    id: 7,
    category: "Illustration",
  },
  {
    id: 8,
    category: "Textile Arts",
  },
  {
    id: 9,
    category: "Mural",
  },
];
const TopCategories = () => {
  return (
    <section>
      <SectionHead
        heading={"Top Categories"}
        subheading={"Check out which categories are trending"}
      />
      <div className="m-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {categories.map(({ id, category }) => (
          <div key={id} className="bg-blue-gray-50 px-4 py-3 rounded flex items-center gap-3">
            <p className="text-xl text-blue-gray-600 font-bold">{id}.</p>
            <p>{category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
