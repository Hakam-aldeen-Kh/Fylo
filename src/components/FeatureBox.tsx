type FeatureBoxType = {
  title: string;
  paragraph: string;
  img: string;
};

function FeatureBox({ title, paragraph, img }: FeatureBoxType) {
  return (
    <div className="text-white element-center flex-col text-center">
      <img
        src={`/src/assets/svg/${img}`}
        alt="icon-img"
        className="w-[80px] h-[80px] object-contain"
      />
      <h4 className="text-xl font-semibold my-4">{title}</h4>
      <p className="font-normal text-sm">{paragraph}</p>
    </div>
  );
}

export default FeatureBox;
