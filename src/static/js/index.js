const classes = [
    {
        id: 'inf8480',
        name: 'INF8480',
        description: 'Systèmes répartis et infonuagique',
        color: '#6e5494',
        link: 'https://moodle.polymtl.ca/course/view.php?id=612',
        todo: [],
    },
    {
        id: 'inf4420',
        name: 'INF4420',
        description: 'Sécurité informatique',
        color: '#c9510c',
        link: 'https://moodle.polymtl.ca/course/view.php?id=2609',
        todo: [],
    },
    {
        id: 'inf8175',
        name: 'INF8175',
        description: 'Intelligence artificielle: méthodes et algorithmes',
        color: '#bd2c00',
        link: 'https://moodle.polymtl.ca/course/view.php?id=32',
        todo: [],
    },
    {
        id: 'log8371',
        name: 'LOG8371',
        description: 'Ingénierie de la qualité en logiciel',
        color: '#6cc644',
        link: 'https://moodle.polymtl.ca/course/view.php?id=990',
        todo: [],
    },
    {
        id: 'log8430',
        name: 'LOG8430',
        description: 'Architecture logicielle et conception avancée',
        color: '#4078c0',
        link: 'https://moodle.polymtl.ca/course/view.php?id=1766',
        todo: [],
    }
]

const classesContainer = document.querySelector('.classes-container');
for (const classItem of classes) {
    const classElement = document.createElement('div');
    classElement.classList.add('class');
    classElement.id = classItem.id;
    classElement.style.backgroundColor = classItem.color;

    const sigle = document.createElement('a');
    sigle.classList.add('class-sigle');
    sigle.href = classItem.link;
    sigle.target = '_blank';
    sigle.textContent = classItem.name;
    
    const titre = document.createElement('h2');
    titre.classList.add('class-title');
    titre.textContent = classItem.description;
    
    const todo = document.createElement('div');
    for (const todoItem of classItem.todo) {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo');
        todoElement.textContent = todoItem;
        todo.appendChild(todoElement);
    }


    classElement.appendChild(sigle);
    classElement.appendChild(titre);
    classElement.appendChild(todo);

    classesContainer.appendChild(classElement);
}