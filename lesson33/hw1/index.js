  const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';


  export const getTasksList = () => {
      return fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks')
          .then(tasksByList => tasksByList.json())
  }

  // .then(tasksByList => )

  export const getTaskById = taskId => {
      return fetch(`https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks/${taskId}`)
          .then(taskByData => taskByData.json())
  }





  // getTaskById(64)