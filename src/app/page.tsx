'use client'
import logoComponent from "./components/logoComponent";
import dollarIconComponent from "./components/dollarIconComponent";
import personIconComponent from "./components/personIconComponent";
import { useEffect, useState } from "react";

export default function Home() {
  const [billVal, setBillVal] = useState<number>(0)
  const [billInputVal, setBillInputVal] = useState<string>('');
  const [tipVal, setTipVal] = useState<number>(0)
  const [pplVal, setPplVal] = useState<number>(0)
  const [pplInputVal, setPplInputVal] = useState<string>('');
  const [tipAmount, setTipAmount] = useState<number>(0)
  const [totalAmount, setTotalAmount] = useState<number>(0)

  useEffect(() => {
    if (billVal !== 0 && pplVal !== 0 && tipVal !== 0) {
      let billTip = billVal * (tipVal / 100);
      setTipAmount(billTip / pplVal);
      setTotalAmount((billVal + billTip) / pplVal)
    }
    else { setTipAmount(0), setTotalAmount(0) }

  }, [billVal, tipVal, pplVal])

  const handleReset = () => {
    setBillVal(0)
    setPplVal(0)
    setTipVal(0)
    setBillInputVal('');
    setPplInputVal('');
  }

  useEffect(() => {
    pplInputVal && Number.parseInt(pplInputVal) <= 0 ? (document.querySelector('#pplSpan')?.classList.remove('invisible'), document.querySelector('#PplInput')?.classList.add('focus:border-red-500')) : (document.querySelector('#pplSpan')?.classList.add('invisible'), document.querySelector('#PplInput')?.classList.remove('focus:border-red-500'))
  }, [pplInputVal])

  const handleButtonColor = (e:any) => {
    let buttons = document.querySelectorAll("[name='tipButton']");
    buttons.forEach((button) => {
      button.classList.remove('bg-Scyan', 'text-VDcyan');
      button.classList.add('bg-VDcyan', 'text-white')
    })
    if (e.target.classList.contains('bg-VDcyan')) {
      e.target.classList.remove('bg-VDcyan', 'text-white')
      e.target.classList.add('bg-Scyan', 'text-VDcyan')
    }
  }

  const buttonFunc = (label: string, value: number) => {
    return (
      <button
        name="tipButton"
        id={label}
        className="h-14 w-32 rounded-lg text-white bg-VDcyan text-2xl focus:bg-Scyan hover:bg-LGcyan hover:text-VDcyan focus:text-VDcyan"
        onClick={(e) => { setTipVal(value), handleButtonColor(e) }}
      >
        {label}
      </button>
    )
  }

  return (
    <div className="bg-LGcyan flex min-h-screen flex-col items-center pt-12 md:p-24">
      <div className="w-24 pb-12 md:pb-24">
        {logoComponent()}
      </div>
      <div className="md:w-4/5 h-fit min-h-[500px] flex flex-wrap md:flex-nowrap  justify-center bg-white rounded-3xl">
        <div className="col ml-12 mr-8 my-8 md:w-1/2 flex flex-col justify-around">

          <label className="block">
            <span className="block text-md font-medium text-DGcyan">
              Bill
            </span>
            <span className="absolute flex items-center my-5 mx-2">
              {dollarIconComponent()}
            </span>
            <input id="BillInput" type="Bill" inputMode="numeric" name="Bill" className="text-end text-VDcyan text-2xl mt-1 px-3 py-2 bg-VLGcyan border-2 border-transparent shadow-sm placeholder-slate-400 focus:outline-none focus:border-Scyan block w-full rounded-md" placeholder="0" value={billInputVal} onChange={(e) => { setBillVal(Number.parseInt(e.target.value)), setBillInputVal(e.target.value) }} />
          </label>

          <div className="block">
            <span className="block text-md font-medium text-DGcyan">
              Select Tip %
            </span>
            <div className="flex flex-wrap justify-between gap-y-4">
              {buttonFunc('5%', 5)}
              {buttonFunc('10%', 10)}
              {buttonFunc('15%', 15)}
              {buttonFunc('25%', 25)}
              {buttonFunc('50%', 50)}
              <input className="h-14 w-32 rounded-lg text-DGcyan bg-VLGcyan text-2xl focus:ring-0 text-center" placeholder="Custom" onChange={(e) => setTipVal(Number.parseInt(e.target.value))}></input>
            </div>
          </div>

          <label className="block">
            <span className="flex flex-row justify-between text-md font-medium text-DGcyan">
              Number of People <span id="pplSpan" className="invisible text-red-400 peer-invalid:visible">Can't be Zero</span>
            </span>
            <span className="absolute flex items-center my-5 mx-2">
              {personIconComponent()}
            </span>
            <input id="PplInput" type="People" name="People" className="text-end  text-VDcyan text-2xl border-2 border-transparent mt-1 px-3 py-2 bg-VLGcyan shadow-sm placeholder-slate-400 focus:outline-none focus:border-Scyan block w-full rounded-md" placeholder="0" min={1} aria-required="true" value={pplInputVal} onChange={(e) => { setPplVal(Number.parseInt(e.target.value)), setPplInputVal(e.target.value) }} />
          </label>

        </div>
        <div className="flex flex-col justify-between col w-full min-h-64 md:w-1/2 mr-8 md:mr-12 ml-8 my-8 p-8 bg-VDcyan rounded-3xl">
          <div className="row h-2/5 flex flex-col justify-between gap-y-4">
            <div className="row flex flex-row justify-between">
              <p className="text-white md:text-lg">Tip Amount<br /><span className="text-DGcyan text-md">/ person</span></p>
              <p className="text-Scyan text-4xl md:text-5xl">{'$' + Math.round(tipAmount * 100) / 100}</p>
            </div>
            <div className="row flex flex-row justify-between">
              <p className="text-white md:text-lg">Total<br /><span className="text-DGcyan text-md">/ person</span></p>
              <p className="text-Scyan text-4xl md:text-5xl">{'$' + Math.round(totalAmount * 100) / 100}</p>
            </div>
          </div>
          <div className="row">
            <button className="w-full h-12 bg-Scyan rounded-lg text-3xl text-DGcyan" onClick={() => { handleReset() }}>RESET</button>
          </div>
        </div>
      </div>

    </div>
  );
}
