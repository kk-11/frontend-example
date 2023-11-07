import { FC } from "react";
import { Article } from "../../../../vite-env";
import { StyledImage } from "./Articles.styled";

const Articles: FC<{ articles: Article[] }> = ({
    articles,
}) => {
    return articles.map((article: Article) => {
        const { articleNo, articleName, articleImageUrl, quantity, price } =
            article;
        return (
            <div key={articleNo}>
                {articleImageUrl && <StyledImage src={articleImageUrl} alt={articleName} loading="lazy"/>}
                <p>{articleName}</p>
                <p>quantity: {quantity}</p>
                <p>price: {price}</p>
            </div>
        );
    });
};

export default Articles;
