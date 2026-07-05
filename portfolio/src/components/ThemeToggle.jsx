import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/libs/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-3 right-16 z-50 p-2 rounded-full transition-colors duration-300", "focus:outline-hidden")}> 
            {isDarkMode ? <Sun className="h-8 w-8 text-orange-400" /> : <Moon className="h-8 w-8 text-orange-900" />}
        </button>
    );
};