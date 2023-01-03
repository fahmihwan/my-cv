import { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { themeUpdate } from "./features/themeSlice";

function App() {
    const theme = useSelector((state) => state.theme.value);
    const modal = useSelector((state) => state.modal.value);
    const dispatch = useDispatch();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        document.body.style.overflow = "";
    }, []);

    useEffect(() => {
        theme === "dark"
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
    }, [theme]);

    const handleTheme = () => {
        dispatch(themeUpdate(theme === "dark" ? "light" : "dark"));
    };

    return (
        <div className="bg-[#f6f8fd]  dark:bg-fancy min-h-screen text-black  dark:text-gray-400 ">
            <TopNav handleTheme={handleTheme} />
            {!modal && theme !== "light" && <Snowfall snowflakeCount={40} />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<Detail />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <BottomNav />
        </div>
    );
}

export default App;
