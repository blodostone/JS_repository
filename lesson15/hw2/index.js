export function createLogger() {
    let arr = [];

    function warn(str) {
        let memory = {};
        memory.message = str;
        memory.dateTime = new Date();
        memory.type = "warn";
        arr.push(memory);
    }

    function error(str) {
        let memory = {};
        memory.message = str;
        memory.dateTime = new Date();
        memory.type = "error";
        arr.push(memory);
    }

    function log(str) {
        let memory = {};
        memory.message = str;
        memory.dateTime = new Date();
        memory.type = "log";
        arr.push(memory);
    }

    function getRecords(type) {
        if (arr.length === 0) {
            return [];
        }
        if (type === "warn" || type === "error" || type === "log") {
            const arrfilter = arr.filter((el) => el.type === type);
            let arrSort = arrfilter.slice().sort((a, b) => {
                if (a.dateTime < b.dateTime) {
                    return 1;
                }
                if (a.dateTime > b.dateTime) {
                    return -1;
                }
            });
            // console.log(arrSort);
            return arrSort;
        } else if (type === undefined) {
            let arrSort = arr.sort((a, b) => {
                if (a.dateTime > b.dateTime) {
                    return -1;
                }
                if (a.dateTime < b.dateTime) {
                    return 1;
                }
            });

            return arrSort;
        }
    }

    return {
        warn,
        error,
        log,
        getRecords,
    };
}