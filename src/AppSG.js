import { Provider } from "react-redux"
import { AppRoute } from "./routes/AppRoute.js"
import { store } from "./store/store.js"

export const AppSG = () =>{
    return(
        <Provider store={store}>
            <AppRoute />
        </Provider>
        
    )
}