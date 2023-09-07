import OutlinedButton from "../Buttons/OutlinedButton";
import PrimaryButton from "../Buttons/PrimaryButton";

const HeroCallToAction = () => {
  return (
    <div className="bg-[#8C394C] text-center py-20">
      <div
        className="font-Bold m-12 max-w-[9000px] text-[#FFFFFF]
        lg:text-4xl md:text-3xl sm:text-3xl text-3xl text-center py-4"
      >
        Ready for a new ride or quick sale?
        <p> Start your journey with BargainMoto today!</p>
      </div>
      <div className="bg-[#8C394C] mx-auto px-8 lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center">
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
export default HeroCallToAction;
