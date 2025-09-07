import React from 'react';
import './BasketDropdown.css';
import './BasketDropdown.mobile.css';
import './BasketDropdown.desktop.css';
import { useAppState, useAppDispatch } from '../context/AppContext';

export default function BasketDropdown({ open, onClose }) {
  const { cart } = useAppState();
  const dispatch = useAppDispatch();

  if (!open) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: 60,
        left: 'auto',
        right: 0,
        zIndex: 100,
        background: '#fff',
        border: '1px solid #eee',
        borderRadius: 12,
        minWidth: 260,
        maxWidth: 340,
        width: '100%',
        boxSizing: 'border-box',
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        padding: 12,
        margin: 0,
      }}
      className="basket-dropdown-responsive basket-dropdown-desktop"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontWeight: 700, fontSize: 18 }}>Basket</span>
        <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer' }}>&times;</button>
      </div>
      {cart.length === 0 ? (
        <div style={{ color: '#888', textAlign: 'center', padding: 16 }}>Basket is empty</div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
          {cart.map((item, idx) => (
            <li
              key={idx}
              className="basket-dropdown-item-responsive"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 10,
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontWeight: 500,
                  fontSize: 15,
                  wordBreak: 'break-word',
                  maxWidth: '100%',
                  flex: '1 1 100%',
                }}
              >
                {item.title}
              </span>
              <button
                onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: idx })}
                className="basket-dropdown-delete-btn"
                style={{
                  background: '#ff1744',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  padding: '8px 18px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontSize: 15,
                  marginTop: 6,
                  minWidth: 70,
                  maxWidth: 120,
                  width: 'auto',
                  display: 'block',
                  alignSelf: 'flex-start',
                }}
                aria-label="Remove"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
