const formatCustomDate = (dateString:string):string=>{
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate()-1);

    const isToday = date.toDateString() == today.toDateString();
    const isYesterday = date.toDateString() == yesterday.toDateString();

    if(isToday){
        return "Today";
    }else if (isYesterday){
        return "Yesterday";
    }else{
        const day = date.getDate().toString().padStart(2,'0');
        const month = date.toLocaleString('en-US',{month:'short'});
        return `${day} ${month}`
    }
}
export default formatCustomDate