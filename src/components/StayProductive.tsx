function StayProductive() {
  return (
    <section className="mt-[150px] pb-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <img
            src="/src/assets/image/illustration-stay-productive.png"
            alt="stay productive image"
          />
        </div>
        <div className="text-white">
          <h3 className="font-medium text-[35px] leading-[50px]">
            Stay Productive, <br /> wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              facilis, harum magnam labore consequatur quam ratione fugiat autem
              amet aperiam,
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              facilis, harum magnam labore consequatur quam ratione fugiat autem
              amet aperiam, enim eius!
            </p>
          </div>
          <a
            href="/"
            className="text-primaryColor hover:text-[#42b0d1] hover:border-[#42b0d1] transition-colors duration-200 border-b-2 border-primaryColor pb-[5px] flex items-center gap-[15px] w-fit"
          >
            See how Foly works
            <img
              src="/src/assets/svg/icon-arrow.svg"
              alt="arrow-img"
              className="w-[20px] h-[20px] object-contain animate-moveRight"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default StayProductive;
