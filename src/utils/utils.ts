import { ElMessage } from "element-plus";
import type { FormInstance } from 'element-plus'
import { loginAPI } from 'api/api';
import router from '../router';
import store from '../store';
import { LoginForm } from 'api/types';

export const showError = (message: string) => {
    ElMessage.error(message);
};

export const submitForm = async (formEl: FormInstance | undefined, loginForm: LoginForm) => {
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            console.log('submit!');
            try {
                const res = await loginAPI(loginForm);
                if (res) {
                    store.commit('login'); // 提交登录操作
                    router.replace({ path: '/' }); // 跳转到 / 路由
                    ElMessage('Login success');
                } else {
                    showError('No such user');
                }
            } catch (error) {
                showError(error.message);
            }
        } else {
            const messages = Object.keys(fields)
                .map(key => fields[key][0].message)
                .join('\n');
            showError(messages);
        }
    });
};
