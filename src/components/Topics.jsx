import { getTopics } from "../api/api";
import TopicItem from "./TopicItem";
import { useEffect, useState } from "react";
function Topics() {
  const [topics, setTopics] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState({});

  useEffect(() => {
    getTopics()
      .then((topics) => {
        setTopics(topics);
        setIsError(false);
      })
      .catch((error) => {
        setIsError(true);
        setErrMsg(error.response.data);
      });
  }, []);

  if (isError) {
    return <Error errMsg={errMsg} />;
  }

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
