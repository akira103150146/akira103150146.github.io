import ArticleCover from "../components/ArticleCover";
import img from "../imgs/Celine-NEW-2.png";

function English() {
    return (
        <div className="flex flex-wrap">
            <ArticleCover articleUrl="because_usages" coverImg={img} title="各種因為的用法"></ArticleCover>
            <ArticleCover articleUrl="abc" coverImg={img} title="測試"></ArticleCover>
        </div>
    )
}

export default English;