import React, {useEffect, useState} from "react";

type FakeData = {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

const FakeAPI = () => {
    const [data, setData] = useState<FakeData | null>(null)

    useEffect(() => {
        let mounted = true
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                if (mounted) {
                    setData(json)
                }
            })
    }, [])

    return (
        <div>
            {data && <div role="contentInfo">
                {data?.title}
            </div>
            }
        </div>
    );
};

export default FakeAPI;
