

export default function TransferCountBlock ({segments}){

    const transferNames = {
        0: 'без пересадок',
        1: '1 пересадка',
        2: '2 пересадки',
    }

    return <div className="text-center p-1" >
        <span style={{color:'#ffb168'}}>{transferNames[segments.length -1]}</span>
    </div>
}