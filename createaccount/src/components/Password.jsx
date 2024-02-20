import { useState, useEffect } from 'react';

const passwordCriteria = {
  taille: value => value.length >= 12,
  minuscules: value => /[a-z]/.test(value),
  majuscules: value => /[A-Z]/.test(value),
  chiffres: value => /[0-9]/.test(value),
  caractèresSpéciaux: value => /[^a-zA-Z0-9]/.test(value),
};

const criteriaLabels = {
  taille: '12 caractères minimum',
  minuscules: 'Minuscules',
  majuscules: 'Majuscules',
  chiffres: 'Chiffres',
  caractèresSpéciaux: 'Caractères spéciaux (+=!@#$%^&*)',
};

const Password = ({ value, onChange }) => {
  const [criteria, setCriteria] = useState({
    taille: false,
    minuscules: false,
    majuscules: false,
    chiffres: false,
    caractèresSpéciaux: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const updatedCriteria = Object.keys(criteria).reduce((acc, key) => {
      acc[key] = passwordCriteria[key](value);
      return acc;
    }, {});

    setCriteria(updatedCriteria);
  }, [value]);

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={event => onChange(event.target.value)}
        style={{ paddingRight: '30px' }}
      />
      <span 
        onClick={togglePasswordVisibility}
        style={{
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer'
        }}
      >
        {showPassword ? '🙈' : '👁️'}
      </span>
      <ul>
        {Object.keys(criteria).map(key => (
          <li key={key} style={{ color: criteria[key] ? 'green' : 'red' }}>
            {criteria[key] ? '✓' : '✗'} {criteriaLabels[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Password;
