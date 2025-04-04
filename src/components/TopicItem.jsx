import { Link } from "react-router";

function TopicItem({ topic }) {
  return (
    <div>
      <ul className="item2">
        <Link to={`/articles?column_name=topic&&value=${topic.slug}`}>
          <li>{topic.slug.toUpperCase()}</li>
        </Link>
      </ul>
    </div>
  );
}

export default TopicItem;
