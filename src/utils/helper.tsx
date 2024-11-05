import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';


export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": return <img src='/No-priority.svg' />
        case "Low": return <img src='/Img - Low Priority.svg' />
        case "Medium": return <img src='/Img - Medium Priority.svg' />
        case "High": return <img src='/Img - High Priority.svg' />
        case "Urgent": return <img src='/SVG - Urgent Priority colour.svg' />
        default: return <AiFillWarning color='#fc7840' size={14} />
    }
}

export const getStatusIcon = (priority: string) => {
    switch (priority) {
        case "Backlog": return <img src='/Backlog.svg' />
        case "Todo": return <img src='/To-do.svg' />
        case "In progress": return <img src='/in-progress.svg' />
        case "Done": return <img src='/Done.svg' />
        case "Canceled": return <img src='/Cancelled.svg' />
        default: return <AiFillCloseCircle color='#94a2b3' size={16} />
    }
}