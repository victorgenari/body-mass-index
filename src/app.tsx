import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from './routes'
import { GlobalStyle } from './themes/global'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'

export const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <ToastContainer />

            <RoutesApp />
        </BrowserRouter>
    )
}