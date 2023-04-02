import { useMoralis } from "react-moralis"
import {useEffect} from "react"

/**
 * UseEffect(()=>{},[]) First argument is a function and second argument is a dependency array. UseEffect will monitar 
 * the array and it will run if something chnages in the array.
 * If no dependency array is given then it will run at anytime and can lead to circular render.
 * If a blank dependency array is given then it will load only once.
 * If there are dendepndecies in array then it will load whenever there is any change
 */

export default function ManualHeader() {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } = useMoralis()
    useEffect(()=>{
        if(isWeb3Enabled) return;
        if(typeof window !== undefined){
            if(window.localStorage.getItem("connected")){
                enableWeb3()
            }
        }

    },[isWeb3Enabled])

    useEffect(()=>{
        Moralis.onAccountChanged((account)=>{
            console.log(`Account changed to ${account}`)
            if(account == null){
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("null account found!!")
            }
        })

    },[])
    return (
        <div>
            {account ? (
                <div>
                    Connected to account {account.slice(0, 6)}...{account.slice(account.length - 4)}
                </div>
            ) : (
                <button
                    onClick={async () => {
                        await enableWeb3()
                        if(typeof window !== undefined){
                            window.localStorage.setItem("connected","inject")
                        }
                    }}
                    disabled={isWeb3EnableLoading}
                >
                    Connect
                </button>
            )}
        </div>
    )
}
