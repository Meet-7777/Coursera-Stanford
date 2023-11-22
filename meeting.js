function maxMeeting(start,end){
    const n= start.length
    const meetings=[]
    for(let i=0;i<n;i++){
        meetings.push({start:start[i],end:end[i],number:i+1})
        console.log("The meeting are: "+meetings[i].number)
    }
    meetings.sort((a,b)=>{a.end-b.end})
    const answer=[meetings[0].number]
    // console.log(answer)
    let limit=meetings[0].end
    for(let i=1;i<n;i++){
        if(meetings[i].start>limit){
            answer.push(meetings[i].number)
            limit=meetings[i].end
        }
    }
    console.log("The meetings should be held in this order: ")
    console.log(answer.join(" ")+" ")    
}
const start=[1,3,0,5,8,5]
const end=[2,4,5,7,9,9]
a=maxMeeting(start,end)
console.log(a)