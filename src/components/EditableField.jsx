import React, { useState } from 'react';

const EditableField = ({ value, onSave, multiline = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  const handleSave = () => {
    onSave(editedValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      setEditedValue(value);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    if (multiline) {
      return (
        <textarea
          value={editedValue}
          onChange={(e) => setEditedValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className="w-full p-1 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          autoFocus
        />
      );
    }
    return (
      <input
        type="text"
        value={editedValue}
        onChange={(e) => setEditedValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className="w-full p-1 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        autoFocus
      />
    );
  }

  return (
    <span 
      onClick={() => setIsEditing(true)}
      className="cursor-pointer hover:bg-gray-100 rounded p-1 -m-1 inline-block"
    >
      {value}
    </span>
  );
};

export default EditableField;
