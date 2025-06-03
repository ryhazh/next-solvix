import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex">
        {/* left side */}
        <div>
          <div className="text-green-50"><p>New Energy For Our System</p></div>
          <div>
            <h1>Clean Renewable</h1>
            <h1>Limitless Energy</h1>
          </div>
          <div>
            <p>
              Switch to solar with Solvix and experience cost savings, energy
              independence, and a greener environment.
            </p>
          </div>
          <div>
            <button>Get Free Consultation</button>
          </div>
          <div className="flex">
            <div>
              <h1>10k+</h1>
              <p>Solar Installations</p>
            </div>
            <div>
              <h1>100k</h1>
              <p>Tons of CO2 Reduced</p>
            </div>
            <div>
              <h1>70%</h1>
              <p>Up to Savings</p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="relative w-full">
          <Image
            src="https://media.wired.com/photos/63227cb600704d14b5ffb891/3:2/w_2400,h_1600,c_limit/windturbines_Science_GettyImages-1203659530.jpg"
            alt="Another remote image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
