import InputText from "@/components/input/InputText";
import clsx from "clsx";
import { Fragment, useState } from "react";
import React from "react";
type IRenderContent = {
    content: string;
    initialAnswers: string[];
};
const RenderContent = ({ content, initialAnswers }: IRenderContent) => {
    const contents = content.split("....");
    const [tmpAnswers, setTmpAnswers] = useState(initialAnswers);
    const onChange = (value: string, index: number) => {
        const newAnswers = [...tmpAnswers];
        newAnswers[index] = value;
        setTmpAnswers(newAnswers);
    };
    return (
        <div className="flex items-center gap-1 flex-wrap">
            {contents.map((content, index) => (
                <>
                    {content.split(" ").map((text, index) => (
                        <Fragment key={index}>{text && <span>{text} </span>}</Fragment>
                    ))}
                    <div className="flex items-center gap-1 flex-nowrap">
                        <div className="flex items-center justify-center bg-default-500 rounded-full w-[24px] h-[24px]">
                            {index}
                        </div>
                        <InputText
                            height="32px"
                            className={clsx("w-[200px]")}
                            key={`input-${index}`}
                            value={tmpAnswers?.[index]}
                            onChange={(value) => onChange(value, index)}
                        />
                    </div>
                </>
            ))}
        </div>
    );
};
export default RenderContent;