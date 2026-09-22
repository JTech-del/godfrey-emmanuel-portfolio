import "./styles/main.css";

import { createIcons, icons } from "lucide";

import { initializeTheme } from "./app/themeController.js";
import { createApplicationShell } from "./app/appController.js";

initializeTheme();

window.lucide = {
    createIcons: () => {
        createIcons({ icons });
    },
};

createApplicationShell();