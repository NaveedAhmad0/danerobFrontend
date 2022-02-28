import React from "react";
import Layout from "../components/Layout";
import HomeIntro from "../page-comps/home/HomeIntro";
import HomeInvestors from "../page-comps/home/HomeInvestors";
import HomeMedia from "../page-comps/home/HomeMedia";
import HomePromotion from "../page-comps/home/HomePromotion";
import HomeWhoAreWe from "../page-comps/home/HomeWhoAreWe";
import HomeExploreBanner from "../page-comps/home/HomeExploreBanner";
import HomeRoadmap from "../page-comps/home/HomeRoadmap";

const Home = () => {
	return (
		<Layout title="Danerob | Home" className="home">
			<HomeIntro />
			<HomePromotion />
			<HomeMedia />
			<HomeRoadmap />
			<HomeWhoAreWe />
			<HomeInvestors />
			<HomeExploreBanner />
		</Layout>
	);
};

export default Home;
