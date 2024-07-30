import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MyToggle from "../components/MyToggle";
import because from "../markdowns/各種因為的用法/because.md";
import becauseOf from "../markdowns/各種因為的用法/because-of.md";
import dueTo from "../markdowns/各種因為的用法/due-to.md";
import since from "../markdowns/各種因為的用法/since.md";
import as from "../markdowns/各種因為的用法/as.md";
import owingTo from "../markdowns/各種因為的用法/owing-to.md";
import asAResultOf from "../markdowns/各種因為的用法/as-a-result-of.md";
import onAccountOf from "../markdowns/各種因為的用法/on-account-of.md";

async function fetchBecauseUsage() {
    const data: string[] = [];
    await fetch(because).then(res => res.text()).then(text => data.push(text));
    await fetch(becauseOf).then(res => res.text()).then(text => data.push(text));
    await fetch(dueTo).then(res => res.text()).then(text => data.push(text));
    await fetch(since).then(res => res.text()).then(text => data.push(text));
    await fetch(as).then(res => res.text()).then(text => data.push(text));
    await fetch(owingTo).then(res => res.text()).then(text => data.push(text));
    await fetch(asAResultOf).then(res => res.text()).then(text => data.push(text));
    await fetch(onAccountOf).then(res => res.text()).then(text => data.push(text));

    return data;
}

function English() {
    const [becauseUsages, setBecauseUsages] = useState<string[]>([]);

    useEffect(() => {
        fetchBecauseUsage().then((data) => setBecauseUsages(data));
    }, [])

    return (
        <MyToggle
            title="各種因為的用法"
            defaultOpen={false}
            hidden={
                <div>
                    {
                        becauseUsages.map((markdown, index) => (
                            <MyToggle  key={index} title={"用法" + (index + 1)} defaultOpen={false} hidden={
                                <Markdown
                                    className="markdown"
                                    remarkPlugins={[remarkGfm]}>
                                    {markdown}
                                </Markdown>
                            } />
                        ))
                    }
                </div>
            } />
    )
}

export default English;