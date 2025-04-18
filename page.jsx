'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import LanguageSelector from './components/LanguageSelector';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const addTask = (task) => {
    const newTasks = [...tasks, { ...task, id: Date.now() }];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const updateTask = (taskId, updatedTask) => {
    const newTasks = tasks.map(task => 
      task.id === taskId ? { ...updatedTask, id: taskId } : task
    );
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Jeez</h1>
          <LanguageSelector />
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <TaskForm onSubmit={addTask} />
          <TaskList 
            tasks={tasks}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        </div>
      </main>

      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">{t('made_by')}</p>
            <a 
              href="https://t.me/devv_515" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              {t('contact')}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 
