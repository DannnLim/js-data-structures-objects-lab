// Write your solution in this file!

const driver = {
    name: "Sam",
    address: "11 Broadway"
};

function updateDriverWithKeyAndValue(driver, name, address) {
    const newUpdate = { ...driver };
    newUpdate[name] = address;
    return newUpdate
}
console.log(updateDriverWithKeyAndValue.newUpdate)

function destructivelyUpdateDriverWithKeyAndValue(driver, name, address) {
    driver[name] = address;
    return driver
}

console.log(driver)

function deleteFromDriverByKey(newUpdate, name) {
    delete { ...newUpdate };
    return {}

}
console.log(deleteFromDriverByKey())
console.log(driver)

function destructivelyDeleteFromDriverByKey(driver, name) {
    delete driver.name;
    return driver
}

console.log(destructivelyUpdateDriverWithKeyAndValue(driver))