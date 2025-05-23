import React from 'react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type: 'success' | 'error';
  actionLabel?: string;
  onAction?: () => void;
}

export function Modal({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  type, 
  actionLabel = 'OK',
  onAction 
}: ModalProps) {
  if (!isOpen) return null;

  const handleAction = () => {
    if (onAction) {
      onAction();
    } else {
      onClose();
    }
  };

  const iconColor = type === 'success' ? 'text-green-600' : 'text-accent-red';
  const bgColor = type === 'success' ? 'from-green-50 to-green-100' : 'from-red-50 to-red-100';
  const iconBg = type === 'success' ? 'bg-green-100' : 'bg-red-100';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />
        
        <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className={`bg-gradient-to-r ${bgColor} px-4 pb-4 pt-5 sm:p-6 sm:pb-4`}>
            <div className="sm:flex sm:items-start">
              <div className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${iconBg} sm:mx-0 sm:h-10 sm:w-10`}>
                {type === 'success' ? (
                  <svg className={`h-6 w-6 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className={`h-6 w-6 ${iconColor}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  {title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {message}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <Button
              type="button"
              variant={type === 'success' ? 'primary' : 'secondary'}
              onClick={handleAction}
              className="w-full sm:ml-3 sm:w-auto"
            >
              {actionLabel}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={onClose}
              className="mt-3 w-full sm:mt-0 sm:w-auto"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// convenient wrapper components for common use cases
interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function SuccessModal({ 
  title = 'Success!', 
  ...props 
}: SuccessModalProps) {
  return (
    <Modal
      {...props}
      title={title}
      type="success"
    />
  );
}

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function ErrorModal({ 
  title = 'Error', 
  ...props 
}: ErrorModalProps) {
  return (
    <Modal
      {...props}
      title={title}
      type="error"
    />
  );
} 