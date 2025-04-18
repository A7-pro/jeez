import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

export default function TaskList({ tasks, onDelete, onUpdate }) {
  const { t } = useTranslation();
  const [editingTask, setEditingTask] = useState(null);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleEdit = (task) => {
    setEditingTask({ ...task });
  };

  const handleSave = () => {
    if (editingTask && editingTask.title.trim()) {
      onUpdate(editingTask.id, editingTask);
      setEditingTask(null);
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        {t('no_tasks')}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div key={task.id} className="bg-white shadow rounded-lg p-4">
          {editingTask?.id === task.id ? (
            <div className="space-y-4">
              <input
                type="text"
                value={editingTask.title}
                onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                className="w-full p-2 border rounded"
              />
              <input
                type="date"
                value={editingTask.dueDate}
                onChange={(e) => setEditingTask({ ...editingTask, dueDate: e.target.value })}
                className="w-full p-2 border rounded"
              />
              <select
                value={editingTask.priority}
                onChange={(e) => setEditingTask({ ...editingTask, priority: e.target.value })}
                className="w-full p-2 border rounded"
              >
                <option value="low">{t('low')}</option>
                <option value="medium">{t('medium')}</option>
                <option value="high">{t('high')}</option>
              </select>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  {t('save')}
                </button>
                <button
                  onClick={() => setEditingTask(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  {t('cancel')}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <span className={`px-2 py-1 rounded-full text-sm ${getPriorityColor(task.priority)}`}>
                  {t(task.priority)}
                </span>
              </div>
              <div className="mt-2 text-gray-600">
                {task.dueDate && (
                  <p>{format(new Date(task.dueDate), 'PPP')}</p>
                )}
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(task)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {t('edit')}
                </button>
                <button
                  onClick={() => onDelete(task.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  {t('delete')}
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 
