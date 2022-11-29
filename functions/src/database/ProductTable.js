import firestoreDB from "./firebaseConfig.js";

class ProductTable {
    static TABLE_NAME = "Product"
    static FIELD_CATEGORY = "category"

    static async getProducts(){
        const snapshot = await firestoreDB.collection(this.TABLE_NAME).get()
        const products = []
        
        snapshot.forEach(doc => products.push(doc.data()))
        
        return products
    }
    
    static async getProductsByCategory(category){
        const products = []
        const snapshot = await firestoreDB
            .collection(this.TABLE_NAME)
            .where(this.FIELD_CATEGORY, "==", category)
            .get()
        
        snapshot.forEach(doc => products.push(doc.data()))
        
        return products
    }
    
    static async getProductByID(productID){
        const response = await firestoreDB.collection(this.TABLE_NAME).doc(productID).get()
    
        if(response.exists)
            return response.data()
        else
            return null
    }

}

export default ProductTable


