import axios from "axios";

const ListMentor = async (mentorID) => {
  const result = await axios.get(
    `https://assign-mentor-tppd.onrender.com/mentor/${mentorID}`
  );
  return result.data;
};
export default ListMentor;