function intersection(nums1, nums2) {

                                                   const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const intersectionSet = new Set();

    set1.forEach(value => {
        if (set2.has(value)) {
            intersectionSet.add(value);
        }
    });

    return Array.from(intersectionSet);
}

const list1 = [1, 2, 2, 3, 4, 7];
const list2 = [3, 4, 4, 5, 6, 7];
console.log(intersection(list1, list2));  // Output: [3, 4, 7]


// Converts both input arrays to sets to remove duplicates.
// Creates an empty set to store the intersection.
// Iterates over the first set, adding elements to the intersection set if they are also in the second set.
// Converts the intersection set back to an array and returns it.