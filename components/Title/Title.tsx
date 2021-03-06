import React from "react";

interface TitleProps {
    text: string;
    dataTestId: string;
}

export const Title = ({ text, dataTestId }: TitleProps) => {
    return (
        <>
            <h3 className="title" data-testid={dataTestId}>
                {text}
            </h3>
        </>
    );
};
