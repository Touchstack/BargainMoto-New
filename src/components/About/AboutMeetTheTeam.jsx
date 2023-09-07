import Team1 from "../../assets/images/Team-1.svg";
import Team2 from "../../assets/images/team2.png";
import Team3 from "../../assets/images/team3.png";

const AboutMeetTheTeam = () => {
  return (
    <div className="container mx-auto">
      <h3 className="font-Bold text-[#191919] lg:text-4xl md:text-3xl sm:text-3xl text-4xl text-center py-16 px-4 lg:text-left ml-1">
        Meet The Team
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-8">
        <div className="px-1">
          <img
            src={Team1}
            alt="Team-1"
            style={{ height: "auto" }}
            className="img-fluid mx-auto"
          />
          <p className="font-SemiBold text-[#191919] lg:text-3xl md:text-2xl sm:text-xl text-xl text-center pt-4">
            Andrew Berchie
          </p>
          <p className="font-Regular text-[#191919]lg:text-xl md:text-lg sm:text-lg text-lg text-center pb-8">
            Founder & CEO
          </p>
        </div>
        <div className="px-1">
          <img
            src={Team2}
            alt="Team-2"
            style={{ height: "auto" }}
            className="img-fluid mx-auto"
          />
          <p className="font-SemiBold text-[#191919] lg:text-3xl md:text-2xl sm:text-xl text-xl text-center pt-4">
            Ama Ohemaa Amoakohene
          </p>
          <p className="font-Regular text-[#191919] lg:text-xl md:text-lg sm:text-lg text-lg text-center pb-8">
            Chief Operating Officer
          </p>
        </div>
        <div className="px-1">
          <img
            src={Team3}
            alt="Team-3"
            style={{ height: "auto" }}
            className="img-fluid mx-auto lg:h-[21rem] lg:w-[24rem] md:h-auto md:w-auto h-[21rem]"
          />
          <p className="font-SemiBold text-[#191919] lg:text-3xl md:text-2xl sm:text-xl text-xl text-center pt-4">
            Brian Adjei-Otchwemah
          </p>
          <p className="font-Regular text-[#191919] lg:text-xl md:text-lg sm:text-lg text-lg text-center pb-8">
            Chief Technical Officer
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMeetTheTeam;
