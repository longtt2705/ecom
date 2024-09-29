import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore";
import firebase from "../app/firebase";

export const getDoctorTimeShifts = async (doctorId: number, date: string) => {
    const q = query(
        collection(firebase.database, `doctor-${doctorId.toString()}`, "timeShifts", date),
    );
    const data = await getDocs(q);

    return data.docs.map((document) => ({ id: document.id, value: document.data().value as number }));
}

export const addDoctorTimeShift = async (doctorId: number, date: string, timeShift: string): Promise<void> => {
    await addDoc(collection(firebase.database, `doctor-${doctorId.toString()}`, "timeShifts", date), { value: timeShift });
}

export const storeAppointment = async (email: string, additionalData: object) => {
    try {
        await addDoc(collection(firebase.database, `appointments-${email}`), additionalData);
    } catch (error) {
        console.error("Error writing user data: ", error);
        throw error;
    }
}

export const getAppointments = async (email: string) => {
    const q = query(
        collection(firebase.database, `appointments-${email}`),
        orderBy('dateOfAppointment', 'desc')
    );
    const data = await getDocs(q);
    return data.docs.map((document) => ({ id: document.id, ...document.data() }));
}