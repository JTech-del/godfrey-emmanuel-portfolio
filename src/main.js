import "./styles/main.css";
import { createIcons, icons } from "lucide";
import { createApplicationShell } from "./app/appController.js";

window.lucide = {
    createIcons: () => {
        createIcons({ icons });
    },
};

createApplicationShell();