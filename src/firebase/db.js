import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
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

export const getProductsByCategory = async (category) => {
    const q = query(collection(db, "productos"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const products = []
    querySnapshot.forEach((doc) => {
        products.push({...doc.data(), id: doc.id})
    })
    return products
}
