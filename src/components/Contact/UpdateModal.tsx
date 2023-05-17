import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "../commmon";
import Input from "../commmon/Input";
import { useAppDispatch } from "../../redux/store/hooks";
import { Status } from "../../types";
import { setUpdateContact } from "../../redux/slices/contacts";

type TProps = {
  contactId: string;
  initialFirstName: string;
  initialLastName: string;
  initialStatus: Status;
  isOpen: boolean;
  onClose: () => void;
};

const UpdateModal: React.FC<TProps> = ({
  isOpen,
  onClose,
  contactId,
  initialFirstName,
  initialLastName,
  initialStatus,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [activeOption, setActiveOption] = useState<Status>(initialStatus);

  const dispatch = useAppDispatch();

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => onClose(), 300);
  }, [onClose]);

  const handleUpdateContact = () => {
    dispatch(
      setUpdateContact({
        id: contactId,
        firstName,
        lastName,
        status: activeOption,
      })
    );
    setFirstName("");
    setLastName("");
    setActiveOption("active");
    handleClose();
  };

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:ountline-none bg-neutral-800/70">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        <div
          className={`translate duration-300 h-full ${
            showModal
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadaw-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center p-6 rounded-t justify-center relative border-b">
              <button
                onClick={handleClose}
                className="p-1 border-0 hover:opacity-70 transition absolute right-4"
              >
                <IoMdClose size={18} />
              </button>
              <div className="text-lg font-semibold">Update Contact</div>
            </div>
            <div className="relative p-6 flex flex-row items-center gap-2 justify-center">
              <div className="flex flex-col gap-3 items-center justify-center">
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  name="firstName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <div className="flex flex-row align-center justify-center gap-5">
                  <label>Status: </label>
                  <div className="flex flex-row gap-2 cursor-pointer">
                    <input
                      type="radio"
                      id="active"
                      name="active"
                      value="active"
                      checked={activeOption === "active"}
                      onChange={() => setActiveOption("active")}
                    />
                    <label htmlFor="active">Active</label>
                  </div>
                  <div className="flex flex-row gap-2 cursor-pointer">
                    <input
                      type="radio"
                      id="inactive"
                      name="inactive"
                      value="inactive"
                      checked={activeOption === "inactive"}
                      onChange={() => setActiveOption("inactive")}
                    />
                    <label htmlFor="inactive">Inactive</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-6 items-center justify-center">
              <Button content="Update Contact" onClick={handleUpdateContact} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
