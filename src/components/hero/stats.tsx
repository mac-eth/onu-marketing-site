import React from "react";

const statsArray = [
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
        <div className="flex flex-row justify-between mt-28 gap-4">
            {statsArray.map((stat) => (
                <div className="flex flex-col items-center gap-2" key={stat.key}>
                    <h1 className="text-3xl md:text-5xl font-bold font-poppins italic text-black">
                        {stat.value}
                    </h1>
                    <h1 className="text-lg md:text-2xl font-medium font-poppins text-black">
                        {stat.title}
                    </h1>
                </div>
            ))}
        </div>
    )
}

export default Stats;
