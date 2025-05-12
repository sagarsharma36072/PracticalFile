import React from 'react';
const TaskFilterComponent = ({ filter, onFilterChange, taskCounts }) => {
    const filterOptions = [
        { value: 'all', label: 'All' },
        { value: 'active', label: 'Active' },
        { value: 'completed', label: 'Completed' },
    ];

    return (
        <div className="flex flex-wrap items-center justify-between mb-4 pb-4 border-b border-gray-200">
            <div className="flex space-x-2 mb-2 sm:mb-0">
                {filterOptions.map((option) => (
                    <button key={option.value}
                        onClick={() => onFilterChange(option.value)}
                        className={`px-3 py-1.5 text-sm rounded-md transition-colors ${filter === option.value
                            ? 'bg-primary-100 text-primary-800 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        {option.label}
                        <span className="ml-1 text-xs inline-flex items-center justify-center rounded-full bg-white px-1.5 py-0.5">
                            {taskCounts[option.value]}
                        </span>
                    </button>
                ))}
            </div>

            <p className="text-sm text-gray-500">
                {taskCounts.completed} of {taskCounts.all} tasks completed
            </p>
        </div>
    );
};

export default TaskFilterComponent;

