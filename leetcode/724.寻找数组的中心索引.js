"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let left = 0;
    let right = 0;
    const diff = new Array(nums.length).fill(0);
    // 不断累积 每个位置上的左值 和 右值 放在同一个index 进行加减 如果有0 就是成功
    // 由于 当前位置 左值 会加一次当前位置的值 右值会减一次当前位置的值 所以不会有影响
    for (let i = 0, j = nums.length - 1 - i; i < nums.length; i++, j = nums.length - 1 - i) {
        diff[i] += left;
        left += nums[i];
        diff[j] -= right;
        right += nums[j];
    }
    return diff.indexOf(0);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(pivotIndex([1, 7, 3, 6, 5, 6]), 3);
assert_1.default.strictEqual(pivotIndex([1, 2, 3]), -1);
assert_1.default.strictEqual(pivotIndex([-1, -1, -1, -1, -1, 0]), 2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzI0LuWvu+aJvuaVsOe7hOeahOS4reW/g+e0ouW8lS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzI0LuWvu+aJvuaVsOe7hOeahOS4reW/g+e0ouW8lS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQTZCQTs7O0dBR0c7QUFDSCxJQUFJLFVBQVUsR0FBRyxVQUFVLElBQWM7SUFDckMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsTUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QywrQ0FBK0M7SUFDL0MsNkNBQTZDO0lBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNuRixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO1FBQ2hCLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUNqQixLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUNwQyxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUM1QixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsVUFBVSxDQUNOLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ2xDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrmlbTmlbDnsbvlnovnmoTmlbDnu4QgbnVtc++8jOivt+e8luWGmeS4gOS4quiDveWkn+i/lOWbnuaVsOe7hOKAnOS4reW/g+e0ouW8leKAneeahOaWueazleOAglxyXG5cclxu5oiR5Lus5piv6L+Z5qC35a6a5LmJ5pWw57uE5Lit5b+D57Si5byV55qE77ya5pWw57uE5Lit5b+D57Si5byV55qE5bem5L6n5omA5pyJ5YWD57Sg55u45Yqg55qE5ZKM562J5LqO5Y+z5L6n5omA5pyJ5YWD57Sg55u45Yqg55qE5ZKM44CCXHJcblxyXG7lpoLmnpzmlbDnu4TkuI3lrZjlnKjkuK3lv4PntKLlvJXvvIzpgqPkuYjmiJHku6zlupTor6Xov5Tlm54gLTHjgILlpoLmnpzmlbDnu4TmnInlpJrkuKrkuK3lv4PntKLlvJXvvIzpgqPkuYjmiJHku6zlupTor6Xov5Tlm57mnIDpnaDov5Hlt6bovrnnmoTpgqPkuIDkuKrjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOlxyXG5udW1zID0gWzEsIDcsIDMsIDYsIDUsIDZdXHJcbui+k+WHujogM1xyXG7op6Pph4o6XHJcbue0ouW8lTMgKG51bXNbM10gPSA2KSDnmoTlt6bkvqfmlbDkuYvlkowoMSArIDcgKyAzID0gMTEp77yM5LiO5Y+z5L6n5pWw5LmL5ZKMKDUgKyA2ID0gMTEp55u4562J44CCXHJcbuWQjOaXtiwgMyDkuZ/mmK/nrKzkuIDkuKrnrKblkIjopoHmsYLnmoTkuK3lv4PntKLlvJXjgIJcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6XHJcbm51bXMgPSBbMSwgMiwgM11cclxu6L6T5Ye6OiAtMVxyXG7op6Pph4o6XHJcbuaVsOe7hOS4reS4jeWtmOWcqOa7oei2s+atpOadoeS7tueahOS4reW/g+e0ouW8leOAglxyXG7or7TmmI46XHJcblxyXG5udW1zIOeahOmVv+W6puiMg+WbtOS4uiBbMCwgMTAwMDBd44CCXHJcbuS7u+S9leS4gOS4qiBudW1zW2ldIOWwhuS8muaYr+S4gOS4quiMg+WbtOWcqCBbLTEwMDAsIDEwMDBd55qE5pW05pWw44CCXHJcbiogKi9cclxuaW1wb3J0IHt0cmFuc2NvZGV9IGZyb20gXCJidWZmZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBwaXZvdEluZGV4ID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XHJcbiAgICBsZXQgbGVmdCA9IDA7XHJcbiAgICBsZXQgcmlnaHQgPSAwO1xyXG4gICAgY29uc3QgZGlmZiA9IG5ldyBBcnJheShudW1zLmxlbmd0aCkuZmlsbCgwKTtcclxuICAgIC8vIOS4jeaWree0r+enryDmr4/kuKrkvY3nva7kuIrnmoTlt6blgLwg5ZKMIOWPs+WAvCDmlL7lnKjlkIzkuIDkuKppbmRleCDov5vooYzliqDlh48g5aaC5p6c5pyJMCDlsLHmmK/miJDlip9cclxuICAgIC8vIOeUseS6jiDlvZPliY3kvY3nva4g5bem5YC8IOS8muWKoOS4gOasoeW9k+WJjeS9jee9rueahOWAvCDlj7PlgLzkvJrlh4/kuIDmrKHlvZPliY3kvY3nva7nmoTlgLwg5omA5Lul5LiN5Lya5pyJ5b2x5ZONXHJcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IG51bXMubGVuZ3RoIC0gMSAtIGk7IGkgPCBudW1zLmxlbmd0aDsgaSsrLGogPSBudW1zLmxlbmd0aCAtIDEgLSBpKSB7XHJcbiAgICAgICAgZGlmZltpXSArPSBsZWZ0O1xyXG4gICAgICAgIGxlZnQgKz0gbnVtc1tpXTtcclxuICAgICAgICBkaWZmW2pdIC09IHJpZ2h0O1xyXG4gICAgICAgIHJpZ2h0ICs9IG51bXNbal07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlmZi5pbmRleE9mKDApO1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBwaXZvdEluZGV4KFsxLCA3LCAzLCA2LCA1LCA2XSksIDMsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIHBpdm90SW5kZXgoWzEsIDIsIDNdKSwgLTEsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIHBpdm90SW5kZXgoXHJcbiAgICAgICAgWy0xLCAtMSwgLTEsIC0xLCAtMSwgMF0pLCAyLFxyXG4pO1xyXG4iXX0=