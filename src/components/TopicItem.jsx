function TopicItem({ topic }) {
  return (
    <div>
      {topic.slug}
      <span>{topic.description}</span>
    </div>
  );
}

export default TopicItem;
