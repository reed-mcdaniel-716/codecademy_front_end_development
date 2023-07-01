import NewTopicForm from "../../components/NewTopicForm";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { selectAllTopics } from "./topicsSlice";
import { useSelector } from "react-redux";

export default function Topics() {
  const topics = useSelector(selectAllTopics); // replace this with a call to your selector to select all the topics in state
  console.log("topics=", topics);
  const hasTopics = Object.keys(topics).length !== 0;
  return (
    <section className="center">
      <h1>Topics</h1>
      {hasTopics && (
        <ul className="topics-list">
          {Object.values(topics).map((topic) => (
            <li className="topic" key={topic.id}>
              <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
                <div className="topic-container">
                  <img src={topic.icon} alt="" />
                  <div className="text-content">
                    <h2>{topic.name}</h2>
                    <p>{topic.quizIds.length} Quizzes</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
