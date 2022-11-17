import { useSelector } from 'react-redux';
import Article from '../components/ArticleDaily';
import Header from '../components/HeaderDaily';
import styles from '../styles/Daily/Bookmarks.module.css';

function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmarks.value);

  let articles = <p>No article</p>;
  if (bookmarks.length > 0) {
    articles = bookmarks.map((data, i) => {
      return <Article key={i} inBookmarks={true} {...data} isBookmarked />;
    });
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>Bookmarks</h2>
        <div className={styles.articlesContainer}>
          {articles}
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
