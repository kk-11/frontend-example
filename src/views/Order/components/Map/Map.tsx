import { FC } from "react";
import { StyledMap } from "./Map.styled";
import { MapMeta } from "../../../../vite-env";

const Map: FC<{ meta?: MapMeta }> = ({ meta }) => {
    console.log(meta);
    return (
        <>
            <StyledMap src={meta.pickup_address_map_url} />
            <a target="_blank" href={meta.pickup_address_link}>
                Get Directions
            </a>
        </>
    );
};

export default Map;
