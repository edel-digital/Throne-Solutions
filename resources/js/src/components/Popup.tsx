import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        background: 'linear-gradient(#BC832B)',
        padding: '2rem',
        borderRadius: '12px',
        maxWidth: '500px',
        textAlign: 'center',
        color: 'white',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        position: 'relative',
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1.2rem',
          }}
        >
          ×
        </button>
        
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          Exclusive Program Offer!
        </h2>
        
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          Join our premium program today and get <strong>20% off</strong> your first month! 
          Limited time offer for new members.
        </p>
        
        <div style={{ marginTop: '1.5rem' }}>
          <button
            onClick={() => {
              window.location.href = '/programs';
              onClose();
            }}
            style={{
              padding: '12px 30px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Explore Programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;