import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "./SignIn.styled";
import {
    Panel,
    StyledInput,
    StyledLabel,
    Text,
    Title,
    Button,
    Logo,
    Error
} from "../shared.styled";
import { useSetOrder, useQueryParams, useLocalStorage } from "../../hooks";


const SignIn = () => {
    const queryParams = useQueryParams();
    const { orderFromLocalStorage } = useLocalStorage();
    const [zipCode, setZipCode] = useState<string>(queryParams.zip);
    const [orderNo, setOrderNo] = useState<string>(queryParams.orderNo);
    const { loading, error, setFormValid } = useSetOrder(zipCode, orderNo);
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormValid(true);
    };

    const previousOrder = !!orderFromLocalStorage?._id;

    return (
        <Panel>
            <Logo src="/logo.png" $variant="signin" />
            <Title role="title">Track your order</Title>
            {previousOrder && <Link to="/order">View current order</Link>}
            <Text>
                Enter your order number and zip code combination to see order
                details and shipping updates
            </Text>
            <Form onSubmit={handleSubmit}>
                <StyledLabel htmlFor="orderNo">Order number</StyledLabel>
                <StyledInput
                    required
                    id="orderNo"
                    type="text"
                    pattern="[0-9]{4}[A-Z]{4}[0-9]{1}"
                    value={orderNo}
                    onChange={(e) => setOrderNo(e.target.value)}
                />
                <StyledLabel htmlFor="zipCode">Zip Code</StyledLabel>
                <StyledInput
                    required
                    id="zipCode"
                    type="text"
                    pattern="[0-9]{5}"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                />
                <Button disabled={loading}>Track</Button>
            </Form>
            {error && (
                <Error>
                    No order found, pls check your zip and order number
                </Error>
            )}
        </Panel>
    );
};

export default SignIn;
