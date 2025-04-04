import { getTopics } from "../api/api";
import TopicItem from "./TopicItem";
import { useEffect, useState } from "react";
function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then((topics) => {
        setTopics(topics);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <div>TOPICS</div>

      {topics && topics.length > 0
        ? topics.map((topic) => {
            return <TopicItem key={topic.slug} topic={topic} />;
          })
        : null}
    </section>
  );
}

export default Topics;
