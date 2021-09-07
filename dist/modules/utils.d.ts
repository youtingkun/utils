export declare const injectScript: (src: any) => void;
export declare const hasClass: (el: any, className: any) => boolean;
export declare const addClass: (el: any, className: any) => void;
export declare const removeClass: (el: any, className: any) => void;
export declare const elementIsVisibleInViewport: (el: any, partiallyVisible?: boolean) => boolean;
export declare const getScrollPosition: (el?: any) => {
    x: any;
    y: any;
};
export declare const scrollToTop: () => void;
export declare const shuffle: (arr: any) => any[];
export declare function copyToBoard(value: any): boolean;
/**
 * @description:
 * @param {*} length 生成字符串的长度
 * @param {*} chars
 * @return {*}
 */
export declare function generateUUID(length: any, chars: any): string;
