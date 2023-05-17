import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useAppDispatch } from "../../redux/store/hooks";
import { setDeleteContact } from "../../redux/slices/contacts";
import { useUpdateContact } from "../../hooks";
import UpdateModal from "./UpdateModal";
import { Status } from "../../types";

type TProps = {
  id: string;
  firstName: string;
  lastName: string;
  status: Status;
};

const ContactCard: React.FC<TProps> = ({ id, firstName, lastName, status }) => {
  const { onOpen, onClose, isOpen } = useUpdateContact();
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(setDeleteContact(id));
  };

  return (
    <div className="bg-neutral-50 rounded-md shadow-sm border border-neutral-300 p-4">
      <UpdateModal
        contactId={id}
        isOpen={isOpen}
        onClose={onClose}
        initialFirstName={firstName}
        initialLastName={lastName}
        initialStatus={status}
      />
      <p className="font-medium text-md text-neutral-700 text-center">
        {firstName} {lastName}
      </p>
      <p className="text-sm text-neutral-500 text-center">{status}</p>
      <div className="flex flex-row items-center justify-center gap-6 mt-4">
        <AiFillEdit size={24} cursor="pointer" onClick={onOpen} />
        <AiFillDelete size={24} cursor="pointer" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default ContactCard;
