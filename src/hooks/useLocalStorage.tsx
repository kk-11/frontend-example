import { Order } from "../vite-env";

const useLocalStorage = () => {
    const currentOrder = localStorage.getItem("_currentOrder");
    const activeOrder = typeof currentOrder === 'string';
    let orderFromLocalStorage = null;

    if (activeOrder) {
        orderFromLocalStorage = JSON.parse(
            currentOrder as string
        );
    }

    const setOrderToLocalStorage = (data: Order) =>
        localStorage.setItem("_currentOrder", JSON.stringify(data));

    return { orderFromLocalStorage, setOrderToLocalStorage };
};

export default useLocalStorage;
