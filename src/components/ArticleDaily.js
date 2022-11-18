import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../reducers/DailyNews/bookmarksDaily';
import { hideArticle } from '../reducers/DailyNews/hiddenArticlesDaily';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


import styles from '../styles/Daily/Article.module.css';

function Article(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleBookmarkClick = () => {
    if (!user.token) {
      return;
    }

    fetch(`https://gautierwianni.vercel.app/Daily/users/canBookmark/${user.token}`)
      .then(response => response.json())
      .then(data => {
        if (data.result && data.canBookmark) {
          if (props.isBookmarked) {
            dispatch(removeBookmark(props));
          } else {
            dispatch(addBookmark(props));
          }
        }
      });
  }

  let iconStyle = {};
  if (props.isBookmarked) {
    iconStyle = { 'color': '#E9BE59' };
  }

  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <h3 style={{fontSize:20}}>{props.title}</h3>
        <FontAwesomeIcon onClick={() => handleBookmarkClick()} icon={faBookmark} style={iconStyle} className={styles.bookmarkIcon} />
        {props.inBookmarks || <FontAwesomeIcon icon={faEyeSlash} onClick={() => dispatch(hideArticle(props.title))} className={styles.hideIcon} />}
      </div>
      <h4 style={{ textAlign: "right", marginTop:'4%' }}>- {props.author}</h4>
      <div className={styles.divider}></div>
      <img src={props.urlToImage} alt={props.title} width={"100%"} height={"50%"} />
      <p>{props.description}</p>
    </div>
  );
}

export default Article;
