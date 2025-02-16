'use client'
import { useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Chatbot from "./Chatbot";

const Layout = ({ children }) => {
	const [hiddenClass, setHiddenClass] = useState("hidden");

	const handleHidden = () => setHiddenClass("");

	const handleRemove = () => {
		if (hiddenClass === "") {
			setHiddenClass("hidden");
		}
	};

	return (
		<>
			<div className="main font-body text-body">
				<Header handleHidden={handleHidden} />
				<Chatbot />
				<MobileMenu hiddenClass={hiddenClass} handleRemove={handleRemove} />
				{children}
				<Footer />
				<BackToTop />
			</div>
		</>
	);
};

export default Layout;
