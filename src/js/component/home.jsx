import React from "react";
import Navbar from "./Navbar";
import TimeWatch from "./TimeWatch";
import Footer from "./Footer";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div >
			<div style={{ padding: "20px" }}>
				<Navbar/>
			</div>
			
			<div>
				<TimeWatch/>
			</div>
			
			<div style={{ padding: "20px" }}>
				<Footer/>
			</div>
		</div>
	);
};

export default Home;
