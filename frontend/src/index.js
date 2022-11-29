import reactDom from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import store from "./redux/store"




const root = document.getElementById("root")
reactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    root
)