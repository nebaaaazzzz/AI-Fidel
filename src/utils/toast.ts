import { toast } from 'react-toastify';

export function toastError(message: string) {
  toast(message, {
    autoClose: 3000,
    type: 'error'
  });
}

export function toastSuccess(message: string) {
  toast(message, {
    autoClose: 3000,
    type: 'success'
  });
}
