import React from "react";
import type { StatsArray } from "../../../types";

const statsArray: StatsArray = [
    {
        title: "Active Users",
        value: "201k+",
        key: 1,
    },
    {
        title: "Members",
        value: "1.4k+",
        key: 2,
    },
    {
        title: "Platforms",
        value: "31",
        key: 3,
    },
]

const Stats: React.FC = () => {
    return (
        <div className="flex flex-row col-span-2 lg:col-span-2 justify-between border-2 rounded-xl border-gray-900 shadow-md shadow-gray-900 lg:mr-10 bg-cream" role="banner" aria-label="stats">
            {statsArray.map((stat) => (
                <div className="my-4 mx-2 lg:my-10 lg:mx-10 flex flex-col items-center lg:gap-2" key={stat.key} >
                    <h1 className="text-3xl xl:text-5xl font-bold font-poppins italic text-secondary">
                        {stat.value}
                    </h1>
                    <h1 className="text-lg xl:text-2xl font-medium font-poppins text-gray-900">
                        {stat.title}
                    </h1>
                </div>
            ))}
        </div>
    )
}

export default Stats;
