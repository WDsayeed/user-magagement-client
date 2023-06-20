import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

const Main = () => {
        return (
                <div>
                    <Header></Header>
                    <Outlet></Outlet> 
                    <Footer></Footer>   
                </div>
        );
};

export default Main;