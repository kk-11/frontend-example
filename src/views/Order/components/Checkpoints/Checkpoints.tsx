import { FC } from "react";
import { Checkpoint } from "../../../../vite-env";
import { LocationAndTime, Status } from "./Checkpoints.styled";
import Progress from "../Progress";
import { TStatus } from "../Progress/Progress";


const Checkpoints: FC<{ checkpoints: Checkpoint[] }> = ({ checkpoints }) => {
        const status = checkpoints.map((cp) => cp.status) as TStatus[];
        
        return (
            <div>
                <Progress statusArr={status} />
                {checkpoints.map((cp: Checkpoint) => {
                    const date = new Date(cp.event_timestamp);
                    const localeDate = date.toLocaleDateString("en-GB");
                    const hours = date.getHours();
                    const minutes = String(date.getMinutes()).padStart(2, '0');
                    const timeAndDate = `${localeDate} ${hours}:${minutes}`;

                    return (
                        <div key={cp.event_timestamp}>
                            <Status>{cp.status}</Status>
                            <p>{cp.status_details}</p>
                            <LocationAndTime>
                                <p>{cp.city}</p>
                                <p>{timeAndDate}</p>
                            </LocationAndTime>
                        </div>
                    );
                })}
            </div>
        );
    };

export default Checkpoints;
