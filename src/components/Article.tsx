import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";



export default function Article() {
    const articleId = useParams().article;
    const [markdown, setMarkdown] = useState<string>();
    useEffect(() => {
        import("../markdowns/"+ articleId + ".md")
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setMarkdown(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    })
    return (
        <div>
            <Markdown
                className="markdown text-white break-normal text-xl px-4"
                remarkPlugins={[remarkGfm]}>
                {markdown}
            </Markdown>
        </div>
    )
}