export const user_groups=()=>{
    //let temp=[]
    let groups = localStorage.getItem('groups').split(',')
    return groups
}

export const has_group=(group)=>{
    let groups = user_groups()
    if(groups.includes(group)){
        return true
    }
    return false
}
export function arrayRemoveItem(arr, value) { 
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}