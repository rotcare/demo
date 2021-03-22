class SomeObject {
    public static someFuncThrows() {
        // 演示 source map 的行号映射
        throw new Error('wtf');
    }
}

SomeObject.someFuncThrows();