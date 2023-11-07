import { FC } from "react";

// Define a type for the status values
export type TStatus =
    | "Ready for collection"
    | "Failed delivery attempt"
    | "In transit"
    | "Registered";

const statusesMap: Record<TStatus, number> = {
    "Ready for collection": 0.8,
    "Failed delivery attempt": 0.7,
    "In transit": 0.3,
    Registered: 0.1,
};

 interface ProgressProps {
     statusArr: TStatus[];
 }

const Progress: FC<ProgressProps> = ({ statusArr }) => {
    // Find the first matching status in the array
    const status = statusArr.find((s) => s in statusesMap);

    // Calculate the value based on the found status or use 0 as the default
    const value = status ? statusesMap[status] : 0;

    return (
        <div>
            <progress id="file" max={1} value={value}>
                {`${value * 100}%`}
            </progress>
        </div>
    );
};

export default Progress;
