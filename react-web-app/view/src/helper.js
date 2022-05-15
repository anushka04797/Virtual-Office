import { PERMISSIONS } from "./Config"
import moment from "moment";
import jsPDF from "jspdf";
import "jspdf-autotable";

export const user_groups = () => {
    //let temp=[]
    let groups = sessionStorage.getItem('groups').split(',')
    return groups
}

export const has_group = (group) => {
    let groups = user_groups()
    if (groups.includes(group)) {
        return true
    }
    return false
}
export const has_permission=(permission)=>{
    if(sessionStorage.getItem(PERMISSIONS)!=null){
        let permissions = sessionStorage.getItem(PERMISSIONS).split(',')
        return permissions.includes(permission)
    }
    return false
}
export function arrayRemoveItem(arr, value) {
    return arr.filter(function (ele) {
        // console.log('ele',ele,'value',value)
        return ele != value;
    });
}

export const getBuildDate = (epoch) => {
    const buildDate = moment(epoch).format("DD-MM-YYY HH:MM");
    return buildDate;
};
export function capitalize(string) {
    if (string != undefined) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    return ''
}

export function capitalizeFirstLetter(string="") {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function unique_elements(array){
    return array.filter((v, i, a) => a.indexOf(v) == i);
}

export const exportPDF = (profile_details,startDate,endDate,pdfData,tableData) => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(12);
  //  doc.rect(130, 30, 600, 40);
    
    const title = profile_details.first_name + "_" + profile_details.last_name + "_" + "Timecard_" + moment(startDate).format("DD/MM/YYYY") + "-" + moment(endDate).format("DD/MM/YYYY");
    const headers = [[
       
        "Date",
        "Days",
        "Task Title",
        "Hours", 
        "Hours Type"
       
    ]];
    console.log("pdfData", pdfData)
    //console.log("table1111111", tableData.Task)
    const uData = tableData.map((elt, idx) => [
       
        elt.Date,
        elt.Days,
        elt.Task,
        elt.Total,
        elt.Time,
    ])
    let content = {
        startY: 140,
        head: headers,
        body: uData
    };
    const edate= moment(endDate).format("DD/MM/YYYY")
    const name =profile_details.first_name + " " + profile_details.last_name 
    doc.setFontSize(18);
    doc.text(90, 50, "Datasoft Manufacturing & Assembly Gulshan Branch")
    doc.setFontSize(12);
    doc.text(42,100, "Employee Time card")
    doc.text(420, 100, "Week-Ending: "+ edate)
    doc.text(42, 120, "Name: "+ name)
    doc.text(420, 120, "NID: ")   
    doc.text(42, 350, "Submitted : (date & Time)")
    doc.autoTable(content);
    doc.save(profile_details.first_name + "_" + profile_details.last_name + "_" + "Timecard_" + moment(startDate).format("DD/MM/YYYY") + "-" + moment(endDate).format("DD/MM/YYYY") + ".pdf")
}