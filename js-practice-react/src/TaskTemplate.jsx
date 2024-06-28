import "./TaskTemplate.css"

function TaskTemplate({taskName, taskComp}) {
  return (
    <div className="TaskTemplateWrapper">
        <h1>{taskName}</h1>
        <div>{taskComp}</div>
    </div>
  );
}

export default TaskTemplate;
