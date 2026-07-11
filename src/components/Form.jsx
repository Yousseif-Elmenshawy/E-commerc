import { useState } from 'react';
import { Link } from 'react-router-dom';

const NeoForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = "Email must be have @";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.email = "Password is required";
    if (formData.password.length < 6) newErrors.password = "Password must be have or higher six characters";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Data Send successfully !");
      window.location.href = "/"
    }
  };

  return (
    <section className='login'>
      <div className="container mt-5">
        <form onSubmit={handleSubmit} className="neo-card p-4" style={{maxWidth: '400px', margin: 'auto'}}>
          <h2 className="mb-4 fw-bold">Login</h2>

          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input 
              className={`form-control neo-input ${errors.email ? 'is-invalid' : ''}`}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            {errors.email && <small className="text-danger fw-bold">{errors.email}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input 
              type="password"
              className={`form-control neo-input ${errors.password ? 'is-invalid' : ''}`}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            {errors.password && <small className="text-danger fw-bold">{errors.password}</small>}
          </div>
          <div>
            <p className='link text-center'>don't have account ? <Link to="/Form2">Create account here</Link></p>
          </div>

          <button type="submit" className="submit w-100">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default NeoForm