import React, { useEffect, useState } from "react";
import BaseLayoutWrap from "./BaseLayoutStyle";

type Props = {
    children: JSX.Element;
}

export default function BaseLayout(props: Props) {

    return (
        <BaseLayoutWrap>
            <div className="search-box">
                {props.children}
            </div>
        </BaseLayoutWrap>
    );
}

