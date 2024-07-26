import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css"
import { useDispatch, useSelector } from "react-redux";

export default function Contact() {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);

  const handleDelete = () => {
    dispatch({
      type: 'contact/changeContact',
      payload: { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },

    })
  }
  

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p><IoPerson className={css.icon} size="14" />{contact.name}</p>
        <p><FaPhone className={css.icon} size="14" />{contact.number}</p> 
      </div>
      
      <button className={css.button} onClick={handleDelete} >Delete</button>
    </div>
  )

} 