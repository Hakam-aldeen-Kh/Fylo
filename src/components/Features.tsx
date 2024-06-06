import FeatureBox from "./FeatureBox";
import data from "../assets/json/features.json";

function Features() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-full md:w-[75%] mx-auto">
          {data.map((feature) => (
            <FeatureBox
              key={feature.id}
              title={feature.title}
              paragraph={feature.paragraph}
              img={feature.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
