/**
 * 枚举定义工具
 * 示例：
 * const STATUS = createEnum({
 *     AUDIT_WAIT: [1, '审核中'],
 *     AUDIT_PASS: [2, '审核通过']
 * })
 * 获取枚举值：STATUS.AUDIT_WAIT
 * 获取枚举描述：STATUS.getDesc('AUDIT_WAIT')
 * 通过枚举值获取描述：STATUS.getDescFromValue(STATUS.WAIT)
 *
 */
interface enumObj {
    [key: string]: [number, string];
}
export declare function createEnum(definition: enumObj): {
    getDesc(enumName: string): string;
    getDescFromValue(value: number): string;
};
export {};
