/** @format */

import { useQuery, gql } from "@apollo/client";

const GET_TASKS = gql`
  query GetTasks {
    getAllTasks {
      id
      title
      description
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {data.getAllTasks.map(
          (task: { id: string; title: string; description: string }) => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Home;
