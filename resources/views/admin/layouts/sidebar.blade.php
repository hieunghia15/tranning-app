<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo">
        <a href="admin.dashboard" class="app-brand-link">
            <span class="app-brand-text demo menu-text fw-bolder ms-2">Mi</span>
        </a>
        <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
          <i class="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
    </div>
    <div class="menu-inner-shadow"></div>
    <ul class="menu-inner py-1">
        <!-- Dashboard -->
        {{-- <li class="menu-item {{ request()->routeIs('admin.dashboard') ? 'active' : '' }}"> --}}
        <li class="menu-item">
            <a href="admin.dashboard" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Bảng điều khiển</div>
            </a>
        </li>
        <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Quản lý</span>
        </li>
        <li class="menu-item">
            <a href="admin.users.index" class="menu-link">
                <i class="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Người dùng</div>
            </a>
        </li>
        <li class="menu-item">
            <a href="admin.posts.index" class="menu-link">
                <i class="menu-icon tf-icons bx bx-list-ul"></i>
                <div data-i18n="Misc">Sản phẩm</div>
            </a>
        </li>
    </ul>
</aside>
