import PrimaryButton from "../Buttons/PrimaryButton";
import OutlinedButton from "../Buttons/OutlinedButton";
const HomePageHero = () => {
  return (
    <div className="bg-[#8C394C] py-8 px-11 text-center">
      <header className="mx-auto">
        <span className="text-[#FFF] py-4 lg:text-5xl md:text-5xl sm:text-4xl text-4xl font-Bold break-normal mt-24 md:break-all max-w-7xl m-auto">
          Where smart car deals begin!
        </span>
        <span className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-Thin text-[#FFF]"></span>
      </header>
      <p className="max-w-[980px] mx-auto md:pl-25 p-4 py-2 mt-5 font-Regular text-[#EFEFEF] text-lg pt-2 lg:px-60 md:px-40 sm:px-28">
        Seamless car exchanges made simple - find your ride or find your buyer
        today.
      </p>
      <div className="mx-auto px-8 lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center text-center py-12">
        <PrimaryButton
          buttonText={"Sell Your Car"}
          className={"lg:mb-0 md:mb-0 sm:mb-0 mb-4"}
        />
        <OutlinedButton
          buttonText={"Find your Dream Car"}
          className={"lg:ml-5 md:ml-5 sm:ml-0 ml-4"}
        />
      </div>
    </div>
  );
};
export default HomePageHero;
