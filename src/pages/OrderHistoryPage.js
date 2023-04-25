import {checkToken} from "../utils/user-services"

function OrderHistoryPage(){
    const  handleCheckToken = async ( ) => {
        const expDate = await checkToken()
        console.log(expDate);
    }
    //its an async function so that we can consume promises using await 
    return(
        <div>
            <h1>Order History page</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </div>
    )
}

export default OrderHistoryPage