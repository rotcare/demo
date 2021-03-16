import { codegen, Model } from '@rotcare/codegen';
import * as rx from '@rotcare/rx-core';
import type { Enrollment } from '../Private/Enrollment';
import * as React from 'react';

export const EnrollmentForm = codegen<rx.WidgetClass>(
    (enrollment: Model<Enrollment>) => {
        const { generateForm } = require('./generateForm');
        return generateForm(enrollment, {
            studentAge: '学生年龄',
            studentName: '学生姓名',
            course: '课程',
        });
    },
    rx,
    React,
);
