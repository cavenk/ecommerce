import firestoreDB from "./firebaseConfig.js"


export default class CategoryTable {
    static TABLE_NAME = "Category"
    
    static async getCategories(){
        const categories = []
        const snapshot = await firestoreDB
            .collection(this.TABLE_NAME)
            .get()

        snapshot.forEach(doc => categories.push(doc.data()))

        return categories
    }
}