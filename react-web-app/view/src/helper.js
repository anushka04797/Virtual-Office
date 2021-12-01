import { PERMISSIONS } from "./Config"

export const user_groups=()=>{
    //let temp=[]
    let groups = sessionStorage.getItem('groups').split(',')
    return groups
}

export const has_group=(group)=>{
    let groups = user_groups()
    if(groups.includes(group)){
        return true
    }
    return false
}
export const has_permission=(permission)=>{
    let permissions = sessionStorage.getItem(PERMISSIONS).split(',')
    return permissions.includes(permission)
}
export function arrayRemoveItem(arr, value) { 
    return arr.filter(function(ele){ 
        // console.log(ele)
        return ele != value; 
    });
}