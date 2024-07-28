import React from "react";
import { Link } from "react-router-dom";

export interface MyLinkProps {
    url: string,
    name: string
}

function MyLink(prop: MyLinkProps) {
    return (
        <li className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
            <Link to={prop.url}>{prop.name}</Link>
        </li>
    );
}

export default MyLink;