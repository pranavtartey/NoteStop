import { useParams,useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const DeleteNote = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const deleteNote = async() => {
            try {
                await axios.delete(`/notes-app/note/${id}/deletenote`);
                console.log("The note was deleted successfully");
                navigate("/");
            } catch (error) {
                console.log("Error occored while deleting the Note",error)
            }
        }
        deleteNote();
    },[]);
}

export default DeleteNote;