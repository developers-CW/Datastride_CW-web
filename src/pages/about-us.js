import Head from "next/head";
import AboutHeroSection from "../components/About/AboutHeroSection";
import AboutStatsSection from "../components/About/AboutStatsSection";
import AboutMissionSection from "../components/About/AboutMissionSection";
// import AboutTeamSection from "../components/About/AboutTeamSection";
import AboutValuesSection from "../components/About/AboutValuesSection";
// import AboutWorkspaceSection from "../components/About/AboutWorkspaceSection";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Datastride Analytics</title>
      </Head>
      <AboutHeroSection />
      <AboutStatsSection />
      <AboutMissionSection />
      {/* <AboutTeamSection /> */}
      <AboutValuesSection />
      {/* <AboutWorkspaceSection /> */}
    </>
  );
}
