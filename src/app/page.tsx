import React from "react";
import { SunIcon } from '@heroicons/react/24/outline';



function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2  text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT Clone</h1>
      <div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/*Sun Icon*/}
            <SunIcon className="h-8 w-8"/>
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infotext">&quot;Explain something to me&quot;</p>
            <p className="infotext">
              &quot;What is the difference between a dog and a cat ?&quot;
            </p>
            <p className="infotext">
              &quot;What is the color of the sun?&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
