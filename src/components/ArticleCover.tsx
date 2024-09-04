import clsx from 'clsx';
import { NavLink, useNavigate } from "react-router-dom";

export interface ArticleCoverProp {
    coverImg: string,
    articleUrl: string
}

export default function ArticleCover(prop: ArticleCoverProp) {
    const navigate = useNavigate();
    return (
        <img className={clsx(
            "w-full",
            "md:w-1/3"
        )}
            onClick={() => { navigate(prop.articleUrl) }}
            src={prop.coverImg}
        >
        </img>
    )
}