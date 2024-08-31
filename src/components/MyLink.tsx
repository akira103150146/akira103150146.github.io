import React from "react";
import { Link } from "react-router-dom";

export interface MyLinkProps {
    url: string,
    name: string
}

function MyLink(prop: MyLinkProps) {
    return (
        <li className="rounded-md px-3 py-2 text-lg font-medium text-white bg-nav-texture">
            <Link to={prop.url}>{prop.name}</Link>
        </li>
    );
}

export default MyLink;