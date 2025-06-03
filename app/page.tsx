import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex space-x-10">
        {/* left side */}
        <div className="space-y-5">
          <div className="bg-lime-50 w-fit py-2 px-3 rounded-full">
            <p className="text-lime-900 font-medium">
              New Energy For Our System
            </p>
          </div>
          <div className="text-5xl font-semibold">
            <h1>
              <span className="text-lime-700">Clean</span> Renewable
            </h1>
            <h1>
              Limitless <span className="text-lime-700">Energy</span>
            </h1>
          </div>
          <div>
            <p className="text-gray-600">
              Switch to solar with Solvix and experience cost savings, energy
              independence, and a greener environment.
            </p>
          </div>
          <div>
            <button className="bg-lime-950 px-4 py-3 rounded-full text-white font-medium text-sm">
              Get Free Consultation
            </button>
          </div>
          <div className="flex bg-lime-100 text-gray-600 text-sm justify-between p-4">
            <div>
              <h1 className="text-3xl font-semibold text-lime-800">10k+</h1>
              <p>Solar Installations</p>
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-lime-800">100k</h1>
              <p>Tons of CO2 Reduced</p>
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-lime-800">70%</h1>
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
