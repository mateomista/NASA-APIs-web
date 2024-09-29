import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";


export default async function rovers() {
      
    return (
      <><title>Mars Rovers</title>
      <div id="fondo-mars">
      <div id="mars-accordion">
    <div className="max-w-[1100px] gap-8 grid grid-cols-3 px-8">
        <Card isFooterBlurred className="w-[300px] h-[450px] col-span-1">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-black font-medium text-2xl">Spirit & Opportunity</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d8/NASA_Mars_Rover.jpg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                    <p className="text-black text-tiny">Landing on: January 2004.
                        
                    </p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                    Explore
                </Button>
            </CardFooter>
        </Card>

        <Card isFooterBlurred className="w-[300px] h-[450px] col-span-1">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-black font-medium text-2xl">Curiosity</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="https://scitechdaily.com/images/NASA-Curiosity-Mars-Rover-Art.jpg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                    <p className="text-black text-tiny">Landing on: August 2012</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                    Explore
                </Button>
            </CardFooter>
        </Card>

        <Card isFooterBlurred className="w-[300px] h-[450px] col-span-1">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-black font-medium text-2xl">Perseverance</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="https://www.sciencefriday.com/wp-content/uploads/2020/07/perserverance-illustration.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                    <p className="text-black text-tiny">Landing on: February 2021</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                    Explore
                </Button>
            </CardFooter>
        </Card>
    </div>
</div>

      </div>
        

      </>
    );
  }
