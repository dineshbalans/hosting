import React from 'react'
import MainContext from '../General/MainContext'
import { hSolutionData } from "./data/hSolutionData"
import { FaLongArrowAltRight } from 'react-icons/fa'

const TSolution = () => {
    return (
        <section className="pddng space-y-12">
            <MainContext
                title={hSolutionData.title}
                subTitle={hSolutionData.subTitle}
            />
            <ul className="flex flex-wrap gap-[26px] justify-center lg:justify-between">
                {hSolutionData.items.map(({ id, image, title, subTitle }) => (
                    <li
                        key={id}
                        className="w-full md:w-[47%] lg:w-[31%] bg-cement/40 p-12 space-y-5 
                        shadow-[0px_0px_1.5px_0px_rgba(0,0,0,0.3)] rounded"
                    >
                        <img src={image} alt="" className="w-12 object-contain mx-auto" />
                        <div className="space-y-2 text-center">
                            <h1 className="text-ternary text-lg font-semibold">{title}</h1>
                            <p className="text-quadra">{subTitle}</p>
                        </div>
                        <p className="flex gap-2 text-[#007BFF] items-center justify-center">
                            <span className="cursor-pointer hover:underline">
                                View Details
                            </span>
                            <FaLongArrowAltRight />
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default TSolution