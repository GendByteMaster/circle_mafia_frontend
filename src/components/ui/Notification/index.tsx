import React from 'react';
import { useNotificationContext } from '../../../context/NotificationContext';

const typeStyles = {
  success: 'bg-green-500 text-white border-green-600',
  error: 'bg-red-500 text-white border-red-600',
  info: 'bg-blue-500 text-white border-blue-600',
};

const typeIcons = {
  success: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
  ),
  error: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
  ),
  info: (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
  ),
};

export default function Notification() {
  const { notifications, closeNotification } = useNotificationContext();

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col gap-4">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`flex items-center px-6 py-4 rounded-lg shadow-lg border transition-all duration-300 ease-in-out opacity-100 scale-100 animate-fade-in ${typeStyles[n.type]}`}
          style={{ minWidth: 280, fontFamily: 'inherit', fontSize: '1rem', letterSpacing: '0.01em' }}
        >
          {typeIcons[n.type]}
          <span className="flex-1 font-medium">{n.message}</span>
          <button
            onClick={() => closeNotification(n.id)}
            className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors duration-200 focus:outline-none"
            aria-label="Close notification"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      ))}
    </div>
  );
}

// Tailwind animation
// Add to global styles if not present:
// @keyframes fade-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
// .animate-fade-in { animation: fade-in 0.3s ease; }
