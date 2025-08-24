const testData = [6,4,7,8,9,1,2,3,5];

const maxLength = testData.length - 1;

const sort = ((arr: number[]) => {
    for (let i = maxLength; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[i]) {
                let tempVar = arr[j];
                arr[j] = arr[i];
                arr[i] = tempVar;
            }
        }
    }
    return arr;
});

console.log(sort(testData));

