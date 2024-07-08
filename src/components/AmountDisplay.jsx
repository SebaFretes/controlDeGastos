

export const AmountDisplay = ({label, amount}) => {
    return (
        <>
            <p className=" text-2xl text-blue-600 font-bold">
                {label && `${label}: `}
                <span className="font-black text-black">${amount}</span>
            </p>
            
        </>        
    )
}