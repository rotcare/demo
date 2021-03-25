import { EnrollmentFormEditor } from './EnrollmentFormEditor';
import * as React from 'react';
import { EnrollmentForm } from './EnrollmentForm';

export function HomePage() {
    const [form, _] = React.useState(() => new EnrollmentForm());
    return (
        <div>
            <EnrollmentFormEditor form={form}/>
            <button onClick={() => {
                alert(JSON.stringify(form, undefined, '  '));
            }}>提交</button>
        </div>
    );
}
