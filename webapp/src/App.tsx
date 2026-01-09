export const App = () => {
  const ideas = [
    {
      id: 1,
      title: "Smart Study Planner",
      description:
        "An app that creates personalized study schedules based on your courses and deadlines.",
    },
    {
      id: 2,
      title: "Campus Navigation",
      description:
        "A mobile app that helps students navigate large university campuses using AR technology.",
    },
    {
      id: 3,
      title: "Virtual Study Groups",
      description:
        "A platform for students to form virtual study groups and collaborate on assignments.",
    },
  ];

  return (
    <div>
      <h1>Welcome to UniSmart</h1>
      <h2>Ideas</h2>
      {ideas.map((idea) => {
        return (
          <div key={idea.id}>
            <h3>{idea.title}</h3>
            <p>{idea.description}</p>
          </div>
        );
      })}
    </div>
  );
};
