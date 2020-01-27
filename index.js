// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(obj => console.log(obj.name));
}

function logDriversByHometown(drivers, location) {
    drivers.forEach(obj => { if (obj.hometown === location) {console.log(obj.name)} });
}

function driversByRevenue(drivers) {
    const newArr = drivers.slice();
    return newArr.sort(function(current, next) {
        return current.revenue - next.revenue;
    });
}

function driversByName(drivers) {
    const newArr = drivers.slice();
    return newArr.sort(function(current, next) {
        return current.name.localeCompare(next.name);
    });
}

function totalRevenue(drivers) {
    return drivers.reduce(function (total, currentDriver) {
        return total + currentDriver.revenue;
    }, 0);
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}