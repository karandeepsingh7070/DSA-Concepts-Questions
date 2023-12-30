/**
 * @param {number[]} nums
 * @return {boolean}
 */

// not a correct solution
var increasingTriplet = function(nums) {
    let fs = null
    let ss = null

    for(let i = 0; i < nums.length; i++) {
        if (fs === null) {
            fs = nums[i]
        }else if (ss === null) {
            if (nums[i] <= fs) {
                ss = fs
                fs = nums[i]
            }else {
                ss = nums[i]
            }
        }else if (nums[i] <= fs ) {
            ss = fs
            fs = nums[i]
        }else if(nums[i] <= ss) {
            ss = nums[i]
        }else {
            return true
        }
    }
    return false
}; 