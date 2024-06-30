import data from "../assets/json/testimonial.json";
import TestBox from "./TestBox";
function Testimonials() {
  return (
    <section className="pb-[350px]">
      <div className="container relative">
        <div className="absolute left-[70px] top-[-30px]">
          <img src="/src/assets/image/bg-quotes.png" alt="quote" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] z-10 relative">
          {data.map((el) => (
            <TestBox
              key={el.id}
              name={el.name}
              desc={el.decs}
              position={el.position}
              img={el.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
