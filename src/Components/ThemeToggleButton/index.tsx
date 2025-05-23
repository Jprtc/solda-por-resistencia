import React, { useEffect, useState } from "react";

const getPreferredTheme = (): "light" | "dark" => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

const setPreferredTheme = (theme: "light" | "dark") => {
    if (typeof window === "undefined") return;
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};

const ThemeToggleButton: React.FC = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const preferred = getPreferredTheme();
        setTheme(preferred);
        setPreferredTheme(preferred);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) setPreferredTheme(theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    if (!mounted) return null;

    return (
        <button
            onClick={toggleTheme}
            className="p-2 hidden rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition sm:block"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
    );
};

export default ThemeToggleButton;