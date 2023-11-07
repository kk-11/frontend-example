import { ReactNode, createContext, Dispatch, SetStateAction } from "react";
import { Order } from "../vite-env";

interface OrderContext {
    order: Order | null;
    setOrder: Dispatch<SetStateAction<Order | null>>;
}

interface OrderProviderProps {
    children: ReactNode;
    values: OrderContext;
}

const initialValues = { order: null, setOrder: () => {} };

export const OrderContext = createContext<OrderContext>(initialValues);

const OrderProvider: React.FC<OrderProviderProps> = ({ children, values }) => {
    return (
        <OrderContext.Provider value={values}>{children}</OrderContext.Provider>
    );
};

export default OrderProvider;
