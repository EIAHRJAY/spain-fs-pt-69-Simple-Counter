import React from "react";
import Navbar from "./Navbar";
import TimeWatch from "./TimeWatch";
import Footer from "./Footer";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div >
			<div style={{ marginBottom: "20px" }}>
				<Navbar/>
			</div>
			<br/>
			<div>
				<TimeWatch/>
			</div>
			<br/>
			<div style={{ marginTop: "20px" }}>
				<Footer/>
			</div>
		</div>
	);
};

export default Home;
