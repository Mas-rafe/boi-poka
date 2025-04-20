const getStoredBook = () =>{
    const storeBookStr = localStorage.getItem("readList");

    if(storeBookStr){
        const storeBookData = JSON.parse(storeBookStr)
        return storeBookData;
    }
    else{
        return [];
    }
}

const addToStoredDB = (id) =>{
    const storedBookData = getStoredBook();
    if(storedBookData.includes(id)){
        alert("theres no data")
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList",data)
        console.log(storedBookData);
    }
}
export {addToStoredDB};