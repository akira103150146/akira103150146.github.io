import { Button } from "@headlessui/react"
import clsx from 'clsx';

export interface ArticleCoverProp
{
    url: string
    title: string
}

export default function Article(prop: ArticleCoverProp) {
    return (
        <div className={clsx("flex flex-col justify-items-center",
            "w-full",
            "md:w-1/3"
        )}>
            <img src={prop.url}></img>
            <div className="border-solid text-2xl text-white hover:text-orange-500 text-center">
                {prop.title}
            </div>
        </div>
    )
}