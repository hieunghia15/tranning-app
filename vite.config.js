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
                'resources/css/sneat/assets/vendor/fonts/boxicons.css',
                'resources/css/sneat/assets/vendor/css/core.css',
                'resources/css/sneat/assets/vendor/css/theme-default.css',
                'resources/css/sneat/assets/css/demo.css',
                'resources/css/sneat/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css',
                'resources/css/sneat/assets/vendor/libs/apex-charts/apex-charts.css',
                'resources/css/sneat/assets/vendor/js/helpers.js',
                'resources/css/sneat/assets/js/config.js',
                'resources/css/sneat/assets/vendor/css/pages/page-auth.css',
                //JS
                'resources/js/sneat/assets/vendor/libs/jquery/jquery.js',
                'resources/js/sneat/assets/vendor/libs/popper/popper.js',
                'resources/js/sneat/assets/vendor/js/bootstrap.js',
                'resources/js/sneat/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js',
                'resources/js/sneat/assets/vendor/js/menu.js',
                'resources/js/sneat/assets/vendor/libs/apex-charts/apexcharts.js',
                'resources/js/sneat/assets/js/main.js',
                'resources/js/sneat/assets/js/dashboards-analytics.js',
                //FEATURES
                'resources/js/admin/features/user/update_status.js',
                'resources/js/admin/features/user/create.js',
                'resources/js/admin/features/user/delete.js',
                'resources/js/admin/features/user/edit.js',
                'resources/js/admin/features/user/update_password.js'
            ],
            refresh: true,
        }),
    ],
});
