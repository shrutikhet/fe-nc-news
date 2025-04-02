function TopicItem({ topic }) {
  return (
    <div>
      {topic.slug}
      <p>{topic.description}</p>
    </div>
  );
}

export default TopicItem;
