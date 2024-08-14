import { Button } from "@headlessui/react"
import clsx from 'clsx';
import { Link, Navigate, NavLink } from "react-router-dom";

export interface ArticleCoverProp {
    coverImg: string,
    title: string,
    articleUrl: string
}

export default function ArticleCover(prop: ArticleCoverProp) {
    return (
        <div className={clsx("flex flex-col justify-items-center",
            "w-full",
            "md:w-1/3"
        )}>
            <img className="hover:opacity-50" src={prop.coverImg}></img>
            <NavLink
                to={prop.articleUrl}
                className="border-solid text-2xl text-white hover:text-orange-500 text-center"
            >
                {prop.title}
            </NavLink>
        </div>
    )
}