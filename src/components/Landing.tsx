import landingImg from "../assets/image/illustration-intro.png";
function Landing() {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center pt-[200px] flex-col">
          <div className="w-[750px] max-w-[100%]">
            <img className="w-full h-fit" src={landingImg} alt="landingImg" />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              Hello Text quis repellat dolores,
              <br />
              et ullam recusandae
            </h1>
            <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full mb-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              doloribus, ducimus molestias quod itaque sapiente fugiat animi
              voluptates reprehenderit ipsum delectus quisquam incidunt quidem
              quam deleniti facere corporis asperiores pariatur?
            </p>
          </div>
          <a
            href="/"
            className="btn w-[280px] h-[60px] rounded-full element-center mx-auto text-white font-medium "
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="w-full h-[100px] lg:h-[200px] mt-[20px] ">
        <img src="src/assets/svg/bg-curvy-desktop.svg"  alt="img" className="w-full h-full"/>
      </div>
    </section>
  );
}

export default Landing;
