import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import CustomButton from '../UI/CustomButton/CustomButton';

interface ConfirmDeleteProps {
  onDelete: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const ConfirmDelete = ({ onDelete, onClose, isOpen }: ConfirmDeleteProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Are you sure you want to delete this task?</DialogTitle>
      <DialogActions>
        <CustomButton name='Yes' onClick={onDelete} autoFocus />
        <CustomButton name='No' onClick={onClose} />
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDelete;
