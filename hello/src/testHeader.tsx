import React, {useState} from "react";

type TestHeaderProps = {
    name: string,
    color?: string,
    children: React.ReactNode;
}


const TestHeader = ({name,color}:TestHeaderProps) => {
    return(
        <h1 style={{color:`${color}`}}>{name}</h1>
    )
}

TestHeader.defaultProps  = {
    name:"최영훈",
    color:"red",
};

export default TestHeader;