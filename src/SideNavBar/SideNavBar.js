import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideNavBar.css";
import { FaRegUser } from "react-icons/fa";
import { MdCardMembership, MdOutlineIntegrationInstructions } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { BiCalendar } from "react-icons/bi";
import { GrUserSettings } from "react-icons/gr";
import { AiOutlineBell } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../assets/logo.png";

const SideNavBar = () => {
	const [isExpanded, setExpandedState] = useState(window.innerWidth > 768);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const location = useLocation(); // Get current URL

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
			if (window.innerWidth > 768) {
				setExpandedState(true);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const menuItems = [
		{ text: "Accounts", icon: <FaRegUser />, page: "/home" },
		{ text: "Integrations", icon: <MdOutlineIntegrationInstructions />, page: "/integrations" },
		{ text: "Knowledge configuration", icon: <HiOutlineTicket />, page: "/knowledge" },
		{ text: "Subscriptions", icon: <MdCardMembership />, page: "/subscriptions" },
		{ text: "Performance monitoring", icon: <LuChartNoAxesCombined />, page: "/performance" },
		{ text: "Chrono", icon: <BiCalendar />, page: "/chrono" },
	];

	return (
		<>
			<div className={isExpanded ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
				<div className="nav-upper">
					<div className="nav-heading">
						<img src={logo} alt="Logo" /> {isExpanded && <span>Gatepax AI</span>}
					</div>
					{isMobile && (
						<button className={isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"} onClick={() => setExpandedState(!isExpanded)}>
							<IoIosArrowForward />
						</button>
					)}
					<div className="nav-menu">
						{menuItems.map(({ text, icon, page }, index) => (
							<Link
								key={index}
								className={`menu-item ${isExpanded ? "" : "menu-item-NX"} ${location.pathname === page ? "active-menu" : ""}`}
								to={page}
							>
								{icon}
								{isExpanded && <span>{text}</span>}
							</Link>
						))}
					</div>
				</div>

				<div className="nav-footer">
					<GrUserSettings />
				</div>
			</div>

			<div className="notification-icon">
				<AiOutlineBell />
				<div className="logged-user">A</div>
			</div>
		</>
	);
};

export default SideNavBar;
