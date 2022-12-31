import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./menu/About";
import Home from "./menu/Home";
import TopNav from "./components/TopNav";
import Portfolio from "./menu/Portfolio";
import BottomNav from "./components/BottomNav";
import Detail from "./menu/Detail";
import AOS from "aos";
import Snowfall from "react-snowfall";
function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [theme, setTheme] = useState("dark");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className=" bg-[#f6f8fd]  dark:bg-fancy min-h-screen text-black  dark:text-gray-400 ">
            <TopNav handleTheme={handleTheme} />
            {!showModal && theme !== "light" && (
                <Snowfall snowflakeCount={40} />
            )}

            <Routes>
                <Route path="/" element={<Home darkMode={theme} />} />
                <Route
                    path="/portfolio"
                    element={<Portfolio darkMode={theme} />}
                />
                <Route
                    path="/portfolio/:id"
                    element={
                        <Detail
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />
                    }
                />
                <Route path="/about" element={<About darkMode={theme} />} />
            </Routes>
            <BottomNav showModal={showModal} />
        </div>
    );
}

export default App;
