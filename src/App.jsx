import { InputBox } from "./components"
import { useState } from "react"
import useCurrencyInfo from "./hooks/useCurrencyInfo"




function App() {
 
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("inr");
  const [to,setTo]=useState("usd");
  const[convertedAmount,setConvertedAmount]=useState(0);

  const currencyInfo=useCurrencyInfo(from);
  const options=Object.keys(currencyInfo);
  console.log(options);

  const swap=()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to]);
  }
  

  return (
    <>
     

     <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/585292/pexels-photo-585292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, 
                
            }}
        >
              
        <div className="w-full ">
          
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 bg-white/30 bg-blur">
                <h3 className=" text-3xl text-yellow-200 m-4 text-center">Currency Converter with Amrit</h3>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                onAmountChange={(amount)=>setAmount(amount)}
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                AmountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
     
    </>
  )
}

export default App
