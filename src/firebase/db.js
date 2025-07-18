import { getFirestore, collection, getDocs } from "firebase/firestore"
import { app } from './config'

const db = getFirestore(app)

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const products = []
    querySnapshot.forEach((doc) => {
        products.push({...doc.data(), id: doc.id})
    })
    return products
}