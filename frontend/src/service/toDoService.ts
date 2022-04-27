
const getNextStatusToDo = (status : string) => {
    if (status === "OPEN") {
        return 'IN PROGRESS';
    } else {
        return 'DONE';
    }
}

export const getNextStatus = (status : string) => {
    return getNextStatusToDo(status)
}