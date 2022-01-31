import * as taskInterfaces from '../../interfaces/task.interface'

interface TaskProps {
  task?: taskInterfaces.task
  taskStyle?: taskInterfaces.task['style']
}

export default TaskProps