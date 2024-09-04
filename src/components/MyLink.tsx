import React from "react";
import { Link } from "react-router-dom";

export interface MyLinkProps {
    url: string,
    name: string
}

function MyLink(prop: MyLinkProps) {
    return (
        <li className="w-28 rounded-md px-3 py-2 text-lg font-medium text-white bg-nav-texture bg-no-repeat hover:opacity-50">
            <Link to={prop.url}>{prop.name}</Link>
        </li>
    );
}

export default MyLink;