import React from 'react';

const Popup = ({ isOpen, onClose, onSave }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSave = () => {
    onSave(value);
    setValue('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-button" onClick={onClose}>Close</button>
        <input className="popup-input" type="text" value={value} onChange={handleChange} />
        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Popup;
