import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import grammar from "../md/grammar.md";

function English() {
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        fetch(grammar).then(res => res.text()).then(text => setMarkdown(text))
    }, [])
    return (
        <Markdown remarkPlugins={[remarkGfm]}>
            {markdown}
        </Markdown>
    )
}

export default English;