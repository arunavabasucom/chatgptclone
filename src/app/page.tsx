import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2  text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT Clone</h1>
      <div className="flex space-x-2 text-center ">
        {/*Examples*/}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
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
        {/*Capabilities*/}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infotext">
              &quot;Change the ChatGPT model to use&quot;
            </p>
            <p className="infotext">
              &quot;Messages are stored in firebase &quot;
            </p>
            <p className="infotext">
              &quot;Hot toast notification when ChatGPT thinking &quot;
            </p>
          </div>
        </div>
        {/*Limitations*/}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infotext">
              &quot;May occasionally produce harmful instructions or biased
              content&quot;
            </p>
            <p className="infotext">
              &quot;What is the difference between a dog and a cat ?&quot;
            </p>
            <p className="infotext">
              &quot;Limited knowledge of world and events after 2021&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
