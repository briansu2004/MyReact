import Task from "./Task";

//   setTasks([
//     ...tasks,
//     { id: 4, text: "Cooking", day: "Oct 14th at 3:00pm", reminder: true },
//   ]);

// const Tasks = ({ tasks }) => {
//     return (
//       <div className="task">
//         {tasks.map((task) => (
//           <h3 key={task.id}>{task.text}</h3>
//         ))}
//       </div>
//     );
//   };

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="task">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
