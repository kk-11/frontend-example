import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useLocalStorage } from "./hooks";
import { SignIn, Order as OrderView } from "./views";
import OrderProvider from "./contexts/orderContext";
import { type Order } from "./vite-env";

const App = () => {
    const {orderFromLocalStorage} = useLocalStorage();
    const [order, setOrder] = useState<Order | null>(orderFromLocalStorage);

    return (
        <OrderProvider values={{ order, setOrder }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/order" element={<OrderView />} />
                </Routes>
            </BrowserRouter>
        </OrderProvider>
    );
};

export default App;
