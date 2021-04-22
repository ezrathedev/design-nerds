


function find_duplicate(arr) {
    let slow = arr[0];
    let fast = arr[0];
    while(slow !== fast){
        slow = arr[slow];
        fast = arr[fast];
    }
    // find cycle length
    let current = arr[arr[slow]];
    let cycleLenth = 1;
    while(current !== arr[arr][slow]){
        current = arr[current];
        cycleLenth += 1
    }
    return find_start(arr, cycleLenth);
}
function find_start (arr, cycleLenth) {
    let pointer1 = arr[0];
    let pointer2 = arr[0];
    // move pointer2 ahead cycleLength steps
    while(cycleLenth > 0){
        pointer2 = arr[pointer2];
        cycleLenth -= 1;
    }
    while(pointer1 !== pointer2){
        pointer1 = arr[pointer1];
        pointer2 = arr[pointer2];
    }
    return pointer1;
}



