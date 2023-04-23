import { db } from "@/config/firabase";
import { iToken } from "@/interfaces/TokensService";
import { collection, getDocs } from "firebase/firestore/lite";

export const tokenGetServices = async (): Promise<iToken[]> => {
  const services = collection(db, "Services");
  const servicesSnapshot = await getDocs(services);
  const servicesData = servicesSnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return servicesData as any as iToken[];
};
