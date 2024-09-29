import Link from "next/link";
import {Button} from "@nextui-org/react";

export default function Home() {
  return (
    <><title>Home</title>
    <main>
        <div id="homepage">
          <div id="intro">
            <div>Explore the Space</div>
            <div id="button">
                <Link id="link-button" href="/potd">
                  <Button id="boton" size="lg" radius="lg" className="bg-gradient-to-tr from-pink-500 to-violet-800 text-white shadow-lg">Start your Travel</Button>
                </Link> 
            </div>
          </div>
        </div>
    </main>
        
    </>
  );
}
