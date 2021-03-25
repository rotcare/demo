import { codegen, Model } from '@rotcare/codegen';
import { generateFormEditor } from '@rotcare/demo-codegen-form';
import { EnrollmentForm } from './EnrollmentForm';

// 渲染一个表单，把用户提交的值绑定到表单对象上
export const EnrollmentFormEditor = codegen(
    (enrollment: Model<EnrollmentForm>) => {
        return generateFormEditor(enrollment, {
            studentAge: '学生年龄',
            studentName: '学生姓名',
            course: '课程',
        });
    }
);