// var maxOperations = function(nums, k) {
//     let count = 0
//     let i = 0
//     let j = nums.length - 1
//     let sortedArray = nums.sort() //nlogn
//     while(i < j) {
//         if (sortedArray[i] + sortedArray[j] < k) {
//              i++
//         }else if (sortedArray[i] + sortedArray[j] > k) {
//             j--
//         }else {
//             j--
//             i++
//             count++
//         }
//     }
//     return count
// };

// in java
// class Solution {
//     public int maxOperations(int[] nums, int k) {
//         Arrays.sort(nums);
//         int i = 0;
//         int j = nums.length - 1;
//         int ans = 0;
//         while(i < j) {
//             if ((nums[i] + nums[j]) == k) {
//                 i++;
//                 j--;
//                 ans++;
//             }else if((nums[i] + nums[j]) < k) {
//             i++;
//         }else {
//             j--;
//         }
//     }
//         return ans;
// }
// }