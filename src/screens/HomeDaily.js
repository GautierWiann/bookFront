import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/HeaderDaily';
import Article from '../components/ArticleDaily';
import TopArticle from '../components/TopArticleDaily';
import styles from '../styles/Daily/Home.module.css';

function HomeDaily() {
  const bookmarks = useSelector((state) => state.bookmarks.value);
  const hiddenArticles = useSelector((state) => state.hiddenArticles.value);

  const [articlesData, setArticlesData] = useState([]);
  const [topArticle, setTopArticle] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then(response => response.json())
      .then(data => {
        setTopArticle(data.articles[0]);
        setArticlesData(data.articles.filter((data, i) => i > 0));
      });
  }, []);

  const filteredArticles = articlesData.filter((data) => !hiddenArticles.includes(data.title));
  const articles = filteredArticles.map((data, i) => {
    const isBookmarked = bookmarks.some(bookmark => bookmark.title === data.title);
    return <Article key={i} {...data} isBookmarked={isBookmarked} />;
  });

  let topArticles;
  if (bookmarks.some(bookmark => bookmark.title === topArticle.title)) {
    topArticles = <TopArticle {...topArticle} isBookmarked={true} />
  } else {
    topArticles = <TopArticle {...topArticle} isBookmarked={false} />
  }

  return (
    <div>
      <Header />
      {topArticles}
      <div className={styles.articlesContainer}>
        {articles}
      </div>
    </div>
  );
}

export default HomeDaily;
