import { AiFillCloseCircle } from "react-icons/ai";
import { useAppSelector } from "../../redux/store/hooks";
import ContactCard from "./ContactCard";

const ContactList: React.FC = () => {
  const contacts = useAppSelector((state) => state.contacts.contacts);

  return (
    <>
      {contacts.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {contacts.map(({ id, firstName, lastName, status }) => (
            <ContactCard
              key={id}
              id={id}
              firstName={firstName}
              lastName={lastName}
              status={status}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-row gap-3 border border-neutral-300 p-4 rounded-lg w-fit mx-auto">
          <AiFillCloseCircle size={40} />
          <p className="font-semibold text-neutral-700 text-center">
            No Contact Found <br />
            Please add contact from Create Contect Button
          </p>
        </div>
      )}
    </>
  );
};

export default ContactList;
