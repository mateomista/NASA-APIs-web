import { div } from "framer-motion/client";
import { play } from "../fonts/fonts";

export default function Layout ({ children } : {children: React.ReactNode}) {
    return (

        <div id="mars-page">
            <div id="fondo-mars">
            {children}
            </div>
           
        </div>
      
    )
  }