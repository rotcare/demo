import { codegen, Model } from '@rotcare/codegen';
import type { Enrollment } from '../Private/Enrollment';
import { generateForm } from '@rotcare/demo-codegen-form';

export const EnrollmentForm = codegen(
    (enrollment: Model<Enrollment>) => {
        return generateForm(enrollment, {
            studentAge: '学生年龄',
            studentName: '学生姓名',
            course: '课程',
        });
    }
);
