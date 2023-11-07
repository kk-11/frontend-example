import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../contexts/orderContext";
import useLocalStorage from "./useLocalStorage";
import { Order } from "../vite-env";

const BASE_URL = "//127.0.0.1:5000/orders";

const useSetOrder = (zipCode: string, orderNo: string) => {
    const navigate = useNavigate();
    const { setOrderToLocalStorage } = useLocalStorage();
    const { setOrder } = useContext(OrderContext);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (formValid) {
            setLoading(true);
            fetch(`${BASE_URL}/${orderNo}?zip=${zipCode}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((parsed: Order) => {
                    setOrder(parsed);
                    setOrderToLocalStorage(parsed);
                    navigate("/order");
                })
                .catch(() => {
                    setError(true);
                }).finally(() => {
                    setLoading(false);
                });
        }
    }, [
        formValid,
        navigate,
        orderNo,
        setOrder,
        zipCode,
        setOrderToLocalStorage,
    ]);

    return { loading, error, setFormValid };
};

export default useSetOrder;
