import ArticleCover from "../components/ArticleCover";
import img from "../imgs/Celine-NEW-2.png";

function English() {
    return (
        <div className="flex flex-wrap">
            <ArticleCover articleUrl="because_usages" coverImg={img} title="各種因為的用法"></ArticleCover>
            <ArticleCover articleUrl="basic_five_sentence" coverImg={img} title="英文五大句型"></ArticleCover>
        </div>
    )
}

export default English;