import logoComponent from "./components/logoComponent";
import dollarIconComponent from "./components/dollarIconComponent";
import personIconComponent from "./components/personIconComponent";

export default function Home() {
  return (
    <main className="bg-LGcyan flex min-h-screen flex-col items-center p-24">
      <div className="w-24 py-24">
        {logoComponent()}
      </div>
      <div className="w-5/6 h-[500px] flex bg-white rounded-3xl">
        <div className="col ml-12 mr-8 my-8 w-1/2 flex flex-col justify-around">

            <label className="block">
              <span className="block text-md font-medium text-DGcyan">
                Bill
              </span>
              <span className="absolute flex items-center my-5 mx-2">
                {dollarIconComponent()}
              </span>
              <input type="Bill" name="Bill" className="text-end text-VDcyan text-2xl mt-1 px-3 py-2 bg-VLGcyan shadow-sm placeholder-slate-400 focus:outline-none focus:border-Scyan focus:border-2 block w-full rounded-md focus:ring-1" placeholder="0" />
            </label>

            <label className="block">
              <span className="block text-md font-medium text-DGcyan">
                Select Tip %
              </span>
              <div className="flex flex-wrap justify-between gap-y-4">
                <button className="h-14 w-32 rounded-lg text-white bg-VDcyan text-2xl focus:bg-Scyan hover:bg-LGcyan hover:text-VDcyan">5%</button>
                <button className="h-14 w-32 rounded-lg text-white bg-VDcyan text-2xl focus:bg-Scyan hover:bg-LGcyan hover:text-VDcyan">10%</button>
                <button className="h-14 w-32 rounded-lg text-white bg-VDcyan text-2xl focus:bg-Scyan hover:bg-LGcyan hover:text-VDcyan">15%</button>
                <button className="h-14 w-32 rounded-lg text-white bg-VDcyan text-2xl focus:bg-Scyan hover:bg-LGcyan hover:text-VDcyan">25%</button>
                <button className="h-14 w-32 rounded-lg text-white bg-VDcyan text-2xl focus:bg-Scyan hover:bg-LGcyan hover:text-VDcyan">50%</button>
                <button className="h-14 w-32 rounded-lg text-DGcyan bg-VLGcyan text-2xl hover:border-Scyan">Custom</button>
              </div>
              
            </label>

            <label className="block">
              <span className="block text-md font-medium text-DGcyan">
                Number of People
              </span>
              <span className="absolute flex items-center my-5 mx-2">
                {personIconComponent()}
              </span>
              <input type="People" name="People" className="text-end text-VDcyan text-2xl mt-1 px-3 py-2 bg-VLGcyan shadow-sm placeholder-slate-400 focus:outline-none focus:border-Scyan focus:ring-sky-500 block w-full rounded-md focus:ring-1" placeholder="0" />
            </label>

        </div>
        <div className="flex flex-col justify-between col w-1/2 mr-12 ml-8 my-8 p-8 bg-VDcyan rounded-3xl">
          <div className="row h-2/5 flex flex-col justify-between">
            <div className="row flex flex-row justify-between">
              <p className="text-white text-lg">Tip Amount<br/><span className="text-DGcyan text-md">/ person</span></p>
              <p className="text-Scyan text-5xl">$100.00</p>
            </div>
            <div className="row flex flex-row justify-between">
              <p className="text-white text-lg">Total<br/><span className="text-DGcyan text-md">/ person</span></p>
              <p className="text-Scyan text-5xl">$100.00</p>
            </div>
          </div>
          <div className="row">
            <button className="w-full h-12 bg-Scyan rounded-lg text-3xl text-DGcyan">RESET</button>
          </div>
        </div>
      </div>

    </main>
  );
}
