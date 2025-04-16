import api from "./api";
import { ProfileData } from "../components/AboutMe/AboutMe.type";

export const getAboutMe = async (): Promise<ProfileData> => {
  const { data } = await api.get<ProfileData>("/api/AboutMe");
  return {
    ...data,
    socialLinks: {
      github: "https://github.com/ArayaCG",
      linkedin: "https://www.linkedin.com/in/cristian-gabriel-araya-salattino/",
    },
  };
};
