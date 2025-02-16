import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                //ADMIN
                //CSS
                //FEATURES
                'resources/js/admin/features/user/update_status.js',
                'resources/js/admin/features/user/create.js',
                'resources/js/admin/features/user/delete.js',
                'resources/js/admin/features/user/edit.js',
                'resources/js/admin/features/user/update_password.js',
                'resources/js/admin/features/product/index.js'
            ],
            refresh: true,
        }),
    ],
});
