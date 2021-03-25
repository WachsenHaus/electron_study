import React from "react";

//children에 jsx를 해주어야 하위 자식들이 렌더링이 잘된다. 
type Props = {
    children: JSX.Element|JSX.Element[];
  };
 const Wrapper = ({children}:Props) => {
    const style = {
        border: `2px solid red`,
        padding : `16px`
    }
    return(
        <div style={style}>
            {children}
        </div>
    )
}


export default Wrapper;