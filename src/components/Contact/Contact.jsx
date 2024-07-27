import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css"
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../redux/store";

export default function Contact() {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);

  const handleDelete = () => {
    dispatch(change({ id: 'id-3', name: 'Eden Clements', number: '645-17-79' }))
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