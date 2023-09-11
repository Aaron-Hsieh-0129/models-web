import {useState, createContext, useContext} from 'react';

const RequestContext = createContext({
    dataName: "",
    sendData: () => {},

})


const client = new WebSocket('ws://localhost:4000');

const RequestProvider = (props) => {
    const [dataName, setDataName] = useState("");

    const sendData = async (data) => {
        await client.send(JSON.stringify(data));
    };

    client.onMessage = (byteString) => {
        const {data} = byteString;
        const [task, payload] = JSON.parse(data);
        console.log(task, " ", payload);
        switch (task) {
            case "init":
                setDataName(payload);
                break;

            default:
                break;

        }
    }
    
    return (
        <RequestContext.Provider 
            value={{
                dataName,
                sendData
            }}
            {...props}
        />
    )
};

const useRequest = () => useContext(RequestContext);

export {RequestProvider, useRequest};