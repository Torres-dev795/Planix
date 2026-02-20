// Variables
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalState = document.getElementById('modal-state');
const modalPriority = document.getElementById('modal-priority');
const modalClose = document.getElementById('modal-close');

const modalCreate = document.getElementById('modal-create');
const modalCreateClose = document.getElementById('modal-create-close');
const formCreate = document.getElementById('form-create');
const inputTitulo = document.getElementById('input-titulo');
const inputDesc = document.getElementById('input-desc');
const selectEstado = document.getElementById('select-estado');

const btnCreate = document.getElementById('btn-create');
const tabs = document.querySelectorAll('.tab');
const taskCard = document.querySelector('.task-card');

const tagColors = {
    'High':   { background: 'rgba(247, 189, 189, 0.633)', color: '#f33f3f' },
    'Medium':  { background: 'rgba(240, 165, 0, 0.15)',  color: '#f0a500' },
    'Low':   { background: 'rgba(0, 200, 100, 0.15)',  color: '#00c864' },
}

const stateColors = {
    'New':        { background: 'rgba(0, 123, 255, 0.15)',  color: '#007bff' },
    'InProgress': { background: 'rgba(240, 165, 0, 0.15)',  color: '#f0a500' },
    'Pending':    { background: 'rgba(243, 63, 63, 0.15)',  color: '#f33f3f' },
    'Completed':  { background: 'rgba(0, 200, 100, 0.15)',  color: '#00c864' }
}

let state = {
  task: [
    {
      id: 1,
      title: 'Diseñar login',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius.',
      state: 'New',
      priority: 'High',
      date: '12 Feb',
      progress: 60,
      assigned: 'JD'
    }
  ]
}

function renderTasks() {
    document.querySelectorAll('.tasks-container').forEach(col => col.innerHTML = '');

    state.task.forEach(task => {
    const columna = document.querySelector(`#${task.state} .tasks-container`);
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.innerHTML = createTask(task);
    taskCard.addEventListener('click', () => openModal(task));
    columna.appendChild(taskCard);
  });
}

function createTask(task) {
    const tagStyle = tagColors[task.priority] || { background: '#f0f0f0', color: '#555' };
    return `
        <span class="task-tag" style="background: ${tagStyle.background}; color: ${tagStyle.color}">${task.priority}</span>
        <p class="task-title">${task.title}</p>
        <p class="task-progress">Progress</p>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${task.progress}%"></div>
        </div>
        <div class="task-footer">
            <span class="task-date">📅 ${task.date}</span>
            <div class="avatar">${task.assigned}</div>
        </div>`
    ;
}

function openModal(task) { 
    const color = tagColors[task.priority] || { background: '#f0f0f0', color: '#999' };
    const stateColor = stateColors[task.state] || { background: '#f0f0f0', color: '#999' };
    
    modalTitle.textContent = task.title;
    modalDesc.textContent = task.description;
    modalState.textContent = task.state;
    modalState.style.background = stateColor.background;
    modalState.style.color = stateColor.color;
    modalPriority.textContent = task.priority;
    modalPriority.style.background = color.background;
    modalPriority.style.color = color.color;
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

function openCreateModal() {
    modalCreate.classList.remove('hidden');
    formCreate.reset();
}

function closeCreateModal() {
    modalCreate.classList.add('hidden');
}

btnCreate.addEventListener('click', () => openCreateModal());
modalClose.addEventListener('click',closeModal);
modalCreateClose.addEventListener('click', closeCreateModal);

formCreate.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = {
        id: state.task.length + 1,
        title: inputTitulo.value,
        description: inputDesc.value,
        state: selectEstado.value,
        priority: document.getElementById('select-prioridad').value,
        date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }),
        progress: 0,
        assigned: 'JD'
    };
    state.task.push(newTask);
    renderTasks();
    closeCreateModal();
});

renderTasks();


