interface item {
    id: number;
    parentId: number;
    name: string;
    children?: Array<item>;
}
export declare function listToTree(data: Array<item>): Array<item>;
/**
 * @description: 数组去重
 * @param {*} arr
 * @return {*}
 */
export declare function uniqueArray(arr: Array<any>): Array<any>;
export {};
