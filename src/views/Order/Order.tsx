import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../../contexts";
import { Logo, Panel, Title } from "../shared.styled";
import { Order } from "../../vite-env";
import Checkpoints from "./components/Checkpoints";
import Articles from "./components/Articles";
import Map from "./components/Map";
import { Wrapper, Nav } from "./Order.styled";

const Order = () => {
    const { order } = useContext(OrderContext);
    const { checkpoints, delivery_info } = order as Order;
    const { articles } = delivery_info;
    const hasCollectionData = checkpoints.find(
        (cp) => cp.status === "Ready for collection" && checkpoints[0]?.meta
    );
    return (
        <>
            <Nav>
                <Link to="/">Check a different order</Link>
            </Nav>
            <Wrapper>
                {hasCollectionData && (
                    <Panel>
                        <Title $align="left">Map</Title>
                        <Map meta={checkpoints[0].meta} />
                    </Panel>
                )}

                <Panel>
                    <Title $align="left">Shipping Updates</Title>
                    <Checkpoints checkpoints={checkpoints} />
                </Panel>
                <Panel>
                    <Title $align="left">Articles</Title>
                    <Articles articles={articles} />
                </Panel>
            </Wrapper>
        </>
    );
};

export default Order;
