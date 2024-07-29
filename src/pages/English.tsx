import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import grammar from "../md/grammar.md";
import MyToggle from "../components/Toggle";


function English() {
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        fetch(grammar).then(res => res.text()).then(text => setMarkdown(text))
    }, [])

    return (
        <MyToggle 
            title="各種因為的用法"
            defaultOpen={false}
            hidden={
                <Markdown
                    className="markdown"
                    remarkPlugins={[remarkGfm]}>
                    {markdown}
                </Markdown>
            }></MyToggle>
    )
}

export default English;