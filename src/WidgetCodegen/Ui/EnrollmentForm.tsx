import { codegen, use, Model } from '@rotcare/codegen';
import type { Enrollment } from '../Private/Enrollment';

export const EnrollmentForm = codegen(
    (enrollment: Model<Enrollment>) => {
        const { generateForm } = use(import('./generateForm'));
        return generateForm(enrollment, {
            studentAge: '学生年龄',
            studentName: '学生姓名',
            course: '课程',
        });
    }
);
