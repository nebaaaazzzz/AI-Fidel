import { db } from '@/config/firebase';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { toastError } from './toast';

export async function addDocToCollection(collectionName: string, data: any) {
  try {
    const docRef = await setDoc(doc(db, 'users', data.id), data);
    return docRef;
  } catch (e) {
    toastError(e.message);
  }
}
//sysctl -w net.ipv6.conf.all.disable_ipv6=1
//sysctl -w net.ipv6.conf.default.disable_ipv6=1
