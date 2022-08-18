import {useEffect, useState} from "react";

// type LocalStorageType = {
//     key?: string;
//     initialValue?: string
// }

const getSavedValue = (key: string, initialValue:string) => {
    console.log('getsavedItem,', key, initialValue)
    // @ts-ignore
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

    if(initialValue.length > 0)
    return initialValue
}

export const useLocalStorage = (key: string, initialValue: string) => {
    const [value, setValue] = useState(() => getSavedValue(key, initialValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(initialValue))
    }, [value])

    return [value, setValue]
}